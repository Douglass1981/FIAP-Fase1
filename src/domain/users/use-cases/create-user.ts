import {
  UsersRepository,
  CreateUserDTO,
} from "../repositories/UsersRepository";

export const createUser = (
  usersRepository: UsersRepository,
  data: CreateUserDTO
) => {
  return usersRepository.createUser(data);
};
