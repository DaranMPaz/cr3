import Image from "next/image";
import LogoDesktop from '../../../public/logo-desktop.svg'
import Link from "next/link";

export default function Logo(){
  return(
    <Link href={'/'}>
      <Image src={LogoDesktop} alt="Logo CR3" priority />
    </Link>
  )
}