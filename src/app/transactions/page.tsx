"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Avatar, Box,  Link } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import TransactionCard from "@/components/CardTransactions";
import FilterButton from "@/components/FilterButton";
import TransactionInfo from "@/components/TransactionInfo";
import ButtonTransactions from "@/components/ButtonTransactions";
import ModalTransaction from "@/components/modal-component/modaltransaction";
import { colors } from "../mui.styles";
import { ROUTES } from "@/constants";
import styles from "./transactions.styles.module.scss";
import { Footer } from "@/components/Footer";

export default function Transactions() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  const handleDelete = () => {
    console.log("Transação excluída");
  };

  const [modalType, setModalType] = useState<"income" | "expenses" | "transfer" | null>(null);

  const [selectedFilter, setSelectedFilter] = useState("Última semana");

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
            href={ROUTES.HOME}
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
                <TransactionInfo type="income" title="Receitas" amount="R$ 0,00" />
                <TransactionInfo type="expenses" title="Despesas" amount="R$ 0,00" />
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
            <TransactionCard
              category="Categoria"
              description="Banco"
              date="25/05/2025"
              amount="R$ 0,00"
              onDelete={handleDelete}
            />
          </Box>

          <ButtonTransactions
            onClick={() => setModalType("transfer")}
            className={styles["transactions__main__button--hidden"]}
          />
        </main>
      </Box>
      <Footer/>
      {modalType && (
        <ModalTransaction
          type={modalType}
          open={true}
          onClose={() => setModalType(null)}
        />
      )}

    </>
  );
}
