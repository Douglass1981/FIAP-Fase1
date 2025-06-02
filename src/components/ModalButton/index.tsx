import React from "react";
import Button from "@mui/material/Button";
import { colors } from "@/app/mui.styles";
import { SxProps, Theme } from "@mui/material/styles";

interface ModalButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  bgColor?: string;
  hvColor?: string;
  textColor?: string;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  fullWidth?: boolean
  sx?: SxProps<Theme>;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  label,
  onClick,
  href,
  bgColor = colors.bluePrimary500,
  hvColor = colors.purple,
  textColor = colors.white,
  variant = "contained",
  disabled = false,
  fullWidth = false,
  sx,
  
}) => {
  const isLink = Boolean(href);

  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      component={isLink ? "a" : "button"}
      href={isLink ? href : undefined}
      sx={{
        padding: "12px 16px",
        textTransform: "none",
        backgroundColor: variant === "contained" ? bgColor : "transparent",
        color: textColor,
        textDecoration: "none",
        "&:hover": {
          backgroundColor:
            variant === "contained" ? colors.purple : `${hvColor}22`,
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default ModalButton;
