import { PrismaClient } from '@/generated/prisma-client-js'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())


export async function main() {

  const newUser =
  {
    nome: "douglas",
    email: "teste@teste",
    password: "123mudar",
  }
  const usercreated = await prisma.usuario.create({ data: newUser });

  const banco = {
    nome: "banco",
    logoBase64: "banco@banco",
  }
  const bancoCreated = await prisma.banco.create({ data: banco });

  const categorias = [{ nome: "pix" }, { nome: "Boleto" }, { nome: "Aguar" }, { nome: "Lux" }]

  const categoriasCreated = await prisma.categorias.createManyAndReturn({
    data: categorias
  })

  const usuariobanco = {
    usuarioId: usercreated.id,
    bancoId: bancoCreated.id
  }

  const tipo = [{ id: 1, descricao: "debito" }, { id: 2, descricao: "credito" }, { id: 3, descricao: "Transferencia" }, { id: 4, descricao: "Estorno" }]

  const tiposCreated = await prisma.tipoTransacoes.createManyAndReturn({
    data: tipo
  })

  const transacoes = [
    {descricao: "pix", valor: 100, data: new Date(), tipoId: tiposCreated[0].id, categoriaId: categoriasCreated[0].id, bancoid: bancoCreated.id},
    {descricao: "boleto", valor: 200, data: new Date(), tipoId: tiposCreated[1].id, categoriaId: categoriasCreated[1].id, bancoid: bancoCreated.id},
    
  ]

  const transacoesCreated = await prisma.transacoes.createManyAndReturn({
    data: transacoes
  })
  

}

main()