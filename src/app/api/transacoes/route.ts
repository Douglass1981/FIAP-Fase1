// src/app/api/transacoes/route.ts
import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prisma"; // Seu mock do Prisma

// API para buscar transações (GET)
export async function GET(request: Request) {
  try {
    // Você pode pegar parâmetros de query aqui se quiser filtrar
    // Ex: const { searchParams } = new URL(request.url);
    // const usuarioId = searchParams.get('usuarioId');

    const transacoes = await prisma.transacoes.findMany({
      // Adicione condições 'where' e 'orderBy' aqui se sua rota precisar delas
      // Ex:
      // where: {
      //   usuarioId: usuarioId ? parseInt(usuarioId) : undefined,
      // },
      // orderBy: {
      //   data: 'desc',
      // },
    });

    return NextResponse.json(transacoes, { status: 200 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE TRANSACOES (GET):", error.message);
    // console.error("STACK TRACE DA API DE TRANSACOES (GET):", error.stack); // Descomente para depuração
    return NextResponse.json(
      { message: "Falha interna ao carregar transações." },
      { status: 500 }
    );
  }
}

// API para criar uma nova transação (POST)
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Os dados da nova transação vêm do corpo da requisição

    // --- Validação Básica dos Campos Obrigatórios ---
    // Adapte estes campos conforme o seu schema.prisma
    if (!data.data || !data.descricao || data.valor === undefined || !data.tipoId || !data.categoriaId || !data.bancoid) {
        return NextResponse.json({ message: "Dados incompletos para a transação." }, { status: 400 });
    }

    // --- Converter para os tipos corretos antes de passar para o mock ---
    // O mock espera um Date para 'data' e um Number para 'valor'
    const parsedData = {
        ...data,
        data: new Date(data.data), // Converte a string de data para um objeto Date
        valor: parseFloat(data.valor), // Garante que o valor é um número
        // Garantir que IDs sejam inteiros, se vierem como string do frontend
        tipoId: parseInt(data.tipoId),
        categoriaId: parseInt(data.categoriaId),
        bancoid: parseInt(data.bancoid),
        // Adicione usuarioId se ele for passado no corpo da requisição e for obrigatório
        // usuarioId: parseInt(data.usuarioId),
    };


    // Cria a transação usando o mock do Prisma
    const newTransaction = await prisma.transacoes.create(parsedData);

    return NextResponse.json(newTransaction, { status: 201 }); // Retorna 201 Created para sucesso na criação
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE TRANSACOES (POST):", error.message);
    console.error("STACK TRACE DA API DE TRANSACOES (POST):", error.stack); // Descomente para depuração
    return NextResponse.json(
      { message: "Falha interna ao adicionar transação." },
      { status: 500 }
    );
  }
}