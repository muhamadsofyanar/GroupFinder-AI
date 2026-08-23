export const dynamic = "force-dynamic";

import { prisma } from "../../../lib/prisma";

export default async function Detail({params}){

const group = await prisma.group.findUnique({
where:{slug:params.slug}
});

return (
<main style={{padding:40}}>
<h1>{group?.name}</h1>
<p>{group?.description}</p>
<p>{group?.platform}</p>
</main>
)
}