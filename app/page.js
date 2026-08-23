import Link from "next/link";

export default function Home(){
return <main style={{padding:40}}>
<h1>GroupFinder AI</h1>
<p>Cari grup WhatsApp dan Telegram.</p>

<Link href="/groups">Browse Groups</Link>
<br/>
<Link href="/submit">Submit Group</Link>

</main>
}