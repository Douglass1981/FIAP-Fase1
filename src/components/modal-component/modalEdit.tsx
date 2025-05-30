"use client";

import { useState, useEffect } from "react";
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

type ModalEditProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (updatedData: {
    from: string;
    to: string;
    amount: string;
    date: Dayjs | null;
  }) => void;
  initialData: {
    from: string;
    to: string;
    amount: string;
    date: string;
  };
   transactionTypeLabel: string;
};

export default function ModalEdit({
  open,
  onClose,
  onSubmit,
  initialData,
  transactionTypeLabel,
}: ModalEditProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  // Atualiza os estados quando o modal abrir
  useEffect(() => {
    if (open) {
      setFrom(initialData.from);
      setTo(initialData.to);
      setAmount(initialData.amount);
      setDate(dayjs(initialData.date));
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    onSubmit({ from, to, amount, date });
    onClose();
  };

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
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              Editar {transactionTypeLabel}
            </p>

            <FormControl fullWidth>
              <InputLabel id="from-label">Saiu de</InputLabel>
              <Select
                labelId="from-label"
                value={from}
                label="Saiu de"
                onChange={(e) => setFrom(e.target.value)}
              >
                <MenuItem value="Banco 1">Banco 1</MenuItem>
                <MenuItem value="Banco 2">Banco 2</MenuItem>
                <MenuItem value="Banco 3">Banco 3</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="to-label">Para</InputLabel>
              <Select
                labelId="to-label"
                value={to}
                label="Para"
                onChange={(e) => setTo(e.target.value)}
              >
                <MenuItem value="Banco 1">Banco 1</MenuItem>
                <MenuItem value="Banco 2">Banco 2</MenuItem>
                <MenuItem value="Banco 3">Banco 3</MenuItem>
              </Select>
            </FormControl>

            <Box style={{ display: "flex", gap: 15 }}>
              <TextField
                fullWidth
                label="Valor"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <DateField
                label="Data"
                value={date}
                onChange={(newDate) => setDate(newDate)}
                format="DD-MM-YYYY"
                fullWidth
              />
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
                  "&:hover": {
                    backgroundColor: colors.lightRed,
                  },
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
                  backgroundColor: colors.yellow,
                  fontSize: "16px",
                  color: colors.black,
                  "&:hover": {
                    backgroundColor: colors.lightYellow,
                  },
                }}
                onClick={handleSubmit}
              >
                Editar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
