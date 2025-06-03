import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma"; 
export async function GET(request: Request) {
  try {
    const transacoes = await prisma.transacoes.findMany({});

    return NextResponse.json(transacoes, { status: 200 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE TRANSACOES (GET):", error.message);

    return NextResponse.json(
      { message: "Falha interna ao carregar transações." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (
      !data.data ||
      !data.descricao ||
      data.valor === undefined ||
      !data.tipoId ||
      !data.categoriaId ||
      !data.bancoid
    ) {
      return NextResponse.json(
        { message: "Dados incompletos para a transação." },
        { status: 400 }
      );
    }

    const parsedData = {
      ...data,
      data: new Date(data.data),
      valor: parseFloat(data.valor),
      tipoId: parseInt(data.tipoId),
      categoriaId: parseInt(data.categoriaId),
      bancoid: parseInt(data.bancoid),
    };

    const newTransaction = await prisma.transacoes.create(parsedData);

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE TRANSACOES (POST):", error.message);
    console.error("STACK TRACE DA API DE TRANSACOES (POST):", error.stack);
    return NextResponse.json(
      { message: "Falha interna ao adicionar transação." },
      { status: 500 }
    );
  }
}
