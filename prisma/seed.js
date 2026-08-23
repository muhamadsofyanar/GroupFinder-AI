const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();

async function main(){
 await prisma.group.createMany({
 data:[
 {
 name:"Python Indonesia",
 slug:"python-indonesia",
 platform:"Telegram",
 category:"Technology",
 description:"Komunitas belajar Python Indonesia",
 memberCount:12000,
 qualityScore:92,
 inviteLink:"#"
 },
 {
 name:"UMKM Indonesia",
 slug:"umkm-indonesia",
 platform:"WhatsApp",
 category:"Business",
 description:"Komunitas pelaku UMKM",
 memberCount:5000,
 qualityScore:85,
 inviteLink:"#"
 }
 ]
 });
}

main().finally(()=>prisma.$disconnect());