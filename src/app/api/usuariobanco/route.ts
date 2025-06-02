
import { NextResponse } from 'next/server';
import prisma from "@/app/lib/prisma"; 

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const usuarioId = searchParams.get('usuarioId');
    const bancoId = searchParams.get('bancoId');

    const where: any = {};
    if (usuarioId) {
      where.usuarioId = parseInt(usuarioId);
    }
    if (bancoId) {
      where.bancoId = parseInt(bancoId);
    }

    const usuarioBancos = await prisma.usuarioBanco.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      
    });

    return NextResponse.json(usuarioBancos, { status: 200 });
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE USUARIO_BANCO (GET):", error.message);
    return NextResponse.json(
      { message: "Falha interna ao carregar relações usuário-banco." },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  try {
    const data = await request.json(); 

    
    if (!data.usuarioId || !data.bancoId) {
        return NextResponse.json({ message: "ID do usuário e ID do banco são obrigatórios." }, { status: 400 });
    }

    const newUsuarioBanco = await prisma.usuarioBanco.create({
      usuarioId: parseInt(data.usuarioId),
      bancoId: parseInt(data.bancoId),
      
    });

    return NextResponse.json(newUsuarioBanco, { status: 201 }); 
  } catch (error: any) {
    console.error("ERRO DETALHADO NA API DE USUARIO_BANCO (POST):", error.message);
    console.error("STACK TRACE DA API DE USUARIO_BANCO (POST):", error.stack);
    return NextResponse.json(
      { message: "Falha interna ao adicionar relação usuário-banco." },
      { status: 500 }
    );
  }
}