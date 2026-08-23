import Link from "next/link";

export default function Home(){
return(
<main style={{padding:40}}>
<h1>GroupFinder AI</h1>
<p>Temukan komunitas WhatsApp dan Telegram.</p>

<Link href="/groups">Lihat Semua Grup</Link>

</main>
)
}