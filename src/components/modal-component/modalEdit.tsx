// src/components/modal-component/modalEdit.tsx
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
  Typography,
} from "@mui/material";
import { colors } from "../../app/mui.styles"; // Ajuste o caminho conforme necessário

import mockPrisma from "../../mockPrisma"; // Verifique este caminho!

// Interfaces (copie do ModalTransaction ou de um arquivo de tipos comum, se houver)
interface Banco {
  id: number;
  nome: string;
}

interface Categoria {
  id: number;
  nome: string;
}

type TransactionType = "income" | "expenses" | "transfer";

interface InitialEditData {
  id: number;
  from: string; // Nome do banco (para receita/despesa) ou banco de origem (para transferência)
  to: string;   // Nome do banco de destino (para transferência)
  amount: string; // Valor como string
  date: string; // Data no formato ISO 8601
  category: string;    // Nome da categoria
  description: string; // Descrição da transação
}

interface ModalEditProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (updatedData: {
    id: number;
    description: string;
    amount: number;
    date: string;
    category?: string | number; // Pode ser nome ou ID, mas enviaremos ID
    bank?: string | number;     // Pode ser nome ou ID, mas enviaremos ID
    bankFrom?: string | number; // Pode ser nome ou ID, mas enviaremos ID
    bankTo?: string | number;   // Pode ser nome ou ID, mas enviaremos ID
    type: TransactionType;
  }) => void;
  transactionTypeLabel: string;
  initialData: InitialEditData;
  type: TransactionType;
}

const labelMap = {
  income: "Editar Receita",
  expenses: "Editar Despesa",
  transfer: "Editar Transferência",
};

