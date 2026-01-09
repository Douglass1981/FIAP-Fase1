"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Box, Link } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import TransactionCard from "@/app/_components/CardTransactions";
import FilterButton from "@/app/_components/FilterButton";
import TransactionInfo from "@/app/_components/TransactionInfo";
import ButtonTransactions from "@/app/_components/ButtonTransactions";
import ModalTransaction from "@/app/_components/modal-component/modaltransaction";
import { Footer } from "@/app/_components/Footer";
import { ROUTES } from "@/shared/constants";
import { colors } from "../mui.styles";
import styles from "./income.styles.module.scss";

import mockPrisma from "@/mockPrisma";
import dayjs from "dayjs";

export default function Income() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [modalType, setModalType] = useState<
    "income" | "expenses" | "transfer" | null
  >(null);
  const [selectedFilter, setSelectedFilter] = useState("Última semana");

  const handleUpdateTransaction = async (updatedTransaction: any) => {
    await mockPrisma.transacoes.update({
      where: { id: updatedTransaction.id },
      data: updatedTransaction,
    });
    loadInitialTransactions();
  };

  const handleDelete = async (id: number) => {
    await mockPrisma.transacoes.delete({ where: { id } });
    loadInitialTransactions();
  };

  const loadInitialTransactions = async () => {
    try {
      const initialData = await mockPrisma.transacoes.findMany({});

      const adaptedData = await Promise.all(
        initialData.map(async (t: any) => {
          const categoryObj = t.categoriaId
            ? await mockPrisma.categorias.findUnique({
                where: { id: t.categoriaId },
              })
            : null;

          const bankObj = t.bancoid
            ? await mockPrisma.banco.findUnique({ where: { id: t.bancoid } })
            : null;

          const bankName = bankObj?.nome || "Banco N/A";
          const categoryName = categoryObj?.nome || "Geral";

          return {
            id: t.id,
            category: categoryName,
            description: `${bankName} - ${t.descricao || "Sem descrição"}`,
            date: dayjs(t.data).format("DD/MM/YYYY"),
            amount: t.valor,
            type:
              t.tipoId === 1
                ? "income"
                : t.tipoId === 2
                ? "expenses"
                : "transfer",
            bank: bankName,
            bancoid: t.bancoid,
            categoriaId: t.categoriaId,
          };
        })
      );

      const onlyIncome = adaptedData.filter((t) => t.type === "income");
      setTransactions(onlyIncome);
    } catch (error) {
      console.error("Erro ao carregar receitas:", error);
    }
  };

  useEffect(() => {
    loadInitialTransactions();
  }, []);

  const totalIncome = useMemo(() => {
    return transactions.reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const handleChange = (event: any) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  const filters = [
    "Última semana",
    "Último mês",
    "Últimos 6 meses",
    "Último ano",
  ];

  return (
    <Box>
      <Box className={styles["income"]}>
        <nav className={styles["income__nav"]}>
          <Link
            className={styles["income__nav__logo_area"]}
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
            <h1 className={styles["income__nav__logo_area__brand"]}>Poup.ai</h1>
          </Link>
        </nav>

        <main className={styles["income__main"]}>
          <Box className={styles["income__main__container-info"]}>
            <Box className={styles["income__main__container-info__navigation"]}>
              <select
                onChange={handleChange}
                className={
                  styles["income__main__container-info__navigation__select"]
                }
                value="/income"
              >
                <option value="/income">Receitas</option>
                <option value="/transactions">Transações</option>
                <option value="/expenses">Despesas</option>
              </select>
            </Box>

            <Box className={styles["income__main__container-info__container"]}>
              <Box
                className={
                  styles["income__main__container-info__container__left"]
                }
              >
                <TransactionInfo
                  type="income"
                  title="Total de Receitas"
                  amount={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalIncome)}
                />
              </Box>
            </Box>
          </Box>

          <Box className={styles["income__main__container-carousel"]}>
            {filters.map((f) => (
              <FilterButton
                key={f}
                label={f}
                selected={selectedFilter === f}
                onClick={() => setSelectedFilter(f)}
              />
            ))}
          </Box>

          <Box className={styles["income__main__container-income"]}>
            {transactions.length > 0 ? (
              transactions.map((t) => (
                <TransactionCard
                  key={t.id}
                  id={t.id}
                  category={t.category}
                  description={t.description}
                  date={t.date}
                  amount={t.amount}
                  type={t.type}
                  onDelete={() => handleDelete(t.id)}
                  onEdit={handleUpdateTransaction}
                />
              ))
            ) : (
              <p>Nenhuma receita encontrada.</p>
            )}
          </Box>
        </main>
      </Box>
      <Footer />
    </Box>
  );
}
