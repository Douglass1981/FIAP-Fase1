// src/components/modal-component/modalDetails.tsx
"use client";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button, Typography } from "@mui/material"; // Adicionando Typography
import { colors } from "../../app/mui.styles"; // Ajuste o caminho conforme necessário

// Definição do tipo de transação (se não estiver em um arquivo de tipos global)
type TransactionType = "income" | "expenses" | "transfer";

interface ModalDetailsProps {
  open: boolean;
  onClose: () => void;
  from: string; // Banco de origem (para transferência) ou o banco da transação
  to: string;   // Banco de destino (apenas para transferência)
  date: string;
  amount: string;
  // --- PROPS ADICIONADAS E CORRIGIDAS ---
  category: string;    // Nome da categoria (para receita/despesa)
  description: string; // Descrição da transação (texto livre ou "De X para Y")
  type: TransactionType; // Tipo da transação
}

export default function ModalDetails({
  open,
  onClose,
  from,
  to,
  date,
  amount,
  category, // Desestruturando
  description, // Desestruturando
  type, // Desestruturando
}: ModalDetailsProps) {
  if (!open) return null;

  // Componente auxiliar para exibir linhas de detalhe
  function DetailRow({ label, value }: { label: string; value: string }) {
    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ margin: 0 }}>{label}</Typography>
        <Typography variant="body2" sx={{ color: "black", margin: 0 }}>{value}</Typography>
      </Box>
    );
  }

  // Renderiza dinamicamente as informações com base no tipo
  const renderDetails = () => {
    if (type === "transfer") {
      return (
        <>
          <DetailRow label="De" value={from} />
          <DetailRow label="Para" value={to} />
          {/* Adicione a descrição para transferências também, se houver.
              No seu caso, 'description' para transferências já é "De X para Y",
              então pode ser redundante aqui, mas vou manter o campo caso queira um campo extra. */}
          {description && description.length > 0 && description !== `De ${from} para ${to}` && (
            <DetailRow label="Detalhes" value={description} />
          )}
          <DetailRow label="Valor" value={amount} />
          <DetailRow label="Data" value={date} />
        </>
      );
    } else { // income or expenses
      return (
        <>
          <DetailRow label="Categoria" value={category} />
          <DetailRow label="Banco" value={from} /> {/* 'from' aqui é o banco da transação */}
          <DetailRow label="Descrição" value={description} />
          <DetailRow label="Valor" value={amount} />
          <DetailRow label="Data" value={date} />
        </>
      );
    }
  };

  return (
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
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "start" }}>
            Detalhes da {type === "income" ? "Receita" : type === "expenses" ? "Despesa" : "Transferência"}
          </Typography>
          <Button
            onClick={onClose}
            sx={{ padding: 0, minWidth: 0, color: "#424242" }}
          >
            <CloseOutlinedIcon />
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {renderDetails()}
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            padding: "12px 16px",
            textTransform: "none",
            backgroundColor: colors.bluePrimary500,
            fontSize: "16px",
            "&:hover": { backgroundColor: colors.purple },
            marginTop: "1rem",
          }}
          onClick={onClose}
        >
          Fechar
        </Button>
      </Box>
    </Box>
  );
}