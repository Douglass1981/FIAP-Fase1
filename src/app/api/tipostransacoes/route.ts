
import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prisma"; 

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
        return NextResponse.json({ message: "ID e descrição são obrigatórios para o TipoTransacao." }, { status: 400 });
    }

    const newTipoTransacao = await prisma.tipoTransacoes.create({
      id: parseInt(data.id), 
      descricao: data.descricao,
      
    });

    return NextResponse.json(newTipoTransacao, { status: 201 });
  } catch (error: any) {
    
    if (error.message.includes("já existe")) { 
        return NextResponse.json({ message: error.message }, { status: 409 }); 
    }
    console.error("ERRO DETALHADO NA API DE TIPO_TRANSACOES (POST):", error.message);
    console.error("STACK TRACE DA API DE TIPO_TRANSACOES (POST):", error.stack);
    return NextResponse.json(
      { message: "Falha interna ao adicionar tipo de transação." },
      { status: 500 }
    );
  }
}