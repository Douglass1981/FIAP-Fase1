
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
  Typography 
} from "@mui/material";
import { colors } from "../../app/mui.styles"; 
import { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import mockPrisma from "@/mockPrisma";


interface Banco {
  id: number;
  nome: string;
}


interface Categoria {
  id: number;
  nome: string;
}

// Interface para a transação que será adicionada e passada para o Card (consistente com Transaction interface em Transactions.tsx)
interface TransactionDataForCard {
    id: number;
    category: string;
    description: string;
    date: string;
    amount: number;
    type: "income" | "expenses" | "transfer";
    bankFrom?: string; // Nome do banco de origem
    bankTo?: string;   // Nome do banco de destino
    bank?: string;     // Nome do banco para receitas/despesas
    bancoOrigemId?: number; // ID do banco de origem (importante para cálculos no pai)
    bancoDestinoId?: number; // ID do banco de destino (importante para cálculos no pai)
    bancoid?: number; // ID do banco para receitas/despesas (importante para cálculos no pai)
}

type TransactionType = "income" | "expenses" | "transfer";

interface ModalTransactionProps {
  type: TransactionType;
  open: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: TransactionDataForCard) => void;
}

const labelMap = {
  income: "Nova Receita",
  expenses: "Nova Despesa",
  transfer: "Nova Transferência",
};

