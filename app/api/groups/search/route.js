import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req){

const q = new URL(req.url).searchParams.get("q") || "";

const data = await prisma.group.findMany({
 where:{
  name:{
   contains:q,
   mode:"insensitive"
  }
 }
});

return NextResponse.json(data);
}