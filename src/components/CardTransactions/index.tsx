"use client";

import { useState, useMemo } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Box, Button, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

import ModalDetails from "../modal-component/modalDetails";
import ModalEdit from "../modal-component/modalEdit";
import ModalDelete from "../modal-component/modalDelete";
import { colors } from "@/app/mui.styles";
import type { TransactionCardProps, TransactionDataForCard, TransactionType } from "./cardTransactions.types";

import styles from "./cardTransactions.styles.module.scss";

interface TransactionDataForCard {
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

type TransactionType = "income" | "expenses" | "transfer";

interface TransactionCardProps {
  id: number;
  category: string;
  description: string;
  date: string;
  amount: number;
  type: TransactionType;
  bankFrom?: string;
  bankTo?: string;
  bank?: string;
  bancoOrigemId?: number;
  bancoDestinoId?: number;
  bancoid?: number;
  onDelete: (id: number) => void;
  onEdit: (updatedTransaction: TransactionDataForCard) => void;
}

dayjs.extend(customParseFormat);

const getIcon = (type: TransactionType) => {
  if (type === "income")
    return <ArrowUpwardIcon sx={{ fontSize: 20, color: colors.green }} />;
  if (type === "expenses")
    return <ArrowDownwardIcon sx={{ fontSize: 20, color: colors.red }} />;
  if (type === "transfer")
    return (
      <SyncAltOutlinedIcon
        sx={{ fontSize: 20, color: colors.bluePrimary500 }}
      />
    );
  return <SyncAltOutlinedIcon sx={{ fontSize: 20, color: colors.gray800 }} />;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const getAmountColor = (type: TransactionType) => {
  if (type === "income") return colors.green;
  if (type === "expenses") return colors.red;
  return colors.bluePrimary500;
};

export default function TransactionCard({
  id,
  category,
  description,
  date,
  amount,
  onDelete,
  onEdit,
  type,
  bankFrom,
  bankTo,
  bank,
  bancoOrigemId,
  bancoDestinoId,
  bancoid,
}: TransactionCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete(id);
    setIsDeleteModalOpen(false);
  };

  const initialEditData = useMemo(() => {
    const parsedDayjsDate = dayjs(date, "DD/MM/YYYY");
    const dateForModal = parsedDayjsDate.isValid() ? parsedDayjsDate : dayjs();

    return {
      id: id,
      from: bankFrom || bank || "",
      to: bankTo || "",
      amount: amount.toString(),
      date: dateForModal.format("YYYY-MM-DD"),
      category: category,
      description: description,
      bancoOrigemId: bancoOrigemId,
      bancoDestinoId: bancoDestinoId,
      bancoid: bancoid,
    };
  }, [
    id,
    amount,
    date,
    description,
    category,
    bank,
    bankFrom,
    bankTo,
    bancoOrigemId,
    bancoDestinoId,
    bancoid,
  ]);

  const handleEditSubmit = (updatedData: TransactionDataForCard) => {
    onEdit(updatedData);
    setIsEditOpen(false);
  };

  return (
    <>
      <Box
        className={styles["card-transactions"]}
        sx={{
          borderLeft: `4px solid ${
            type === "income"
              ? colors.green
              : type === "expenses"
              ? colors.red
              : colors.bluePrimary500
          }`,
        }}
      >
        <Box className={styles["card-transactions__left"]}>
          <Box className={styles["card-transactions__left__icon-area"]}>
            {getIcon(type)}
          </Box>
          <Box className={styles["card-transactions__left__text-area"]}>
            <Typography variant="body2" className={styles["card__category"]}>
              {category}
            </Typography>
            <Typography variant="body1" className={styles["card__date"]}>
              {date}
            </Typography>
          </Box>
        </Box>

        <Box className={styles["card__content"]}>
          <Typography variant="h6" className={styles["card__description"]}>
            {description}
          </Typography>
          <Typography
            variant="h6"
            className={styles["card__amount"]}
            sx={{
              color: getAmountColor(type),
            }}
          >
            {formatCurrency(amount)}
          </Typography>
        </Box>

        <Box className={styles["card__footer"]}>
          <Typography variant="caption" className={styles["card__type"]}>
            {getIcon(type)}{" "}
            {bank || (bankFrom && bankTo ? `${bankFrom} -> ${bankTo}` : "N/A")}
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Button
            sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}
            onClick={() => setIsDetailsOpen(true)}
          >
            <VisibilityOutlinedIcon />
          </Button>
          <ModalDetails
            open={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            from={bankFrom || bank || "N/A"}
            to={bankTo || "N/A"}
            date={date}
            amount={amount.toString()}
            category={category}
            description={description}
            type={type}
          />
          <Button
            sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}
            onClick={() => setIsEditOpen(true)}
          >
            <EditOutlinedIcon />
          </Button>
          <ModalEdit
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            onSubmit={handleEditSubmit}
            initialData={initialEditData}
            type={type}
            transactionTypeLabel={
              type === "income"
                ? "Editar Receita"
                : type === "expenses"
                ? "Editar Despesa"
                : "Editar Transferência"
            }
          />
          <Button
            sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <DeleteOutlineIcon />
          </Button>
          <ModalDelete
            open={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleConfirmDelete}
          />
        </Box>
      </Box>
    </>
  );
}
