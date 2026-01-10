import { TransactionsRepository } from "../repositories/TransactionsRepository";

export const getExpenses = (
  repository: TransactionsRepository,
  userId: number
) => {
  return repository.getExpenses(userId);
};
