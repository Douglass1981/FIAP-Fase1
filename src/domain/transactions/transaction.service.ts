import { TransactionsHttpRepository } from "@/infra/repositories/transactions/TransactionsHttpRepository";
import { getTransactions } from "@/domain/transactions/use-cases/get-transactions";
import { getIncomes } from "@/domain/transactions/use-cases/get-incomes";
import { getExpenses } from "@/domain/transactions/use-cases/get-expenses";
import { createTransaction } from "@/domain/transactions/use-cases/create-transaction";
import { deleteTransaction } from "@/domain/transactions/use-cases/delete-transaction";
import { CreateTransactionDTO } from "@/domain/transactions/repositories/TransactionsRepository";

export const transactionsService = {
  getTransactions: () =>
    getTransactions(TransactionsHttpRepository),

  getIncomes: (userId: number) =>
    getIncomes(TransactionsHttpRepository, userId),

  getExpenses: (userId: number) =>
    getExpenses(TransactionsHttpRepository, userId),

  createTransaction: (data: CreateTransactionDTO) =>
    createTransaction(TransactionsHttpRepository, data),

  deleteTransaction: (id: number) =>
    deleteTransaction(TransactionsHttpRepository, id),
};
