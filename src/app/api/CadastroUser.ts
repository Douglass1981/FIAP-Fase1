import { PrismaClient } from "@/generated/prisma-client-js/client";
import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "../generated/prisma/client";


const prisma = new PrismaClient();


export default async function CadastroUser(req:NextApiRequest , res:NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { nome, email, password } = req.body;

      // Validação básica dos dados 
      if (!nome || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
      }

      const newUser = await prisma.usuario.create({
        data: {
          nome,
          email,
          password, 
        },
      });

      return res.status(201).json(newUser); // Retorna o cliente criado com status 201 (Created)
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      return res.status(500).json({ message: 'Erro interno do servidor ao cadastrar.' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ message: 'Método não permitido. Apenas POST é aceito.' });
  }
}