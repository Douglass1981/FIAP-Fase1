import { User } from "../entities/User";

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UsersRepository {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
  createUser(data: CreateUserDTO): Promise<User>;
  getBankAccounts(userId: number): Promise<any[]>;
}
