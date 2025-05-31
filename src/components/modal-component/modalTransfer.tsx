"use client";

import { useState, useEffect } from "react";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../mui.styles";
import { SelectChangeEvent } from '@mui/material/Select'; // Importe SelectChangeEvent

interface Banco {
  id: number;
  nome: string;
}

export default function ModalEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [loadingBancos, setLoadingBancos] = useState(false);
  const [errorBancos, setErrorBancos] = useState<string | null>(null);
  
  // O estado pode ser number (o ID) ou string vazia (se nada estiver selecionado)
  const [selectedBancoSaiuDe, setSelectedBancoSaiuDe] = useState<number | string>('');
  const [selectedBancoPara, setSelectedBancoPara] = useState<number | string>('');

  const fetchBancos = async () => {
    setLoadingBancos(true);
    setErrorBancos(null);
    try {
      const response = await fetch('/api/bancos');

      if (!response.ok) {
        throw new Error(`Erro ao buscar bancos: ${response.status} ${response.statusText}`);
      }

      const data: Banco[] = await response.json();
      setBancos(data);

      if (data.length > 0) {
        // Inicializa com o primeiro ID, se existir
        setSelectedBancoSaiuDe(data[0].id);
        setSelectedBancoPara(data[0].id);
      }
    } catch (error) {
      console.error("Erro ao carregar bancos no frontend:", error);
      setErrorBancos("Falha ao carregar a lista de bancos.");
    } finally {
      setLoadingBancos(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBancos();
    }
  }, [isOpen]);

  // CORREÇÃO AQUI: Use o tipo de evento que o Material-UI espera, que pode ser o tipo do próprio estado
  // ou simplesmente `string` se o valor sempre for lido como string do evento.
  // Optamos por `SelectChangeEvent<typeof selectedBancoSaiuDe>` para maior compatibilidade.
  const handleBancoSaiuDeChange = (event: SelectChangeEvent<typeof selectedBancoSaiuDe>) => {
    setSelectedBancoSaiuDe(event.target.value);
  };

  const handleBancoParaChange = (event: SelectChangeEvent<typeof selectedBancoPara>) => {
    setSelectedBancoPara(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <Avatar sx={{ backgroundColor: colors.gray300, color: colors.gray800 }}>
          <SyncAltOutlinedIcon />
        </Avatar>
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
            <Box sx={{ display: "flex", width: "100%", justifyContent: "end", marginBottom: '1rem' }}>
              <Button
                onClick={() => setIsOpen(false)}
                sx={{
                  padding: "0px 0px 10px 0px",
                  color: colors.gray800,
                  backgroundColor: 'transparent',
                  minWidth: 0,
                  '&:hover': {
                    backgroundColor: colors.gray300
                  }
                }}
              >
                Fechar
              </Button>
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                Tipo de transação
              </Typography>
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
                    value={selectedBancoSaiuDe}
                    onChange={handleBancoSaiuDeChange} // CORREÇÃO AQUI
                    disabled={loadingBancos || errorBancos !== null}
                  >
                    {loadingBancos && <MenuItem disabled>Carregando bancos...</MenuItem>}
                    {errorBancos && <MenuItem disabled sx={{ color: 'error.main' }}>{errorBancos}</MenuItem>}
                    {!loadingBancos && bancos.length === 0 && !errorBancos && (
                      <MenuItem disabled>Nenhum banco encontrado.</MenuItem>
                    )}
                    {!loadingBancos && bancos.length > 0 && (
                      bancos.map((banco) => (
                        <MenuItem key={banco.id} value={banco.id}>
                          {banco.nome}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="para-label">Para</InputLabel>
                  <Select
                    labelId="para-label"
                    id="select-para"
                    label="Para"
                    sx={{ textAlign: "left" }}
                    value={selectedBancoPara}
                    onChange={handleBancoParaChange} // CORREÇÃO AQUI
                    disabled={loadingBancos || errorBancos !== null}
                  >
                    {loadingBancos && <MenuItem disabled>Carregando bancos...</MenuItem>}
                    {errorBancos && <MenuItem disabled sx={{ color: 'error.main' }}>{errorBancos}</MenuItem>}
                    {!loadingBancos && bancos.length === 0 && !errorBancos && (
                      <MenuItem disabled>Nenhum banco encontrado.</MenuItem>
                    )}
                    {!loadingBancos && bancos.length > 0 && (
                      bancos.map((banco) => (
                        <MenuItem key={banco.id} value={banco.id}>
                          {banco.nome}
                        </MenuItem>
                      ))
                    )}
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
                    '&:hover': {
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
                    '&:hover': {
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