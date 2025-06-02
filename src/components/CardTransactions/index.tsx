// src/components/CardTransactions.tsx
"use client";

import { Box, Button } from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { colors } from "../../app/mui.styles";
import styles from "./cardTransactions.styles.module.scss";
import { useState } from "react";
import ModalDetails from "../modal-component/modalDetails";
import ModalEdit from "../modal-component/modalEdit";
import ModalDelete from "../modal-component/modalDelete";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';


type TransactionType = "income" | "expenses" | "transfer";

type TransactionCardProps = {
  id: number; // <--- ADICIONE ESTA LINHA: O ID da transação
  category: string;
  description: string;
  date: string;
  amount: string;
  onDelete: () => void;
  type: TransactionType;
  bankFrom?: string;
  bankTo?: string;
  bank?: string;
};

export default function TransactionCard({
  id, // <--- ADICIONE A DESESTRUTURAÇÃO DO ID AQUI
  category,
  description,
  date,
  amount,
  onDelete,
  type,
  bankFrom,
  bankTo,
  bank,
}: TransactionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  const getIcon = () => {
    if (type === "income") return <ArrowUpwardIcon style={{ color: colors.green }} />;
    if (type === "expenses") return <ArrowDownwardIcon style={{ color: colors.red }} />;
    if (type === "transfer") return <SyncAltOutlinedIcon />;
    return <SyncAltOutlinedIcon />;
  };

  const getAmountColor = () => {
    if (type === "income") return colors.green;
    if (type === "expenses") return colors.red;
    return colors.black;
  };

  return (
    <Box className={styles["card-transactions"]}>
      <Box className={styles["card-transactions__left"]}>
        <Box className={styles["card-transactions__left__icon-area"]}>
          {getIcon()}
        </Box>
        <Box className={styles["card-transactions__left__text-area"]}>
          <p className={styles["card-transactions__left__text-area__category"]}>
            {category}
          </p>
          <p className={styles["card-transactions__left__text-area__info"]}>
            {description}
          </p>
          <p className={styles["card-transactions__left__text-area__info"]}>
            {date}
          </p>
          <p
            className={styles["card-transactions__left__text-area__amount"]}
            style={{ color: getAmountColor() }}
          >
            {amount}
          </p>
        </Box>
      </Box>

      <Box display="flex" gap={1}>
        <Button sx={{ minWidth: 0, color: colors.black, textTransform: "none" }} onClick={() => setIsDetailsOpen(true)}>
          <VisibilityOutlinedIcon />
        </Button>
        <ModalDetails
          open={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          from={bankFrom || bank || "N/A"}
          to={bankTo || "N/A"}
          date={date}
          amount={amount}
          category={category}
          description={description}
          type={type}
        />
        <Button sx={{ minWidth: 0, color: colors.black, textTransform: "none" }} onClick={() => setIsEditOpen(true)}>
          <EditOutlinedIcon />
        </Button>
        <ModalEdit
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSubmit={(updatedData) => console.log(updatedData)}
          transactionTypeLabel={
            type === "income" ? "Receita" : type === "expenses" ? "Despesa" : "Transferência"
          }
          initialData={{
            id: id, // <--- ADICIONE ESTA LINHA: Passe o ID para o initialData
            from: bankFrom || bank || "N/A",
            to: bankTo || "N/A",
            amount: amount.replace(/[R$\s.,]/g, '').replace(',', '.'),
            date: dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD"),
            category: category,
            description: description,
          }}
          type={type}
        />
        <Button
          sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}
          onClick={() => setIsOpen(true)}
        >
          <DeleteOutlineIcon />
        </Button>
        <ModalDelete
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      </Box>
    </Box>
  );
}