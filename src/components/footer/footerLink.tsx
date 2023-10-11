import Link from "next/link"

export default function FooterLink({text, link, isBlank}:{
  text:string,
  link:string,
  isBlank?:boolean
}) {
  return(
   isBlank ?  
   <li className='text-sm h-max leading-6 cursor-pointer tracking-wide hover:text-theme-red-500'>
      <Link target='_blank' href={`${link}`}>{`${text}`}</Link>
    </li>
  :
    <li className='text-sm h-max leading-6 cursor-pointer tracking-wide hover:text-theme-red-500'>
      <Link href={`${link}`}>{`${text}`}</Link>
    </li>
  )
}