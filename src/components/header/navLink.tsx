import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink({
  pathName,
  text
}:{
  pathName:string,
  text:string
}){

  const pathname = usePathname()

  return(
    <li>
      <Link className={`leading-relaxed hover:text-red-400 transition md:text-base text-xl ${pathname === pathName ? 'border-b-2 border-yellow-600' : ''}`} 
        href={pathName}>
        {text}
      </Link>
    </li>
  )
}