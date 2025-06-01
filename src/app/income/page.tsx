"use client";

import styles from "./income.styles.module.scss";
import { Avatar, Box, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { colors } from "../mui.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import Image from "next/image";
import { useState } from "react";
import TransactionCard from "@/components/CardTransactions";
import FilterButton from "@/components/FilterButton";
import TransactionInfo from "@/components/TransactionInfo";
import ButtonTransactions from "@/components/ButtonTransactions";
import ModalTransaction from "@/components/modal-component/modaltransaction";

export default function Income() {
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
      <Box className={styles["income"]}>
        <nav className={styles["income__nav"]}>
          <Link
            className={styles["income__nav__logo_area"]}
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
            <h1 className={styles["income__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Link>
        </nav>
        <main className={styles["income__main"]}>
          <Box className={styles["income__main__container-info"]}>
            <Box
              className={
                styles["income__main__container-info__navigation"]
              }
            >
              <select
                onChange={handleChange}
                className={
                  styles[
                  "income__main__container-info__navigation__select"
                  ]
                }
              >
                <option
                  value="/income"
                  className={
                    styles[
                    "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Receitas
                </option>
                <option
                  value="/transactions"
                  className={
                    styles[
                    "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Transações
                </option>
                <option
                  value="/expenses"
                  className={
                    styles[
                    "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Despesas
                </option>
              </select>
            </Box>
            <Box
              className={
                styles["income__main__container-info__container"]
              }
            >
              <Box
                className={
                  styles["income__main__container-info__container__left"]
                }
              >
                <TransactionInfo type="income" title="Receitas" amount="R$ 0,00" />
                <TransactionInfo type="expenses" title="Despesas" amount="R$ 0,00" />
              </Box>
              <Box
                className={
                  styles["income__main__container-info__container__right"]
                }
              >
                {(["income", "expenses", "transfer"] as const).map((type) => (
                  <Box
                    key={type}
                    className={
                      styles["income__main__container-info__container__right__function"]
                    }
                    onClick={() => setModalType(type)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      className={
                        styles["income__main__container-info__container__right__function__icon-area"]
                      }
                    >
                      <Avatar sx={{ backgroundColor: colors.gray300, color: colors.gray800 }}>
                        {iconMap[type]}
                      </Avatar>
                    </Box>
                    <p
                      className={
                        styles["income__main__container-info__container__right__function__text"]
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

          <Box className={styles["income__main__container-carousel"]}>
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                selected={selectedFilter === filter}
                onClick={() => setSelectedFilter(filter)}
              />
            ))}
          </Box>

          <Box className={styles["income__main__container-income"]}>
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
            className={styles["income__main__button--hidden"]}
          />
        </main>
      </Box>
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
