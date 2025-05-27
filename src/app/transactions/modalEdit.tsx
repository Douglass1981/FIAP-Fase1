"use client";

import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <EditOutlinedIcon />
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
                  <TextField
                    fullWidth
                    label="Data"
                    variant="outlined"
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
                  }}
                  onClick={() => setIsOpen(false)}
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
                >
                  Sim
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
