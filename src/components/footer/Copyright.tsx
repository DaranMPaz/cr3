import Link from "next/link";

export default function Copyright() {
  return(
    <div className="bg-zinc-900 px-6 md:px-24 py-6 md:py-3 border-t-1 border-zinc-700 text-xs flex flex-col md:flex-row gap-3 justify-between items-center text-zinc-400">
      <Link href={'https://www.instagram.com/dunnascomunicacao/'} target="_BLANK" className="hover:text-red-400" >Desenvolvido por D&apos;unnas Comunicação</Link>
      <span>CR3 Auditoria ©️ 2023 - Todos os Direitos Reservados</span>
    </div>
  )
}