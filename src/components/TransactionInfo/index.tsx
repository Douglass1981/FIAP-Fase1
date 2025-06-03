import React from "react";
import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styles from "./transactionInfo.styles.module.scss";
import type { TransactionInfoProps } from "./transactionInfo.types";

const TransactionInfo: React.FC<TransactionInfoProps> = ({ type, title, amount }) => {
    const isIncome = type === "income";

    return (
        <Box
            className={
                isIncome
                    ? styles["income"]
                    : styles["expenses"]
            }
        >
            <Box className={styles["text-area"]}>
                <p className={styles["title"]}>{title}</p>
                <p className={styles["amount"]}>{amount}</p>
            </Box>
            <Box className={styles["icon-area"]}>
                {isIncome ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </Box>
        </Box>
    );
};

export default TransactionInfo;
