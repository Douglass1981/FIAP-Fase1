import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { nome, email, password } = await req.json();

  if (!nome || !email || !password) {
    return NextResponse.json(
      { error: "Nome, email e senha são obrigatórios." },
      { status: 400 }
    );
  }

  const userExist = await prisma.usuario.findUnique({
    where: { email: email },
  });

  if (userExist) {
    return NextResponse.json(
      { error: "Usuário com este email já existe." },
      { status: 409 }
    );
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usuario.create({
      data: {
        nome,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (e) {
    console.error("Erro ao criar usuário:", e);
    return NextResponse.json(
      { error: "Erro interno do servidor ao criar usuário." },
      { status: 500 }
    );
  }
}
