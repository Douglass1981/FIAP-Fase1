"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar,  Button } from "@mui/material";
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


type TransactionType = "income" | "expenses" | "transfer";
const receitas_data = [
  { id: "Alimentação", value: 25, label: "Alimentação" },
  { id: "Educação", value: 15, label: "Educação" },
  { id: "Casa", value: 20, label: "Casa" },
  { id: "Saúde", value: 5, label: "Saúde" },
];

const receitas_size = {
  width: 50,
  height: 50,
};

const despesas_data = [
  { id: "Alimentação", value: 35, label: "Alimentação" },
  { id: "Educação", value: 4, label: "Educação" },
  { id: "Casa", value: 12, label: "Casa" },
  { id: "Saúde", value: 5, label: "Saúde" },
];

const despesas_size = {
  width: 50,
  height: 50,
};

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [modalType, setModalType] = useState<TransactionType | null>(null);

  useEffect(() => {
    // Ao carregar o componente, tente recuperar o nome do usuário do localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []); // O array vazio garante que este useEffect roda apenas uma vez ao montar o componente

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
      <main >
        <div className={styles['container-card']}>
            <div className={styles["card-breakpoint"]}>
          <div className={styles.card}>
            <div className={styles["presentation-card-home"]}>
              <div>
                <div className={styles["hello-message-container"]}>
                  <p className={styles["hello-message-text"]}>Olá, Joana</p>
                  <Icons.WavingHand />
                </div>
                <p className={styles["total-balance-text"]}>
                  Saldo total em conta
                </p>
                <span className={styles["account-balance-text"]}>R$400,00</span>
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
              <Link href="/">
                <Icons.Logout />
                <span>Sair</span>
              </Link>
            </div>

            <div className={styles["actions-info-container"]}>
              <div className={styles["actions-bank-details-container"]}>
                {(["income", "expenses", "transfer"] as TransactionType[]).map(
                  (type) => (
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
                  )
                )}

                <Link href="/transactions" passHref>
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
                  amount="R$ 0,00"
                />
                <TransactionInfo
                  type="expenses"
                  title="Despesas"
                  amount="R$ 0,00"
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
                R$1.659,35
              </span>
            </div>
            <div className={styles.graph}>
              <PieChart
                data={receitas_data}
                size={receitas_size}
                className={styles.chart}
                sx={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          <div className={styles["graph-details-card"]}>
            <div className={styles["graph-details"]}>
              <p className={styles["title-graph-details"]}>Total despesa</p>
              <span className={`${styles.balance} ${styles.expenses}`}>
                R$1.659,35
              </span>
            </div>
            <div className={styles.graph}>
              <PieChart
                data={despesas_data}
                size={despesas_size}
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
        />
      )}
    </section>
  );
}
