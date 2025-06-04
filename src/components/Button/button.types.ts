import { ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = MuiButtonProps & {
  label: string;
  onClick?: () => void;
  href?: string;
  bgColor?: string;
  hvColor?: string;
  textColor?: string;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  fullWidth?: boolean
}

export type { ButtonProps };