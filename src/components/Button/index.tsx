'use client';

import React, { ReactNode } from 'react';
import { Button as ButtonMui, ButtonProps } from '@mui/material';

interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}


function Button({
  children,
  onClick,
  variant = 'contained',
  color = 'primary',
  size = 'small',
  startIcon,
  endIcon,
  ...props
}: MuiButtonProps) {
  return (
    <ButtonMui
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonMui>
  );
}

export default Button;