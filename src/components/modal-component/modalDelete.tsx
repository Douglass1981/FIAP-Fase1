// components/ModalDelete.tsx
"use client";

import { Box, Button } from "@mui/material";
import { colors } from "../../app/mui.styles";

type ModalDeleteProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
};

export default function ModalDelete({
  open,
  onClose,
  onConfirm,
  message = "Tem certeza que deseja excluir?",
}: ModalDeleteProps) {
  if (!open) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#00000050",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2rem",
          width: 300,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <p style={{ fontSize: "16px", textAlign: 'center' }}>{message}</p>

          <Box display="flex" gap={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                padding: "12px 16px",
                textTransform: "none",
                backgroundColor: colors.red,
                fontSize: "16px",
              }}
              onClick={onClose}
            >
              Não
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                padding: "12px 16px",
                textTransform: "none",
                backgroundColor: colors.bluePrimary500,
                fontSize: "16px",
              }}
              onClick={onConfirm}
            >
              Sim
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
