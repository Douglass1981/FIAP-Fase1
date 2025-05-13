import prisma from "@/app/lib/prisma";
import { stat } from "fs";
import { NextResponse } from "next/server";


//criar metodo para receber nome, email e senha, e retornar um json com o id do usuario criado. 
export async function POST(req: Request) {
    const newuser = await req.json();

    const  userExist = await prisma.user.findFirst({where: {email: newuser.email}});
    if (userExist) {
        return NextResponse.json({error: "User already exists"}, {status: 400});
    }
   
    await prisma.user.create({data: newuser}).catch((e) => console.error("error:"+e));

    return NextResponse.json({newuser}, {status: 201});      
    
}