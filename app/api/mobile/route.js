import {NextResponse} from "next/server";

export async function GET(){

return NextResponse.json({
api:"mobile-ready",
version:"2.1"
});

}