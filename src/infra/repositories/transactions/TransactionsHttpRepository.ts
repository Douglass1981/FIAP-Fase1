import { ROUTES } from "@/shared/constants";
import {
  TransactionsRepository,
  CreateTransactionDTO,
} from "@/domain/transactions/repositories/TransactionsRepository";
import { Transaction } from "@/domain/transactions/entities/Transaction";

export const TransactionsHttpRepository: TransactionsRepository = {
  async getTransactions(): Promise<Transaction[]> {
    const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions`);

    if (!res.ok) {
      throw new Error("Erro ao buscar transações");
    }

    return res.json();
  },

  async getIncomes(userId: number): Promise<Transaction[]> {
    const res = await fetch(
      `${ROUTES.BACKEND.MOCK}/transactions?userId=${userId}&type=receita`
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar receitas");
    }

    return res.json();
  },

  async getExpenses(userId: number): Promise<Transaction[]> {
    const res = await fetch(
      `${ROUTES.BACKEND.MOCK}/transactions?userId=${userId}&type=despesa`
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar despesas");
    }

    return res.json();
  },

  async createTransaction(
    data: CreateTransactionDTO
  ): Promise<Transaction> {
    const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Erro ao criar transação");
    }

    return res.json();
  },

  async deleteTransaction(id: number): Promise<void> {
    const res = await fetch(
      `${ROUTES.BACKEND.MOCK}/transactions/${id}`,
      { method: "DELETE" }
    );

    if (!res.ok) {
      throw new Error("Erro ao deletar transação");
    }
  },
};
