import { PrismaClient } from '@/generated/prisma-client-js'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

console.log(prisma.$connect.toString)
interface userInterface {
  name: string
  email: string
  password: string
}

const newUser: userInterface[] = [{ name: "Douglas", email: "teste@teste", password: "1234" }]

export async function main() {
  for (const u of newUser) {

    await prisma.user.create({ data: u })
    
  }
}

main()