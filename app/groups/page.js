import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function Groups(){

const groups = await prisma.group.findMany();

return (
<main style={{padding:40}}>
<h1>Community Directory</h1>

{groups.map(g=>(
<div key={g.id}>
<h2>
<Link href={`/groups/${g.slug}`}>{g.name}</Link>
</h2>
<p>{g.platform} | {g.category}</p>
</div>
))}

</main>
)
}