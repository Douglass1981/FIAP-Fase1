
import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
 
    const bancos = await prisma.banco.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
    return NextResponse.json(bancos, { status: 200 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE BANCOS (BACKEND):", error.message);
    console.error("STACK TRACE DA API DE BANCOS (BACKEND):", error.stack);
    return NextResponse.json(
      { message: "Falha interna ao carregar bancos." },
      { status: 500 }
    );
  }
}