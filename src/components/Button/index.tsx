import React from "react";
import MuiButton from "@mui/material/Button";
import { colors } from "@/app/mui.styles";
import type { ButtonProps } from './button.types';

interface MyButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  bgColor?: string;
  hvColor?: string;
  textColor?: string;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  fullWidth?: boolean
  type?: "button" | "submit" | "reset"; 
}

const MyButton: React.FC<MyButtonProps> = ({

  label,
  onClick,
  href,
  bgColor = colors.bluePrimary500,
  hvColor = colors.purple,
  textColor = colors.white,
  variant = "contained",
  disabled = false,
  fullWidth = false,
  type = "button",
}) => {
  const isLink = Boolean(href);

  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      component={isLink ? "a" : "button"}
      href={isLink ? href : undefined}
       type={!isLink ? type : undefined}

      sx={{
        textTransform: "none",
        backgroundColor: variant === "contained" ? bgColor : "transparent",
        color: textColor,
        textDecoration: "none",
        "&:hover": {
          backgroundColor:
            variant === "contained" ? colors.purple : `${hvColor}22`,
        },
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
