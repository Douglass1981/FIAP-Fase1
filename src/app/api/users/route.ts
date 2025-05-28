
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Importe o bcrypt

export async function POST(req: Request) {
    const { nome, email, password } = await req.json(); // Desestruture para pegar name, email e password

    // 1. Validação básica (opcional, mas recomendado)
    if (!nome || !email || !password) {
        return NextResponse.json({ error: "Nome, email e senha são obrigatórios." }, { status: 400 });
    }

    // 2. Verificar se o usuário já existe
    const userExist = await prisma.usuario.findUnique({ // Use findUnique se email for um campo único
        where: { email: email }
    });

    if (userExist) {
        return NextResponse.json({ error: "Usuário com este email já existe." }, { status: 409 }); // 409 Conflict
    }

    try {
        // 3. Gerar o hash da senha
        const hashedPassword = await bcrypt.hash(password, 10); // 10 é o saltRounds, um bom valor padrão

        // 4. Criar o usuário com a senha hasheada
        const newUser = await prisma.usuario.create({
            data: {
                nome,
                email,
                password: hashedPassword, // Armazene a senha hasheada
            },
        });

        // 5. Retorne o usuário criado (sem a senha, claro)
        const { password: _, ...userWithoutPassword } = newUser; // Remove a senha do objeto de retorno
        return NextResponse.json(userWithoutPassword, { status: 201 });

    } catch (e) {
        console.error("Erro ao criar usuário:", e);
        return NextResponse.json({ error: "Erro interno do servidor ao criar usuário." }, { status: 500 });
    }
}