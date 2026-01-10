import { UsersRepository } from "../repositories/UsersRepository";

export const getBankAccounts = (
  usersRepository: UsersRepository,
  userId: number
) => {
  return usersRepository.getBankAccounts(userId);
};
