"use client";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { colors } from "../../app/mui.styles";
import { useState } from "react";

type TransactionType = "income" | "expenses" | "transfer";

interface ModalTransactionProps {
  type: TransactionType;
  open: boolean;
  onClose: () => void;
}

const labelMap = {
  income: "Receitas",
  expenses: "Despesas",
  transfer: "Transferência",
};

export default function ModalTransaction({ type, open, onClose }: ModalTransactionProps) {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  if (!open) return null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        onClick={onClose}
        style={{
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
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "2rem",
            width: 300,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>
              {labelMap[type]}
            </p>

            <Box style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {type === "transfer" ? (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="saiu-label">Saiu de</InputLabel>
                    <Select labelId="saiu-label" label="Saiu de">
                      <MenuItem value="Banco 1">Banco 1</MenuItem>
                      <MenuItem value="Banco 2">Banco 2</MenuItem>
                      <MenuItem value="Banco 3">Banco 3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="para-label">Para</InputLabel>
                    <Select labelId="para-label" label="Para">
                      <MenuItem value="Banco 1">Banco 1</MenuItem>
                      <MenuItem value="Banco 2">Banco 2</MenuItem>
                      <MenuItem value="Banco 3">Banco 3</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="categoria-label">Categoria</InputLabel>
                    <Select labelId="categoria-label" label="Categoria">
                      <MenuItem value="Categoria 1">Categoria 1</MenuItem>
                      <MenuItem value="Categoria 2">Categoria 2</MenuItem>
                      <MenuItem value="Categoria 3">Categoria 3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="banco-label">Banco</InputLabel>
                    <Select labelId="banco-label" label="Banco">
                      <MenuItem value="Banco 1">Banco 1</MenuItem>
                      <MenuItem value="Banco 2">Banco 2</MenuItem>
                      <MenuItem value="Banco 3">Banco 3</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}

              <Box style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <TextField fullWidth label="Valor" variant="outlined" />
                <DateField
                  label="Data"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  format="DD-MM-YYYY"
                  fullWidth
                />
              </Box>
            </Box>

            <Box style={{ display: "flex", gap: 10 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  padding: "12px 16px",
                  textTransform: "none",
                  backgroundColor: colors.red,
                  fontSize: "16px",
                  "&:hover": { backgroundColor: colors.lightRed },
                }}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  padding: "12px 16px",
                  textTransform: "none",
                  backgroundColor: colors.bluePrimary500,
                  fontSize: "16px",
                  "&:hover": { backgroundColor: colors.purple },
                }}
              >
                Adicionar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
