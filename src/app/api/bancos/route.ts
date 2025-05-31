


import prisma from "@/app/lib/prisma"; // <--- Use a mesma importação do seu cliente Prisma centralizado
import { NextResponse } from "next/server";

// Adicione esta linha para garantir que a rota rode em um ambiente Node.js,
// essencial para o Prisma Client.
export const runtime = 'nodejs';

// Handler para requisições GET (ex: GET /api/bancos)
export async function GET(req:Request) {
  try {
    const bancos = await prisma.banco.findMany({
      select: {
        id: true,
        nome: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return NextResponse.json(bancos, { status: 200 }); // Retorna JSON com status 200
  } catch (error) {
    console.error('Erro ao buscar bancos:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor ao buscar bancos.' },
      { status: 500 }
    );
  
  } finally {
    await prisma.$disconnect();
  }
}

// Opcional: Se você precisar de outros métodos HTTP para bancos, como POST, PUT, DELETE
// export async function POST(request) { /* ... */ }
// export async function PUT(request) { /* ... */ }
// export async function DELETE(request) { /* ... */ }

// Se você não definir outros handlers, o Next.js automaticamente retornará um 405 Method Not Allowed
// para métodos não suportados.