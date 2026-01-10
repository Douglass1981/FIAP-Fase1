import { TransactionsRepository } from "../repositories/TransactionsRepository";

export const getTransactions = (
  repository: TransactionsRepository
) => {
  return repository.getTransactions();
};
