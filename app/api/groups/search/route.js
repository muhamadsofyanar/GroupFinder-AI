import {NextResponse} from "next/server";

export async function GET(req){
 const q=new URL(req.url).searchParams.get("q");

 return NextResponse.json({
  keyword:q,
  results:[]
 });
}