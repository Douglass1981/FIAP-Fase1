import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/mockPrisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  console.log("Tentativa de login para email:", email);

  console.log("Senha recebida (texto puro):", password);

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email e senha são obrigatórios." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (!user) {
      console.log("Usuário não encontrado no mock para email:", email);
      return NextResponse.json(
        { error: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    console.log("Usuário mockado encontrado:", user.email);
    console.log("Hash armazenado no mock:", user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log("Resultado da comparação da senha:", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Login bem-sucedido!",
        user: userWithoutPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no processo de login:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
