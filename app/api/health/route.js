import {NextResponse} from "next/server";

export async function GET(){
return NextResponse.json({
status:"ok",
app:"GroupFinder AI v2.2"
});
}