

import { NextResponse } from 'next/server';
import prisma from "@/infra/database/prisma/mock"; 

export async function GET() {
  try {
    const categorias = await prisma.categorias.findMany({
      orderBy: {
        nome: 'asc', 
      },
    });

    return NextResponse.json(categorias, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return NextResponse.json(
      { message: "Falha ao carregar categorias." },
      { status: 500 }
    );
  }
}
