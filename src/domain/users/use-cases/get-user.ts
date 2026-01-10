import { UsersRepository } from "../repositories/UsersRepository";

export const getUser = (
  usersRepository: UsersRepository,
  id: number
) => {
  return usersRepository.getUser(id);
};
