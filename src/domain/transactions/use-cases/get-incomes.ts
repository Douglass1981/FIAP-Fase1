import { TransactionsRepository } from "../repositories/TransactionsRepository";

export const getIncomes = (
  repository: TransactionsRepository,
  userId: number
) => {
  return repository.getIncomes(userId);
};
