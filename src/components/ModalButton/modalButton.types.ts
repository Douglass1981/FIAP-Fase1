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

export type { ModalButtonProps };