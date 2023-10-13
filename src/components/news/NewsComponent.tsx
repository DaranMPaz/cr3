import Link from "next/link";

export default function NewsComponent({newsTitle, newsLink}:{newsTitle?:string, newsLink?:string}) {
  return(
    <div className="flex flex-col gap-4 w-full p-6 text-left bg-zinc-900 md:origin-center md:hover:scale-105 transition">
      <div className="flex gap-1 text-zinc-100 text-sm">
        <p>{newsTitle}</p>
      </div>
      <Link href={`${newsLink}`} target='_blank' className='text-yellow-500 text-sm'>[ Acessar ]</Link>
    </div>
  )
}