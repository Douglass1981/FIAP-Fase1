// components/TransactionCard.tsx
"use client";

import { Box, Button } from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModalDelete from "../modal-component/modalDelete";
import { colors } from "../../app/mui.styles";
import styles from "./cardTransactions.styles.module.scss"; 
import { useState } from "react";

type TransactionCardProps = {
  category: string;
  description: string;
  date: string;
  amount: string;
  onDelete: () => void;
};

export default function TransactionCard({
  category,
  description,
  date,
  amount,
  onDelete,
}: TransactionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <Box className={styles["card-transactions"]}>
      <Box className={styles["card-transactions__left"]}>
        <Box className={styles["card-transactions__left__icon-area"]}>
          <SyncAltOutlinedIcon />
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
          <p className={styles["card-transactions__left__text-area__amount"]}>
            {amount}
          </p>
        </Box>
      </Box>

      <Box display="flex" gap={1}>
        <Button sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}>
        </Button>
        <Button sx={{ minWidth: 0, color: colors.black, textTransform: "none" }}>
        </Button>
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
