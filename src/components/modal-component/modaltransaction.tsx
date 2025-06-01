
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
import { colors } from "../../app/mui.styles"; // Ajuste o caminho conforme necessário
import { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

// Interface para o tipo Banco
interface Banco {
  id: number;
  nome: string;
}

// Interface para o tipo Categoria, baseada no seu schema
interface Categoria {
  id: number;
  nome: string;
}

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

export default function ModalTransaction({
  type,
  open,
  onClose,
}: ModalTransactionProps) {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  // Estados para a lista de bancos
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [loadingBancos, setLoadingBancos] = useState(false);
  const [errorBancos, setErrorBancos] = useState<string | null>(null);

  // Estados para a lista de categorias
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(false);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);

  // Estados para os valores selecionados dos dropdowns de banco
  const [selectedBancoSaiuDe, setSelectedBancoSaiuDe] = useState<
    number | string
  >("");
  const [selectedBancoPara, setSelectedBancoPara] = useState<number | string>(
    ""
  );
  const [selectedBanco, setSelectedBanco] = useState<number | string>("");

  // Estado para o valor selecionado do dropdown de categoria
  const [selectedCategoria, setSelectedCategoria] = useState<
    number | string
  >("");

  // Função para buscar os bancos
  const fetchBancos = async () => {
    setLoadingBancos(true);
    setErrorBancos(null);
    try {
      const response = await fetch("/api/bancos"); 

      if (!response.ok) {
        throw new Error(
          `Erro ao buscar bancos: ${response.status} ${response.statusText}`
        );
      }

      const data: Banco[] = await response.json();
      setBancos(data);

      if (data.length > 0) {
        // Inicializa com o primeiro ID para todos os dropdowns de banco
        setSelectedBancoSaiuDe(data[0].id);
        setSelectedBancoPara(data[0].id);
        setSelectedBanco(data[0].id);
      } else {
        // Se não houver bancos, garante que os estados estejam vazios
        setSelectedBancoSaiuDe("");
        setSelectedBancoPara("");
        setSelectedBanco("");
      }
    } catch (error) {
      console.error("Erro ao carregar bancos no frontend:", error);
      setErrorBancos("Falha ao carregar a lista de bancos.");
      setSelectedBancoSaiuDe(""); // Limpa seleção em caso de erro
      setSelectedBancoPara("");
      setSelectedBanco("");
    } finally {
      setLoadingBancos(false);
    }
  };

  // Função para buscar as categorias
  const fetchCategorias = async () => {
    setLoadingCategorias(true);
    setErrorCategorias(null);
    try {
      const response = await fetch("/api/categorias"); 
      if (!response.ok) {
        throw new Error(
          `Erro ao buscar categorias: ${response.status} ${response.statusText}`
        );
      }

      const data: Categoria[] = await response.json();
      setCategorias(data);

      if (data.length > 0) {
        setSelectedCategoria(data[0].id); // Inicializa com a primeira categoria
      } else {
        setSelectedCategoria(""); // Se não houver categorias, garante que o estado esteja vazio
      }
    } catch (error) {
      console.error("Erro ao carregar categorias no frontend:", error);
      setErrorCategorias("Falha ao carregar a lista de categorias.");
      setSelectedCategoria(""); // Limpa seleção em caso de erro
    } finally {
      setLoadingCategorias(false);
    }
  };

  // Efeito para carregar bancos e categorias quando o modal é aberto ou o tipo muda
  useEffect(() => {
    if (open) {
      fetchBancos();
      if (type !== "transfer") {
        fetchCategorias();
      } else {
        // Se o tipo for 'transfer', limpa os estados de categoria
        setCategorias([]);
        setSelectedCategoria("");
        setErrorCategorias(null);
        setLoadingCategorias(false);
      }
    }
  }, [open, type]);

  // Handlers para as mudanças nos dropdowns de banco
  const handleBancoSaiuDeChange = (
    event: SelectChangeEvent<typeof selectedBancoSaiuDe>
  ) => {
    setSelectedBancoSaiuDe(event.target.value);
  };

  const handleBancoParaChange = (
    event: SelectChangeEvent<typeof selectedBancoPara>
  ) => {
    setSelectedBancoPara(event.target.value);
  };

  const handleBancoChange = (
    event: SelectChangeEvent<typeof selectedBanco>
  ) => {
    setSelectedBanco(event.target.value);
  };

  // Handler para a mudança no dropdown de categoria
  const handleCategoriaChange = (
    event: SelectChangeEvent<typeof selectedCategoria>
  ) => {
    setSelectedCategoria(event.target.value);
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
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              {labelMap[type]}
            </p>

            <Box style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {type === "transfer" ? (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="saiu-label">Saiu de</InputLabel>
                    <Select
                      labelId="saiu-label"
                      id="select-saiu-de"
                      label="Saiu de"
                      value={selectedBancoSaiuDe}
                      onChange={handleBancoSaiuDeChange}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (
                        <MenuItem disabled>Carregando bancos...</MenuItem>
                      )}
                      {errorBancos && (
                        <MenuItem disabled sx={{ color: "error.main" }}>
                          {errorBancos}
                        </MenuItem>
                      )}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (
                        <MenuItem disabled>Nenhum banco encontrado.</MenuItem>
                      )}
                      {!loadingBancos &&
                        bancos.length > 0 &&
                        bancos.map((banco) => (
                          <MenuItem key={banco.id} value={banco.id}>
                            {banco.nome}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="para-label">Para</InputLabel>
                    <Select
                      labelId="para-label"
                      id="select-para"
                      label="Para"
                      value={selectedBancoPara}
                      onChange={handleBancoParaChange}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (
                        <MenuItem disabled>Carregando bancos...</MenuItem>
                      )}
                      {errorBancos && (
                        <MenuItem disabled sx={{ color: "error.main" }}>
                          {errorBancos}
                        </MenuItem>
                      )}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (
                        <MenuItem disabled>Nenhum banco encontrado.</MenuItem>
                      )}
                      {!loadingBancos &&
                        bancos.length > 0 &&
                        bancos.map((banco) => (
                          <MenuItem key={banco.id} value={banco.id}>
                            {banco.nome}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </>
              ) : (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="categoria-label">Categoria</InputLabel>
                    <Select
                      labelId="categoria-label"
                      id="select-categoria"
                      label="Categoria"
                      value={selectedCategoria}
                      onChange={handleCategoriaChange}
                      disabled={loadingCategorias || errorCategorias !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingCategorias && (
                        <MenuItem disabled>Carregando categorias...</MenuItem>
                      )}
                      {errorCategorias && (
                        <MenuItem disabled sx={{ color: "error.main" }}>
                          {errorCategorias}
                        </MenuItem>
                      )}
                      {!loadingCategorias &&
                        categorias.length === 0 &&
                        !errorCategorias && (
                          <MenuItem disabled>Nenhuma categoria encontrada.</MenuItem>
                        )}
                      {!loadingCategorias &&
                        categorias.length > 0 &&
                        categorias.map((categoria) => (
                          <MenuItem key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="banco-label">Banco</InputLabel>
                    <Select
                      labelId="banco-label"
                      id="select-banco"
                      label="Banco"
                      value={selectedBanco}
                      onChange={handleBancoChange}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (
                        <MenuItem disabled>Carregando bancos...</MenuItem>
                      )}
                      {errorBancos && (
                        <MenuItem disabled sx={{ color: "error.main" }}>
                          {errorBancos}
                        </MenuItem>
                      )}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (
                        <MenuItem disabled>Nenhum banco encontrado.</MenuItem>
                      )}
                      {!loadingBancos &&
                        bancos.length > 0 &&
                        bancos.map((banco) => (
                          <MenuItem key={banco.id} value={banco.id}>
                            {banco.nome}
                          </MenuItem>
                        ))}
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