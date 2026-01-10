import { ROUTES } from "@/shared/constants";
import {
  UsersRepository,
  CreateUserDTO,
} from "@/domain/users/repositories/UsersRepository";
import { User } from "@/domain/users/entities/User";

export const UsersHttpRepository: UsersRepository = {
  async getUsers(): Promise<User[]> {
    const res = await fetch(`${ROUTES.BACKEND.MOCK}/users`);

    if (!res.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    return res.json();
  },

  async getUser(id: number): Promise<User> {
    const res = await fetch(`${ROUTES.BACKEND.MOCK}/users/${id}`);

    if (!res.ok) {
      throw new Error("Erro ao buscar usuário");
    }

    return res.json();
  },

  async createUser(data: CreateUserDTO): Promise<User> {
    const res = await fetch(`${ROUTES.BACKEND.MOCK}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Erro ao criar usuário");
    }

    return res.json();
  },

  async getBankAccounts(userId: number): Promise<any[]> {
    const res = await fetch(
      `${ROUTES.BACKEND.MOCK}/bank_accounts?userId=${userId}`
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar contas bancárias");
    }

    return res.json();
  },
};
