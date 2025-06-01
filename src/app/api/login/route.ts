
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    console.log("Tentativa de login para email:", email); // Log 1
    console.log("Senha recebida (texto puro):", password); // Log 2 (CUIDADO EM PRODUÇÃO!)

    if (!email || !password) {
        return NextResponse.json({ error: "Email e senha são obrigatórios." }, { status: 400 });
    }

    try {
        const user = await prisma.usuario.findUnique({
            where: { email: email },
        });

        if (!user) {
            console.log("Usuário não encontrado no mock para email:", email); // Log 3
            return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
        }

        console.log("Usuário mockado encontrado:", user.email); // Log 4
        console.log("Hash armazenado no mock:", user.password); // Log 5

        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log("Resultado da comparação da senha:", isPasswordValid); // Log 6

        if (!isPasswordValid) {
            return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
        }

        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json({
            message: "Login bem-sucedido!",
            user: userWithoutPassword,
        }, { status: 200 });

    } catch (error) {
        console.error("Erro no processo de login:", error);
        return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
    }
}