import { ROUTES } from "@/constants";

export class Users {
    static async getUsers() {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/users`);
        if (!res.ok) throw new Error("Erro ao buscar usuários");
        return res.json();
    }

    static async getUser(id: number) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/users/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar usuário");
        return res.json();
    }

    static async createUser(data: {
        name: string;
        email: string;
        password: string;
    }) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Erro ao criar usuário");

        return res.json();
    }

    static async getBankAccounts(userId: number) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/bank_accounts?userId=${userId}`);
        if (!res.ok) throw new Error("Erro ao buscar contas bancárias");
        return res.json();
    }
}

export class Transactions {
    static async getTransactions() {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions`);
        if (!res.ok) throw new Error("Erro ao buscar transações");
        return res.json();
    }

    static async getIncomes(userId: number) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions?userId=${userId}?type=receita`);
        if (!res.ok) throw new Error("Erro ao buscar transações");
        return res.json();
    }

    static async getExpenses(userId: number) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions?userId=${userId}?type=receita`);
        if (!res.ok) throw new Error("Erro ao buscar transações");
        return res.json();
    }

    static async createTransaction(data: {
        userId: number;
        type: string;
        title: string;
        value: number;
        date: string;
        category: string;
    }) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Erro ao criar transação");

        return res.json();
    }

    static async deleteTransaction(id: number) {
        const res = await fetch(`${ROUTES.BACKEND.MOCK}/transactions/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) throw new Error("Erro ao buscar transações");
        return true;
    }
}

export const usersService = new Users();
export const transactionsService = new Transactions();