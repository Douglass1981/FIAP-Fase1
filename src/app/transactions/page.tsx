// src/app/transactions/page.tsx
"use client";

import styles from "./transactions.styles.module.scss";
import { Avatar, Box, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { colors } from "../mui.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import Image from "next/image";
import { ChangeEvent, useState, useEffect, useMemo } from "react";
import TransactionCard from "@/components/CardTransactions";
import FilterButton from "@/components/FilterButton";
import TransactionInfo from "@/components/TransactionInfo";
import ButtonTransactions from "@/components/ButtonTransactions";
import ModalTransaction from "@/components/modal-component/modaltransaction";
import mockPrisma from "@/mockPrisma";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

interface Transaction {
  id: number;
  category: string;
  description: string;
  date: string;
  amount: number; // Valor numérico, positivo para receita/transferência, negativo para despesa
  type: "income" | "expenses" | "transfer";
  bankFrom?: string; // Nome do banco de origem
  bankTo?: string;   // Nome do banco de destino
  bank?: string;     // Nome do banco para receitas/despesas
  bancoOrigemId?: number; // ID do banco de origem
  bancoDestinoId?: number; // ID do banco de destino
  bancoid?: number; // ID do banco para receitas/despesas
}

export default function Transactions() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [modalType, setModalType] = useState<"income" | "expenses" | "transfer" | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Última semana");

  // O MAIN_BANK_ID não é mais tão relevante para a soma de transferências em si,
  // mas pode ser útil para outras lógicas ou filtros futuros, então podemos mantê-lo.
  const MAIN_BANK_ID = 2; // <<--- AJUSTE AQUI PARA O ID DO SEU BANCO PRINCIPAL SE FOR USAR EM OUTRO CONTEXTO

  const { totalIncome, totalExpenses } = useMemo(() => {
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
      if (transaction.type === "income") {
        income += transaction.amount;
      } else if (transaction.type === "expenses") {
        expenses += transaction.amount; // transaction.amount já é negativo
      } else if (transaction.type === "transfer") {
        // --- ÚLTIMA CORREÇÃO AQUI: Transferências SEMPRE somam na receita ---
        income += transaction.amount; // Todas as transferências somam na receita.
        // Nenhuma lógica para despesas em transferências.
      }
    });

    return { totalIncome: income, totalExpenses: expenses };
  }, [transactions]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  // Carrega transações mockadas iniciais
  useEffect(() => {
    const loadInitialTransactions = async () => {
      const initialData = await mockPrisma.transacoes.findMany({});

      const adaptedData: Transaction[] = await Promise.all(
        initialData.map(async (t: any) => {
          let categoryName = "N/A";
          let descriptionText = "N/A";
          let bankFromName: string | undefined;
          let bankToName: string | undefined;
          let bankName: string | undefined;

          const transactionType: Transaction["type"] =
            t.tipoId === 1 ? "income" : t.tipoId === 2 ? "expenses" : "transfer";

          if (transactionType === "transfer") {
            categoryName = "Transferência";
            bankFromName = t.bancoOrigemId
              ? (await mockPrisma.banco.findUnique({ where: { id: t.bancoOrigemId } }))?.nome || "N/A"
              : "N/A";
            bankToName = t.bancoDestinoId
              ? (await mockPrisma.banco.findUnique({ where: { id: t.bancoDestinoId } }))?.nome || "N/A"
              : "N/A";
            descriptionText = `De ${bankFromName} para ${bankToName}`;
          } else { // income or expenses
            categoryName = t.categoriaId
              ? (await mockPrisma.categorias.findUnique({ where: { id: t.categoriaId } }))?.nome || "N/A"
              : "N/A";
            bankName = t.bancoid
              ? (await mockPrisma.banco.findUnique({ where: { id: t.bancoid } }))?.nome || "N/A"
              : "N/A";
            descriptionText = `${bankName} - ${t.descricao || 'Sem Descrição'}`;
          }

          return {
            id: t.id,
            category: categoryName,
            description: descriptionText,
            date: dayjs(t.data).format("DD/MM/YYYY"),
            amount: t.valor, // O valor já vem como número, positivo para receita/transferência, negativo para despesa
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
    };
    loadInitialTransactions();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  const handleDelete = (idToDelete: number) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== idToDelete));
    console.log(`Transação com ID ${idToDelete} excluída`);
  };

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setModalType(null);
  };

  const filters = [
    "Última semana",
    "Último mês",
    "Últimos 6 meses",
    "Último ano",
  ];

  const iconMap = {
    income: <ArrowUpwardIcon />,
    expenses: <ArrowDownwardIcon />,
    transfer: <SyncAltOutlinedIcon />,
  };

  return (
    <>
      <Box className={styles["transactions"]}>
        <nav className={styles["transactions__nav"]}>
          <Link
            className={styles["transactions__nav__logo_area"]}
            href="http://localhost:3000/home"
            sx={{ textDecoration: "none" }}
          >
            <Image
              src="/logo.png"
              width="72"
              height="100"
              alt="Logo"
              style={{ width: "15%", height: "auto" }}
            />
            <h1 className={styles["transactions__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Link>
        </nav>
        <main className={styles["transactions__main"]}>
          <Box className={styles["transactions__main__container-info"]}>
            <Box
              className={
                styles["transactions__main__container-info__navigation"]
              }
            >
              <select
                onChange={handleChange}
                className={
                  styles[
                    "transactions__main__container-info__navigation__select"
                  ]
                }
              >
                <option
                  value="/transactions__main"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Transações
                </option>
                <option
                  value="/income"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Receitas
                </option>
                <option
                  value="/expenses"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Despesas
                </option>
              </select>
            </Box>
            <Box
              className={
                styles["transactions__main__container-info__container"]
              }
            >
              <Box
                className={
                  styles["transactions__main__container-info__container__left"]
                }
              >
                <TransactionInfo type="income" title="Receitas" amount={formatCurrency(totalIncome)} />
                <TransactionInfo type="expenses" title="Despesas" amount={formatCurrency(totalExpenses)} />
              </Box>
              <Box
                className={
                  styles["transactions__main__container-info__container__right"]
                }
              >
                {(["income", "expenses", "transfer"] as const).map((type) => (
                  <Box
                    key={type}
                    className={
                      styles["transactions__main__container-info__container__right__function"]
                    }
                    onClick={() => setModalType(type)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      className={
                        styles["transactions__main__container-info__container__right__function__icon-area"]
                      }
                    >
                      <Avatar sx={{ backgroundColor: colors.gray300, color: colors.gray800 }}>
                        {iconMap[type]}
                      </Avatar>
                    </Box>
                    <p
                      className={
                        styles["transactions__main__container-info__container__right__function__text"]
                      }
                    >
                      {type === "income"
                        ? "Receitas"
                        : type === "expenses"
                          ? "Despesas"
                          : "Transferência"}
                    </p>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className={styles["transactions__main__container-carousel"]}>
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                selected={selectedFilter === filter}
                onClick={() => setSelectedFilter(filter)}
              />
            ))}
          </Box>

          <Box className={styles["transactions__main__container-transactions"]}>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  category={transaction.category}
                  description={transaction.description}
                  date={transaction.date}
                  amount={formatCurrency(transaction.amount)}
                  onDelete={() => handleDelete(transaction.id)}
                  type={transaction.type}
                  bankFrom={transaction.bankFrom}
                  bankTo={transaction.bankTo}
                  bank={transaction.bank}
                />
              ))
            ) : (
              <p>Nenhuma transação encontrada.</p>
            )}
          </Box>

          <ButtonTransactions
            onClick={() => setModalType("transfer")}
            className={styles["transactions__main__button--hidden"]}
          />
        </main>
      </Box>
      {modalType && (
        <ModalTransaction
          type={modalType}
          open={true}
          onClose={() => setModalType(null)}
          onAddTransaction={handleAddTransaction}
        />
      )}
    </>
  );
}