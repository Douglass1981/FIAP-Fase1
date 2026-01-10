import { UsersRepository } from "../repositories/UsersRepository";

export const getUsers = (usersRepository: UsersRepository) => {
  return usersRepository.getUsers();
};
