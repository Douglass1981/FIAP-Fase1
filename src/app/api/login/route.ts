
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; 

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // 1. Validação básica
    if (!email || !password) {
        return NextResponse.json({ error: "Email e senha são obrigatórios." }, { status: 400 });
    }

    try {
        // 2. Encontrar o usuário pelo email
        const user = await prisma.usuario.findUnique({
            where: { email: email },
        });

        if (!user) {
            // Não encontrou o usuário
            return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
        }

        // 3. Comparar a senha fornecida com o hash armazenado
        // bcrypt.compare(senha_texto_puro, senha_hash_banco)
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // Senha incorreta
            return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
        }

        // 4. Login bem-sucedido!
        // Neste ponto, o usuário está autenticado.
        // Você pode retornar os dados do usuário (sem a senha) ou um token JWT.
        // Para uma autenticação de sessão real, você normalmente usaria NextAuth.js ou JWT.
        // Para este exemplo simples, retornaremos o nome do usuário.

        const { password: _, ...userWithoutPassword } = user; // Remove a senha do objeto de retorno

        return NextResponse.json({
            message: "Login bem-sucedido!",
            user: userWithoutPassword,
        }, { status: 200 });

    } catch (error) {
        console.error("Erro no processo de login:", error);
        return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
    }
}