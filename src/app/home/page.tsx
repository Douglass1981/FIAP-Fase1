"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ModalTransaction from "../../components/modal-component/modaltransaction";
import TransactionInfo from "@/components/TransactionInfo";
import { Icons } from "@/icons";
import { PieChart } from "@/components/Graphs";
import { Footer } from "@/components/Footer";
import { colors } from "../../app/mui.styles";
import styles from "./home.styles.module.scss";
import { ROUTES } from "@/constants";
import mockPrisma from "@/mockPrisma";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/navigation";

dayjs.extend(customParseFormat);

type TransactionType = "income" | "expenses" | "transfer";

interface Transaction {
  id: number;
  category: string;
  description: string;
  date: string;
  amount: number;
  type: "income" | "expenses" | "transfer";
  bankFrom?: string;
  bankTo?: string;
  bank?: string;
  bancoOrigemId?: number;
  bancoDestinoId?: number;
  bancoid?: number;
}

interface ChartData {
  id: string;
  value: number;
  label: string;
  color?: string;
}

const CATEGORY_COLORS_INCOME = [
  colors.green,
  colors.bluePrimary500,
  colors.lightYellow,
  colors.purple,
  colors.gray300,
  colors.white,
];

const CATEGORY_COLORS_EXPENSES = [
  colors.red,
  colors.yellow,
  colors.lightRed,
  colors.black,
  colors.gray800,
];

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [modalType, setModalType] = useState<TransactionType | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const loadTransactions = async () => {
    try {
      const initialData = await mockPrisma.transacoes.findMany({});
      const adaptedData: Transaction[] = await Promise.all(
        initialData.map(async (t: any) => {
          let categoryName = "N/A";
          let descriptionText = "N/A";
          let bankFromName: string | undefined;
          let bankToName: string | undefined;
          let bankName: string | undefined;

          const transactionType: Transaction["type"] =
            t.tipoId === 1
              ? "income"
              : t.tipoId === 2
              ? "expenses"
              : "transfer";

          if (transactionType === "transfer") {
            categoryName = "Transferência";
            bankFromName = t.bancoOrigemId
              ? (
                  await mockPrisma.banco.findUnique({
                    where: { id: t.bancoOrigemId },
                  })
                )?.nome || "N/A"
              : "N/A";
            bankToName = t.bancoDestinoId
              ? (
                  await mockPrisma.banco.findUnique({
                    where: { id: t.bancoDestinoId },
                  })
                )?.nome || "N/A"
              : "N/A";
            descriptionText = `De ${bankFromName} para ${bankToName}`;
          } else {
            categoryName = t.categoriaId
              ? (
                  await mockPrisma.categorias.findUnique({
                    where: { id: t.categoriaId },
                  })
                )?.nome || "N/A"
              : "N/A";
            bankName = t.bancoid
              ? (
                  await mockPrisma.banco.findUnique({
                    where: { id: t.bancoid },
                  })
                )?.nome || "N/A"
              : "N/A";
            descriptionText = `${bankName} - ${t.descricao || "Sem Descrição"}`;
          }

          let formattedDate: string;
          if (t.data) {
            const parsedInitialDate = dayjs(t.data);
            if (parsedInitialDate.isValid()) {
              formattedDate = parsedInitialDate.format("DD/MM/YYYY");
            } else {
              console.warn(
                `[home/page.tsx] Data inválida encontrada para transação ${t.id}: ${t.data}`
              );
              formattedDate = dayjs().format("DD/MM/YYYY");
            }
          } else {
            console.warn(
              `[home/page.tsx] Data ausente para transação ${t.id}.`
            );
            formattedDate = dayjs().format("DD/MM/YYYY");
          }

          return {
            id: t.id,
            category: categoryName,
            description: descriptionText,
            date: formattedDate,
            amount: t.valor,
            type: transactionType,
            bank: bankName,
            bankFrom: bankFromName,
            bankTo: bankToName,
            bancoOrigemId: t.bancoOrigemId,
            bancoDestinoId: t.bancoDestinoId,
            bancoid: t.bancoid,
          };
        })
      );
      setTransactions(adaptedData);
    } catch (error) {
      console.error("Erro ao carregar transações:", error);
    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    loadTransactions();

    const handleFocus = () => {
      console.log("Janela focada, recarregando transações na Home...");
      loadTransactions();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const { totalIncome, totalExpenses } = useMemo(() => {
    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        income += transaction.amount;
      } else if (transaction.type === "expenses") {
        expenses += transaction.amount;
      }
    });

    return { totalIncome: income, totalExpenses: expenses };
  }, [transactions]);

  const receitas_data = useMemo(() => {
    const incomeTransactions = transactions.filter((t) => t.type === "income");
    const categoryMap = new Map<string, number>();

    incomeTransactions.forEach((t) => {
      categoryMap.set(
        t.category,
        (categoryMap.get(t.category) || 0) + t.amount
      );
    });

    const uniqueCategories = Array.from(categoryMap.keys());
    const categoryIndexMap = new Map<string, number>();
    uniqueCategories.forEach((cat, index) => {
      categoryIndexMap.set(cat, index);
    });

    const data: ChartData[] = Array.from(categoryMap.entries()).map(
      ([category, value]) => {
        const colorIndex = categoryIndexMap.get(category)!;

        const color =
          CATEGORY_COLORS_INCOME[colorIndex % CATEGORY_COLORS_INCOME.length];
        return {
          id: category,
          value: value,
          label: category,
          color: color,
        };
      }
    );

    return data;
  }, [transactions]);

  const despesas_data = useMemo(() => {
    const expenseTransactions = transactions.filter(
      (t) => t.type === "expenses"
    );
    const categoryMap = new Map<string, number>();

    expenseTransactions.forEach((t) => {
      categoryMap.set(
        t.category,
        (categoryMap.get(t.category) || 0) + t.amount
      );
    });

    const uniqueCategories = Array.from(categoryMap.keys());
    const categoryIndexMap = new Map<string, number>();
    uniqueCategories.forEach((cat, index) => {
      categoryIndexMap.set(cat, index);
    });

    const data: ChartData[] = Array.from(categoryMap.entries()).map(
      ([category, value]) => {
        const colorIndex = categoryIndexMap.get(category)!;

        const color =
          CATEGORY_COLORS_EXPENSES[
            colorIndex % CATEGORY_COLORS_EXPENSES.length
          ];
        return {
          id: category,
          value: value,
          label: category,
          color: color,
        };
      }
    );

    return data;
  }, [transactions]);

  const chartSize = {
    width: 50,
    height: 50,
  };

  const handleAddTransaction = async () => {
    setModalType(null);
    await loadTransactions();
  };

  const iconMap = {
    income: <ArrowUpwardIcon />,
    expenses: <ArrowDownwardIcon />,
    transfer: <SyncAltOutlinedIcon />,
  };

  const labelMap = {
    income: "Receitas",
    expenses: "Despesas",
    transfer: "Transferência",
  };

  return (
    <section className={styles.home}>
      <div className={styles["logo-container"]}>
        <Image src="/logo.png" width="54" height="54" alt="Logo" />
        <h3 className={styles["title-logo-container"]}>Poup.ai</h3>
      </div>
      <main>
        <div className={styles["container-card"]}>
          <div className={styles["card-breakpoint"]}>
            <div className={styles.card}>
              <div className={styles["presentation-card-home"]}>
                <div>
                  <div className={styles["hello-message-container"]}>
                    <p className={styles["hello-message-text"]}>
                      Olá, {userName || "Usuário"}
                    </p>
                    <Icons.WavingHand />
                  </div>
                  <p className={styles["total-balance-text"]}>
                    Saldo total em conta
                  </p>
                  <span className={styles["account-balance-text"]}>
                    {formatCurrency(totalIncome - totalExpenses)}
                  </span>
                  <Button
                    sx={{
                      color: colors.white,
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    Adicionar conta <AddIcon />
                  </Button>
                </div>
                <Link href={ROUTES.DEFAULT}>
                  <Icons.Logout />
                  <span>Sair</span>
                </Link>
              </div>

              <div className={styles["actions-info-container"]}>
                <div className={styles["actions-bank-details-container"]}>
                  {(
                    ["income", "expenses", "transfer"] as TransactionType[]
                  ).map((type) => (
                    <div
                      key={type}
                      className={styles["actions-bank-details"]}
                      onClick={() => setModalType(type)}
                      style={{ cursor: "pointer" }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: colors.gray300,
                          color: colors.gray800,
                        }}
                      >
                        {iconMap[type]}
                      </Avatar>
                      <p className={styles["actions-bank-details-text"]}>
                        {labelMap[type]}
                      </p>
                    </div>
                  ))}

                  <Link href={ROUTES.TRANSACTIONS} passHref>
                    <div
                      className={styles["actions-bank-details"]}
                      style={{ cursor: "pointer" }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: colors.gray300,
                          color: colors.gray800,
                        }}
                      >
                        <HistoryIcon />
                      </Avatar>
                      <p className={styles["actions-bank-details-text"]}>
                        Extrato
                      </p>
                    </div>
                  </Link>
                </div>

                <div className={styles["details-container"]}>
                  <TransactionInfo
                    type="income"
                    title="Receitas"
                    amount={formatCurrency(totalIncome)}
                  />
                  <TransactionInfo
                    type="expenses"
                    title="Despesas"
                    amount={formatCurrency(totalExpenses)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["graph-details-container"]}>
            <div className={styles["graph-details-card"]}>
              <div className={styles["graph-details"]}>
                <p className={styles["title-graph-details"]}>Total receita</p>
                <span className={`${styles.balance} ${styles.income}`}>
                  {formatCurrency(totalIncome)}
                </span>
              </div>
              <div className={styles.graph}>
                <PieChart
                  data={receitas_data}
                  size={chartSize}
                  className={styles.chart}
                  sx={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>

            <div className={styles["graph-details-card"]}>
              <div className={styles["graph-details"]}>
                <p className={styles["title-graph-details"]}>Total despesa</p>
                <span className={`${styles.balance} ${styles.expenses}`}>
                  {formatCurrency(totalExpenses)}
                </span>
              </div>
              <div className={styles.graph}>
                <PieChart
                  data={despesas_data}
                  size={chartSize}
                  className={styles.chart}
                  sx={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {modalType && (
        <ModalTransaction
          type={modalType}
          open={true}
          onClose={() => setModalType(null)}
          onAddTransaction={handleAddTransaction}
        />
      )}
    </section>
  );
}

