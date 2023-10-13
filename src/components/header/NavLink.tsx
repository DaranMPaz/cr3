import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink({
  onClose,
  pathName,
  text
}:{
  onClose?:any
  pathName:string,
  text:string
}){

  const pathname = usePathname()

  return(
    <li>
      <Link className={`leading-relaxed hover:text-red-400 transition md:text-base text-xl ${pathname === pathName ? 'border-b-2 border-yellow-600' : ''}`} 
        onClick={onClose}
        href={pathName}>
        {text}
      </Link>
    </li>
  )
}