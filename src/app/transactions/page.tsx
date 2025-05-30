"use client";

import styles from "./transactions.styles.module.scss";
import { Box, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { colors } from "../mui.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Image from "next/image";
import { useState } from "react";
import TransactionCard from "@/components/CardTransactions";
import ModalTransaction from "@/components/modal-component/modalTransaction";
import FilterButton from "@/components/FilterButton";
import TransactionInfo from "@/components/TransactionInfo";

export default function Transactions() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // colocar a logica de exclusão aqui
    console.log("Item excluído!");
    setIsOpen(false);
  };

  const handleDelete = () => {
    console.log("Transação excluída");
  };

  const [selectedFilter, setSelectedFilter] = useState("Última semana");

  const filters = [
    "Última semana",
    "Último mês",
    "Últimos 6 meses",
    "Último ano",
  ];



  return (
    <>
      <Box className={styles["transactions"]}>
        <nav className={styles["transactions__nav"]}>
          <Link
            className={styles["transactions__nav__logo_area"]}
            href="http://localhost:3000"
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
                <Box
                  className={
                    styles[
                    "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                      "transactions__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalTransaction type="income" />

                  </Box>
                  <p
                    className={
                      styles[
                      "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Receitas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                    "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                      "transactions__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalTransaction type="expenses" />
                  </Box>
                  <p
                    className={
                      styles[
                      "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Despesas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                    "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box

                  >
                    <ModalTransaction type="transfer" />
                  </Box>
                  <p
                    className={
                      styles[
                      "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Transferência
                  </p>
                </Box>
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

          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 80,
              left: 30,
              right: 30,
              p: 1,
              zIndex: 1300,
              backgroundColor: colors.bluePrimary500,
              textTransform: "none",
            }}
            className={styles["transactions__main__button--hidden"]}
          >
            <AddOutlinedIcon />
            Adicionar transferencia
          </Button>
        </main>
      </Box>
    </>
  );
}