export default function ModalEdit({
  open,
  onClose,
  onSubmit,
  initialData,
  type,
}: ModalEditProps) {
  const [date, setDate] = useState<Dayjs | null>(
    initialData.date ? dayjs(initialData.date) : null
  );
  const [amount, setAmount] = useState<string>(initialData.amount);
  const [description, setDescription] = useState<string>(initialData.description || '');

  // Estes estados AGORA armazenarão IDs numéricos, ou string vazia para "nada selecionado"
  const [selectedCategoriaId, setSelectedCategoriaId] = useState<number | string>("");
  const [selectedBancoId, setSelectedBancoId] = useState<number | string>("");
  const [selectedBancoSaiuDeId, setSelectedBancoSaiuDeId] = useState<number | string>("");
  const [selectedBancoParaId, setSelectedBancoParaId] = useState<number | string>("");

  const [bancos, setBancos] = useState<Banco[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadingBancos, setLoadingBancos] = useState(false);
  const [errorBancos, setErrorBancos] = useState<string | null>(null);
  const [loadingCategorias, setLoadingCategorias] = useState(false);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);

  // Função para buscar os bancos
  const fetchBancos = async () => {
    setLoadingBancos(true);
    setErrorBancos(null);
    try {
      const data: Banco[] = await mockPrisma.banco.findMany({});
      setBancos(data);
    } catch (error) {
      console.error("Erro ao carregar bancos:", error);
      setErrorBancos("Falha ao carregar bancos.");
    } finally { setLoadingBancos(false); }
  };

  // Função para buscar as categorias
  const fetchCategorias = async () => {
    setLoadingCategorias(true);
    setErrorCategorias(null);
    try {
      const data: Categoria[] = await mockPrisma.categorias.findMany({});
      setCategorias(data);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      setErrorCategorias("Falha ao carregar categorias.");
    } finally { setLoadingCategorias(false); }
  };

  useEffect(() => {
    if (open) {
      // Sempre buscar os bancos e categorias para popular os dropdowns
      fetchBancos();
      if (type !== "transfer") {
        fetchCategorias();
      } else {
        setCategorias([]);
        setSelectedCategoriaId(""); // Limpa o estado se for transferência
      }

      // Reinicializa os estados do formulário com base em initialData
      setDate(initialData.date ? dayjs(initialData.date) : null);
      setAmount(initialData.amount);
      setDescription(initialData.description || '');

      // --- CRÍTICO: Inicializar selected IDs encontrando o ID pelo NOME ---
      if (type === "transfer") {
        const initialBancoSaiuDeMatch = bancos.find(b => b.nome === initialData.from);
        const initialBancoParaMatch = bancos.find(b => b.nome === initialData.to);
        setSelectedBancoSaiuDeId(initialBancoSaiuDeMatch ? initialBancoSaiuDeMatch.id : "");
        setSelectedBancoParaId(initialBancoParaMatch ? initialBancoParaMatch.id : "");
      } else { // income or expenses
        const initialCategoriaMatch = categorias.find(c => c.nome === initialData.category);
        const initialBancoMatch = bancos.find(b => b.nome === initialData.from); // 'from' é o banco para receita/despesa
        setSelectedCategoriaId(initialCategoriaMatch ? initialCategoriaMatch.id : "");
        setSelectedBancoId(initialBancoMatch ? initialBancoMatch.id : "");
      }
    }
  }, [open, initialData, type, bancos, categorias]); // Adicione bancos e categorias nas dependências

  // Handler para os Selects, agora atualizam os estados de ID
  const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<string | number>>) =>
    (event: SelectChangeEvent<string | number>) => {
      setter(event.target.value);
    };

  const handleSubmit = async () => {
    if (!amount || !date) {
        alert("Por favor, preencha o valor e a data.");
        return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert("Por favor, insira um valor válido e positivo.");
        return;
    }

    // Determine os IDs a serem enviados para o mockPrisma
    let categoryIdToSave: number | null = null;
    let bankIdToSave: number | null = null;
    let bankOrigemIdToSave: number | null = null;
    let bankDestinoIdToSave: number | null = null;

    if (type === "transfer") {
        bankOrigemIdToSave = selectedBancoSaiuDeId ? (selectedBancoSaiuDeId as number) : null;
        bankDestinoIdToSave = selectedBancoParaId ? (selectedBancoParaId as number) : null;
        if (!bankOrigemIdToSave || !bankDestinoIdToSave) {
            alert("Selecione os bancos de origem e destino para a transferência.");
            return;
        }
        if (bankOrigemIdToSave === bankDestinoIdToSave) {
            alert("O banco de origem e o banco de destino não podem ser o mesmo.");
            return;
        }
    } else { // income or expenses
        categoryIdToSave = selectedCategoriaId ? (selectedCategoriaId as number) : null;
        bankIdToSave = selectedBancoId ? (selectedBancoId as number) : null;
        if (!categoryIdToSave) {
            alert("Selecione uma categoria.");
            return;
        }
        if (!bankIdToSave) {
            alert("Selecione um banco.");
            return;
        }
    }

    const updateDataForPrisma: any = {
        descricao: description,
        valor: parsedAmount * (type === "expenses" ? -1 : 1),
        data: date ? dayjs(date).toISOString() : new Date().toISOString(),
    };

    if (type === "transfer") {
        updateDataForPrisma.bancoOrigemId = bankOrigemIdToSave;
        updateDataForPrisma.bancoDestinoId = bankDestinoIdToSave;
        updateDataForPrisma.categoriaId = null; // Garante que estes campos sejam nulos no banco para transferências
        updateDataForPrisma.bancoid = null;
    } else {
        updateDataForPrisma.categoriaId = categoryIdToSave;
        updateDataForPrisma.bancoid = bankIdToSave;
        updateDataForPrisma.bancoOrigemId = null; // Garante que estes campos sejam nulos no banco para receita/despesa
        updateDataForPrisma.bancoDestinoId = null;
    }

    try {
        const updatedTransactionFromPrisma = await mockPrisma.transacoes.update({
            where: { id: initialData.id },
            data: updateDataForPrisma
        });
        console.log("Transação atualizada no mockPrisma:", updatedTransactionFromPrisma);

        // Agora, formata os dados para o componente pai (Transactions.tsx)
        const categoryName = updatedTransactionFromPrisma.categoriaId
            ? (await mockPrisma.categorias.findUnique({ where: { id: updatedTransactionFromPrisma.categoriaId } }))?.nome || "N/A"
            : "N/A";

        const bankName = updatedTransactionFromPrisma.bancoid
            ? (await mockPrisma.banco.findUnique({ where: { id: updatedTransactionFromPrisma.bancoid } }))?.nome || "N/A"
            : "N/A";

        const bankFromName = updatedTransactionFromPrisma.bancoOrigemId
            ? (await mockPrisma.banco.findUnique({ where: { id: updatedTransactionFromPrisma.bancoOrigemId } }))?.nome || "N/A"
            : "N/A";

        const bankToName = updatedTransactionFromPrisma.bancoDestinoId
            ? (await mockPrisma.banco.findUnique({ where: { id: updatedTransactionFromPrisma.bancoDestinoId } }))?.nome || "N/A"
            : "N/A";

        const formattedForParent = {
            id: updatedTransactionFromPrisma.id,
            category: type === "transfer" ? "Transferência" : categoryName,
            description: type === "transfer" ? `De ${bankFromName} para ${bankToName}` : `${bankName} - ${updatedTransactionFromPrisma.descricao || 'Sem Descrição'}`,
            date: dayjs(updatedTransactionFromPrisma.data).format("DD/MM/YYYY"),
            amount: updatedTransactionFromPrisma.valor,
            type: type,
            bank: bankName,
            bankFrom: bankFromName,
            bankTo: bankToName,
            bancoOrigemId: updatedTransactionFromPrisma.bancoOrigemId,
            bancoDestinoId: updatedTransactionFromPrisma.bancoDestinoId,
            bancoid: updatedTransactionFromPrisma.bancoid,
        };
        onSubmit(formattedForParent);
        onClose();
    } catch (error) {
        console.error("Erro ao salvar edição:", error);
        alert("Erro ao salvar edição. Verifique o console.");
    }
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
            <Typography style={{ fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>
              {labelMap[type]}
            </Typography>

            <Box style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {type !== "transfer" && (
                <TextField
                  fullWidth
                  label="Descrição"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              )}

              {type === "transfer" ? (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="saiu-label">Saiu de</InputLabel>
                    <Select
                      labelId="saiu-label"
                      id="select-saiu-de"
                      label="Saiu de"
                      value={selectedBancoSaiuDeId} // Usa o estado de ID
                      onChange={handleSelectChange(setSelectedBancoSaiuDeId)}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (<MenuItem disabled>Carregando bancos...</MenuItem>)}
                      {errorBancos && (<MenuItem disabled sx={{ color: "error.main" }}>{errorBancos}</MenuItem>)}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (<MenuItem disabled>Nenhum banco encontrado.</MenuItem>)}
                      {!loadingBancos && bancos.length > 0 && bancos.map((banco) => (
                        <MenuItem key={banco.id} value={banco.id}>{banco.nome}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="para-label">Para</InputLabel>
                    <Select
                      labelId="para-label"
                      id="select-para"
                      label="Para"
                      value={selectedBancoParaId} // Usa o estado de ID
                      onChange={handleSelectChange(setSelectedBancoParaId)}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (<MenuItem disabled>Carregando bancos...</MenuItem>)}
                      {errorBancos && (<MenuItem disabled sx={{ color: "error.main" }}>{errorBancos}</MenuItem>)}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (<MenuItem disabled>Nenhum banco encontrado.</MenuItem>)}
                      {!loadingBancos && bancos.length > 0 && bancos.map((banco) => (
                        <MenuItem key={banco.id} value={banco.id}>{banco.nome}</MenuItem>
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
                      value={selectedCategoriaId} // Usa o estado de ID
                      onChange={handleSelectChange(setSelectedCategoriaId)}
                      disabled={loadingCategorias || errorCategorias !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingCategorias && (<MenuItem disabled>Carregando categorias...</MenuItem>)}
                      {errorCategorias && (<MenuItem disabled sx={{ color: "error.main" }}>{errorCategorias}</MenuItem>)}
                      {!loadingCategorias && categorias.length === 0 && !errorCategorias && (<MenuItem disabled>Nenhuma categoria encontrada.</MenuItem>)}
                      {!loadingCategorias && categorias.length > 0 && categorias.map((categoria) => (
                        <MenuItem key={categoria.id} value={categoria.id}>{categoria.nome}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="banco-label">Banco</InputLabel>
                    <Select
                      labelId="banco-label"
                      id="select-banco"
                      label="Banco"
                      value={selectedBancoId} // Usa o estado de ID
                      onChange={handleSelectChange(setSelectedBancoId)}
                      disabled={loadingBancos || errorBancos !== null}
                      sx={{ textAlign: "left" }}
                    >
                      {loadingBancos && (<MenuItem disabled>Carregando bancos...</MenuItem>)}
                      {errorBancos && (<MenuItem disabled sx={{ color: "error.main" }}>{errorBancos}</MenuItem>)}
                      {!loadingBancos && bancos.length === 0 && !errorBancos && (<MenuItem disabled>Nenhum banco encontrado.</MenuItem>)}
                      {!loadingBancos && bancos.length > 0 && bancos.map((banco) => (
                        <MenuItem key={banco.id} value={banco.id}>{banco.nome}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}

              <Box style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <TextField
                  fullWidth
                  label="Valor"
                  variant="outlined"
                  type="number"
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
                onClick={handleSubmit}
              >
                Salvar Edição
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}