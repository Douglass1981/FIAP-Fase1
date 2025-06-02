"use client";

import { Box, Button } from "@mui/material";
import ModalButton from "../ModalButton";
import { colors } from "@/app/mui.styles";

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
          <p style={{ fontSize: "16px", textAlign: "center" }}>{message}</p>

          <Box display="flex" gap={2}>
            <ModalButton
              label="Não"
              onClick={onClose}
              sx={{
                backgroundColor: colors.red,
                "&:hover": { backgroundColor: colors.lightRed },
              }}
              fullWidth
            />
            <ModalButton label="Sim" onClick={onConfirm} fullWidth />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
