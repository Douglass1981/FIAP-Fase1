"use client";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
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

import ModalButton from "@/components/Button"; 
import { Banco, Categoria, ModalTransactionProps } from './modal.types';
import type { TransactionDataForCard } from '../CardTransactions/cardTransactions.types';

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
  const [description, setDescription] = useState<string>("");

  const [bancos, setBancos] = useState<Banco[]>([]);
  const [loadingBancos, setLoadingBancos] = useState(false);
  const [errorBancos, useStateErrorBancos] = useState<string | null>(null);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(false);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);

  const [selectedBancoSaiuDe, setSelectedBancoSaiuDe] = useState<number | string>("");
  const [selectedBancoPara, setSelectedBancoPara] = useState<number | string>("");
  const [selectedBanco, setSelectedBanco] = useState<number | string>("");
  const [selectedCategoria, setSelectedCategoria] = useState<number | string>("");

  const fetchBancos = async () => {
    setLoadingBancos(true);
    useStateErrorBancos(null);
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
      useStateErrorBancos("Falha ao carregar bancos.");
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

  useEffect(() => {
    if (open) {
      fetchBancos();
      setAmount('');
      setDate(dayjs());
      setDescription('');

      if (type !== "transfer") {
        fetchCategorias();
        setSelectedCategoria("");
        setSelectedBanco("");
      } else {
        setCategorias([]);
        setSelectedCategoria("");
        setErrorCategorias(null);
        setLoadingCategorias(false);
        setSelectedBancoSaiuDe("");
        setSelectedBancoPara("");
      }
    }
  }, [open, type]);

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

    if (type !== "transfer") {
        if (!selectedCategoria) {
            alert("Por favor, selecione uma categoria.");
            return;
        }
        if (!selectedBanco) {
            alert("Por favor, selecione o banco.");
            return;
        }
    } else {
        if (!selectedBancoSaiuDe || !selectedBancoPara) {
            alert("Por favor, selecione os bancos de origem e destino.");
            return;
        }
        if (selectedBancoSaiuDe === selectedBancoPara) {
            alert("O banco de origem e o banco de destino não podem ser o mesmo.");
            return;
        }
    }

    const newTransactionDataForPrisma: any = {
      descricao: type === "transfer" ? `Transferência de ${parsedAmount.toFixed(2).replace('.', ',')}` : '',
      data: date ? date.toISOString() : new Date().toISOString(),
      valor: parsedAmount * (type === "expenses" ? 1 : 1),
      tipoId: type === "income" ? 1 : type === "expenses" ? 2 : 3,
      usuarioId: 1,
    };

    if (type === "transfer") {
      newTransactionDataForPrisma.bancoOrigemId = selectedBancoSaiuDe as number;
      newTransactionDataForPrisma.bancoDestinoId = selectedBancoPara as number;
      delete newTransactionDataForPrisma.categoriaId;
      delete newTransactionDataForPrisma.bancoid;
    } else {
      newTransactionDataForPrisma.categoriaId = selectedCategoria as number;
      newTransactionDataForPrisma.bancoid = selectedBanco as number;
      delete newTransactionDataForPrisma.bancoOrigemId;
      delete newTransactionDataForPrisma.bancoDestinoId;
    }

    try {
      const createdTransaction = await mockPrisma.transacoes.create(newTransactionDataForPrisma);

      const categoryName = createdTransaction.categoriaId
        ? (await mockPrisma.categorias.findUnique({ where: { id: createdTransaction.categoriaId } }))?.nome || "N/A"
        : "N/A";

      const bankName = createdTransaction.bancoid
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoid } }))?.nome || "N/A"
        : "N/A";

      const bankFromName = createdTransaction.bancoOrigemId
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoOrigemId } }))?.nome || "N/A"
        : "N/A";

      const bankToName = createdTransaction.bancoDestinoId
        ? (await mockPrisma.banco.findUnique({ where: { id: createdTransaction.bancoDestinoId } }))?.nome || "N/A"
        : "N/A";

      const formattedTransaction: TransactionDataForCard = {
        id: createdTransaction.id,
        category: type === "transfer" ? "Transferência" : categoryName,
        description: type === "transfer" ? `De ${bankFromName} para ${bankToName}` : `${bankName} - ${createdTransaction.descricao || 'Sem Descrição'}`,
        date: dayjs(createdTransaction.data).format("DD/MM/YYYY"),
        amount: createdTransaction.valor,
        type: type,
        bank: bankName,
        bankFrom: bankFromName,
        bankTo: bankToName,
        bancoOrigemId: createdTransaction.bancoOrigemId,
        bancoDestinoId: createdTransaction.bancoDestinoId,
        bancoid: createdTransaction.bancoid,
      };

      onAddTransaction(formattedTransaction);
      onClose();
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
              {labelMap[type]}
            </Typography>

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
              <ModalButton
                label="Não" 
                onClick={onClose}
                sx={{
                  backgroundColor: colors.red,
                  "&:hover": { backgroundColor: colors.lightRed },
                  padding: "12px 16px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
                fullWidth
                variant="contained" 
              />

              <ModalButton
                label="Adicionar" 
                onClick={handleSubmit}
                sx={{
                  backgroundColor: colors.bluePrimary500,
                  "&:hover": { backgroundColor: colors.purple },
                  padding: "12px 16px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
                fullWidth
                variant="contained"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}