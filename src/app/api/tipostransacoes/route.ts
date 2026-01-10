
import { NextResponse } from 'next/server';
import prisma from "@/infra/database/prisma/mock"; 

// 
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
      orderBy: { descricao: 'asc' }, 
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

export async function POST(request: Request) {
  try {
    const data = await request.json(); 


    if (!data.id || !data.descricao) {
        return NextResponse.json(
            { message: "ID e descrição são obrigatórios para o TipoTransacao." }, 
            { status: 400 }
        );
    }


    const newTipoTransacao = await prisma.tipoTransacoes.create({
      data: {
        id: parseInt(data.id), 
        descricao: data.descricao,
      }
    });

    return NextResponse.json(newTipoTransacao, { status: 201 });
  } catch (error: any) {

    if (error.code === 'P2002' || error.message.includes("já existe")) { 
        return NextResponse.json({ message: "Este ID ou descrição já existe." }, { status: 409 }); 
    }

    console.error("ERRO DETALHADO NA API (POST):", error.message);
    return NextResponse.json(
      { message: "Falha interna ao adicionar tipo de transação." },
      { status: 500 }
    );
  }
}
