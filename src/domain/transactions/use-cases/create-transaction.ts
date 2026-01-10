import {
  TransactionsRepository,
  CreateTransactionDTO,
} from "../repositories/TransactionsRepository";

export const createTransaction = (
  repository: TransactionsRepository,
  data: CreateTransactionDTO
) => {
  return repository.createTransaction(data);
};
