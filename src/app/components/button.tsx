import Link from "next/link";

export function LinkButton({link, text}:{link:string, text:string}){
  return(
    <Link className='transition flex items-center w-fit px-4 py-3 font-bold rounded bg-theme-yellow-800 text-theme-gray-900 uppercase hover:bg-theme-red-500 hover:text-theme-gray-50' href={`${link}`}>{text}</Link>
  )
}