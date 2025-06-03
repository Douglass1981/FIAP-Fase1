type TransactionType = "income" | "expenses" | "transfer";

interface Banco {
  id: number;
  nome: string;
}

interface Categoria {
  id: number;
  nome: string;
}

// delete
type ModalDeleteProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
};

// details

interface ModalDetailsProps {
  open: boolean;
  onClose: () => void;
  from: string;
  to: string;
  date: string;
  amount: string;

  category: string;
  description: string;
  type: TransactionType;
}

// edit
interface InitialEditData {
  id: number;
  from: string;
  to: string;
  amount: string;
  date: string;
  category: string;
  description: string;
}

interface ModalEditProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (updatedData: {
    id: number;
    description: string;
    amount: number;
    date: string;
    category?: string | number;
    bank?: string | number;
    bankFrom?: string | number;
    bankTo?: string | number;
    type: TransactionType;
  }) => void;
  transactionTypeLabel: string; 
  initialData: InitialEditData;
  type: TransactionType;
}

// transaction

interface TransactionDataForCard {
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
}

interface ModalTransactionProps {
  type: TransactionType;
  open: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: TransactionDataForCard) => void;
}

export type { TransactionType, Banco, Categoria, ModalDeleteProps, ModalDetailsProps, InitialEditData, ModalEditProps, ModalTransactionProps };