export default function ModalTransaction({
  type,
  open,
  onClose,
  onAddTransaction,
}: ModalTransactionProps) {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [amount, setAmount] = useState<string>("");
  // A descrição não será usada no UI da modal, mas o estado pode ser mantido se a lógica de descrição gerada depender dela.
  // No momento, a descrição é gerada ou vazia, então não precisamos mais do TextField.
  const [description, setDescription] = useState<string>("");

  // Estados para listas de bancos e categorias (seus fetches existentes)
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [loadingBancos, setLoadingBancos] = useState(false);
  const [errorBancos, setErrorBancos] = useState<string | null>(null);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(false);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);

  // Estados para os valores selecionados dos dropdowns
  const [selectedBancoSaiuDe, setSelectedBancoSaiuDe] = useState<number | string>("");
  const [selectedBancoPara, setSelectedBancoPara] = useState<number | string>("");
  const [selectedBanco, setSelectedBanco] = useState<number | string>("");
  const [selectedCategoria, setSelectedCategoria] = useState<number | string>("");

  // Funções para buscar bancos e categorias (seus fetches existentes)
  const fetchBancos = async () => {
    setLoadingBancos(true);
    setErrorBancos(null);
    try {
      const data: Banco[] = await mockPrisma.banco.findMany({});
      setBancos(data);
      if (data.length > 0) {
        setSelectedBancoSaiuDe(data[0].id);
        setSelectedBancoPara(data[0].id);
        setSelectedBanco(data[0].id);
      } else {
        setSelectedBancoSaiuDe(""); setSelectedBancoPara(""); setSelectedBanco("");
      }
    } catch (error) {
      console.error("Erro ao carregar bancos:", error);
      setErrorBancos("Falha ao carregar bancos.");
    } finally { setLoadingBancos(false); }
  };

  const fetchCategorias = async () => {
    setLoadingCategorias(true);
    setErrorCategorias(null);
    try {
      const data: Categoria[] = await mockPrisma.categorias.findMany({});
      setCategorias(data);
      if (data.length > 0) {
        setSelectedCategoria(data[0].id);
      } else {
        setSelectedCategoria("");
      }
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      setErrorCategorias("Falha ao carregar categorias.");
    } finally { setLoadingCategorias(false); }
  };

  // Efeito para carregar dados e resetar estados ao abrir/mudar tipo
  useEffect(() => {
    if (open) {
      fetchBancos();
      // Sempre resetar os campos ao abrir a modal
      setAmount('');
      setDate(dayjs());
      setDescription(''); // Limpa a descrição sempre

      if (type !== "transfer") {
        fetchCategorias();
        setSelectedCategoria(""); // Garante que a categoria seja resetada
        setSelectedBanco(""); // Garante que o banco de transação seja resetado
      } else {
        setCategorias([]); // Limpa categorias para transferência
        setSelectedCategoria("");
        setErrorCategorias(null);
        setLoadingCategorias(false);
        setSelectedBancoSaiuDe(""); // Garante que os bancos de transferência sejam resetados
        setSelectedBancoPara("");
      }
    }
  }, [open, type]);

  // Handlers genéricos para os Selects (simplifica o código)
  const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<string | number>>) =>
    (event: SelectChangeEvent<string | number>) => {
      setter(event.target.value);
    };

  const handleSubmit = async () => {
    // Validações básicas
    if (!amount || !date) {
      alert("Por favor, preencha o valor e a data.");
      return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert("Por favor, insira um valor válido e positivo.");
        return;
    }

    // Validações específicas por tipo
    if (type !== "transfer") {
        if (!selectedCategoria) {
            alert("Por favor, selecione uma categoria.");
            return;
        }
        if (!selectedBanco) {
            alert("Por favor, selecione o banco.");
            return;
        }
    } else { // type === "transfer"
        if (!selectedBancoSaiuDe || !selectedBancoPara) {
            alert("Por favor, selecione os bancos de origem e destino.");
            return;
        }
        if (selectedBancoSaiuDe === selectedBancoPara) {
            alert("O banco de origem e o banco de destino não podem ser o mesmo.");
            return;
        }
    }

    // Preparando dados para o mockPrisma
    const newTransactionDataForPrisma: any = {
      // Descrição será vazia para Receita/Despesa, e gerada para Transferência
      descricao: type === "transfer" ? `Transferência de ${parsedAmount.toFixed(2).replace('.', ',')}` : '',
      data: date ? date.toISOString() : new Date().toISOString(),
      valor: parsedAmount * (type === "expenses" ? -1 : 1), // Valor negativo para despesas
      tipoId: type === "income" ? 1 : type === "expenses" ? 2 : 3, // Assumindo 3 para Transferência no seu mockTipoTransacoes
      usuarioId: 1, // Assumindo um usuário mockado, ajuste se tiver autenticação real
    };

    if (type === "transfer") {
      newTransactionDataForPrisma.bancoOrigemId = selectedBancoSaiuDe as number;
      newTransactionDataForPrisma.bancoDestinoId = selectedBancoPara as number;
      delete newTransactionDataForPrisma.categoriaId; // Garante que não envie categoria para transferência
      delete newTransactionDataForPrisma.bancoid;     // Garante que não envie bancoid para transferência
    } else { // income or expenses
      newTransactionDataForPrisma.categoriaId = selectedCategoria as number;
      newTransactionDataForPrisma.bancoid = selectedBanco as number;
      delete newTransactionDataForPrisma.bancoOrigemId; // Garante que não envie bancos de origem/destino para receita/despesa
      delete newTransactionDataForPrisma.bancoDestinoId;
    }

    try {
      const createdTransaction = await mockPrisma.transacoes.create(newTransactionDataForPrisma);

      // Buscando nomes para exibir no TransactionCard
      const categoryName = createdTransaction.categoriaId
        ? (await mockPrisma.categorias.findUnique({ where: { id: createdTransaction.categoriaId } }))?.nome || "N/A"
        : "N/A"; // "N/A" para transferências

      const bankName = createdTransaction.bancoid
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoid } }))?.nome || "N/A"
        : "N/A";

      const bankFromName = createdTransaction.bancoOrigemId
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoOrigemId } }))?.nome || "N/A"
        : "N/A";

      const bankToName = createdTransaction.bancoDestinoId
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoDestinoId } }))?.nome || "N/A"
        : "N/A";

      // Formata a transação para o formato que o TransactionCard espera
      const formattedTransaction: TransactionDataForCard = {
        id: createdTransaction.id,
        category: type === "transfer" ? "Transferência" : categoryName,
        description: type === "transfer" ? `De ${bankFromName} para ${bankToName}` : `${bankName} - ${createdTransaction.descricao || 'Sem Descrição'}`, // Descrição gerada/vazia
        date: dayjs(createdTransaction.data).format("DD/MM/YYYY"),
        amount: createdTransaction.valor, // Já vem tratado como positivo/negativo do mockPrisma
        type: type,
        bank: bankName,
        bankFrom: bankFromName,
        bankTo: bankToName,
        // Incluindo os IDs para o componente pai fazer os cálculos
        bancoOrigemId: createdTransaction.bancoOrigemId,
        bancoDestinoId: createdTransaction.bancoDestinoId,
        bancoid: createdTransaction.bancoid,
      };

      onAddTransaction(formattedTransaction);
      onClose(); // Fecha a modal
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
      alert("Erro ao adicionar transação. Verifique o console.");
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
              {labelMap[type]} {/* Título da modal */}
            </Typography>

            <Box style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {/* === CAMPO DE DESCRIÇÃO REMOVIDO PARA TODOS OS TIPOS === */}
              {/* Se quiser reabilitar para um tipo específico, adicione a condição aqui. */}
              {/* Ex: {type !== "transfer" && ( /* <TextField ... /> */ /* )} */}

              {type === "transfer" ? (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="saiu-label">Saiu de</InputLabel>
                    <Select
                      labelId="saiu-label"
                      id="select-saiu-de"
                      label="Saiu de"
                      value={selectedBancoSaiuDe}
                      onChange={handleSelectChange(setSelectedBancoSaiuDe)}
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
                      value={selectedBancoPara}
                      onChange={handleSelectChange(setSelectedBancoPara)}
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
                      value={selectedCategoria}
                      onChange={handleSelectChange(setSelectedCategoria)}
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
                      value={selectedBanco}
                      onChange={handleSelectChange(setSelectedBanco)}
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
                Adicionar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}