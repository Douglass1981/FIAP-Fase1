

import { PrismaClient } from '@/app/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'


const prisma = new PrismaClient().$extends(withAccelerate())

interface userInterface {
    name: string
    email: string
    password: string
}

const newUser: userInterface [] = [{name: "Douglas", email:"teste@teste", password:"1234"}]

export async function main() {
    for (const u of newUser) {
      await prisma.user.create({data:u})
    }
  }
  
  main()