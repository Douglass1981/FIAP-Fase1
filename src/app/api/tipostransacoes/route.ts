
import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prisma"; // Seu mock do Prisma

// API para buscar tipos de transações (GET)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const descricao = searchParams.get('descricao');

    const where: any = {};
    if (descricao) {
      where.descricao = descricao;
    }

    const tiposTransacoes = await prisma.tipoTransacoes.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      orderBy: { descricao: 'asc' }, // Geralmente útil ordenar por descrição
    });

    return NextResponse.json(tiposTransacoes, { status: 200 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE TIPO_TRANSACOES (GET):", error.message);
    return NextResponse.json(
      { message: "Falha interna ao carregar tipos de transações." },
      { status: 500 }
    );
  }
}

// API para criar um novo TipoTransacao (POST)
// Note: Esta função pode ser mais complexa devido ao ID @unique e não @autoincrement
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Os dados do novo tipo vêm do corpo da requisição

    // Validação básica
    // Como o ID não é autoincrement, você pode optar por exigir o ID no POST
    // Ou deixar o mock gerar um (com risco de colisão se não for robusto)
    if (data.id === undefined || !data.descricao) { // Exigindo ID e descricao
        return NextResponse.json({ message: "ID e descrição são obrigatórios para o TipoTransacao." }, { status: 400 });
    }

    const newTipoTransacao = await prisma.tipoTransacoes.create({
      id: parseInt(data.id), // Garante que o ID é um número
      descricao: data.descricao,
      // createdAt e updatedAt são default no Prisma
    });

    return NextResponse.json(newTipoTransacao, { status: 201 }); // Retorna 201 Created
  } catch (error: any) {
    // Se o erro for devido a ID duplicado (mock pode lançar um erro), você pode tratar:
    if (error.message.includes("já existe")) { // Exemplo de tratamento de erro do mock
        return NextResponse.json({ message: error.message }, { status: 409 }); // 409 Conflict
    }
    console.error("ERRO DETALHADO NA API DE TIPO_TRANSACOES (POST):", error.message);
    console.error("STACK TRACE DA API DE TIPO_TRANSACOES (POST):", error.stack);
    return NextResponse.json(
      { message: "Falha interna ao adicionar tipo de transação." },
      { status: 500 }
    );
  }
}