import { TransactionsRepository } from "../repositories/TransactionsRepository";

export const deleteTransaction = (
  repository: TransactionsRepository,
  id: number
) => {
  return repository.deleteTransaction(id);
};
