import { UsersHttpRepository } from "@/infra/repositories/users/UsersHttpRepository";
import { getUsers } from "./use-cases/get-users";
import { getUser } from "./use-cases/get-user";
import { createUser } from "./use-cases/create-user";
import { getBankAccounts } from "./use-cases/get-bank-account";

export const usersService = {
  getUsers: () => getUsers(UsersHttpRepository),
  getUser: (id: number) => getUser(UsersHttpRepository, id),
  createUser: (data: any) => createUser(UsersHttpRepository, data),
  getBankAccounts: (userId: number) =>
    getBankAccounts(UsersHttpRepository, userId),
};
