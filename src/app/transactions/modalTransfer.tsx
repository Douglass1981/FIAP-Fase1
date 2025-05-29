"use client";

import { useState } from "react";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { colors } from "../mui.styles";

export default function ModalEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs()); //por enquanto inicializa com a data de hoje, mas deve inicializar com a data do card

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <SyncAltOutlinedIcon />
      </button>

      {isOpen && (
        <Box
          onClick={() => setIsOpen(false)}
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
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                Tipo de transação
              </p>
              <Box style={{
                display: "flex",
                flexDirection: "column",
                gap: 15,
                }}>
                <FormControl fullWidth>
                  <InputLabel id="saiu-de-label">Saiu de</InputLabel>
                  <Select
                    labelId="saiu-de-label"
                    id="select-saiu-de"
                    label="Saiu de"
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="Banco 1">Banco 1</MenuItem>
                    <MenuItem value="Banco 2">Banco 2</MenuItem>
                    <MenuItem value="Banco 3">Banco 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="para-label">Para</InputLabel>
                  <Select
                    labelId="para-label"
                    id="select-para"
                    label="Para"
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="Banco 1">Banco 1</MenuItem>
                    <MenuItem value="Banco 2">Banco 2</MenuItem>
                    <MenuItem value="Banco 3">Banco 3</MenuItem>
                  </Select>
                </FormControl>
                <Box style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                }}>
                  <TextField
                    fullWidth
                    label="Valor"
                    variant="outlined"
                  />
                  <DateField
                    label="Data"
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    format="DD-MM-YYYY"
                    fullWidth
                  />
                </Box>
                <FormControl fullWidth>
                  <InputLabel id="category-label">Categoria</InputLabel>
                  <Select
                    labelId="category-label"
                    label="Categogia"
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="Categoria 1">Categoria 1</MenuItem>
                    <MenuItem value="Categoria 2">Categoria 2</MenuItem>
                    <MenuItem value="Categoria 3">Categoria 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    padding: "12px 16px",
                    textTransform: "none",
                    backgroundColor: colors.red,
                    fontSize: "16px",
                    '&:hover':{
                        backgroundColor: colors.lightRed
                    }
                  }}
                  onClick={() => setIsOpen(false)}
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
                    '&:hover':{
                        backgroundColor: colors.purple
                    }
                  }}
                >
                  Adicionar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </LocalizationProvider>
  );
}
