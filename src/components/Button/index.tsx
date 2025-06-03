import React from "react";
import Button from "@mui/material/Button";
import { colors } from "@/app/mui.styles";

interface MyButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  bgColor?: string;
  hvColor?: string;
  textColor?: string;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  fullWidth?: boolean;
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
    <Button
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
    </Button>
  );
};

export default MyButton;
