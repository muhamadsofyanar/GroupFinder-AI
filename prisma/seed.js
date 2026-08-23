const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient();

async function main(){
await prisma.group.createMany({
data:[
{
name:"Python Indonesia",
slug:"python-indonesia",
platform:"Telegram",
category:"Technology",
description:"Komunitas Python Indonesia",
memberCount:12000,
qualityScore:95,
inviteLink:"#"
},
{
name:"UMKM Indonesia",
slug:"umkm-indonesia",
platform:"WhatsApp",
category:"Business",
description:"Komunitas bisnis UMKM",
memberCount:5000,
qualityScore:88,
inviteLink:"#"
}
]
});
}

main().finally(()=>prisma.$disconnect());