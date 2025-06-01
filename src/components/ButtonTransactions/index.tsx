import React from "react";
import { Button } from "@mui/material";
import { colors } from "../../app/mui.styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./ButtonTransactions.module.scss";

interface ButtonTransactionsProps {
  onClick?: () => void;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const ButtonTransactions: React.FC<ButtonTransactionsProps> = ({
  onClick,
  label = "Adicionar transferência",
  icon = <AddOutlinedIcon />,
  className = "",
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
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
      className={className}
    >
      {icon}
      {label}
    </Button>
  );
};

export default ButtonTransactions;
