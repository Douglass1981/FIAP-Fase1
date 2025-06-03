type TransactionType = "income" | "expenses" | "transfer";

interface TransactionDataForCard {
  id: number;
  category: string;
  description: string;
  date: string;
  amount: number;
  type: "income" | "expenses" | "transfer";
  bankFrom?: string;
  bankTo?: string;
  bank?: string;
  bancoOrigemId?: number;
  bancoDestinoId?: number;
  bancoid?: number;
}

interface TransactionCardProps {
  id: number;
  category: string;
  description: string;
  date: string;
  amount: number;
  type: TransactionType;
  bankFrom?: string;
  bankTo?: string;
  bank?: string;
  bancoOrigemId?: number;
  bancoDestinoId?: number;
  bancoid?: number;
  onDelete: (id: number) => void;
  onEdit: (updatedTransaction: TransactionDataForCard) => void;
}

export type { TransactionType, TransactionDataForCard, TransactionCardProps };