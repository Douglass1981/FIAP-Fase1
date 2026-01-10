import { Transaction } from "../entities/Transaction";

export interface CreateTransactionDTO {
  userId: number;
  type: string;
  title: string;
  value: number;
  date: string;
  category: string;
}

export interface TransactionsRepository {
  getTransactions(): Promise<Transaction[]>;
  getIncomes(userId: number): Promise<Transaction[]>;
  getExpenses(userId: number): Promise<Transaction[]>;
  createTransaction(data: CreateTransactionDTO): Promise<Transaction>;
  deleteTransaction(id: number): Promise<void>;
}
