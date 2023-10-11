'useClient'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import NavLink from './navLink'
import DropdownLink from './dropdownLink'

export default function Nav() {
  const router = useRouter()
  return(
    <nav className="hidden w-full justify-end items-center md:flex">
      <ul className="flex items-center gap-6">
        <NavLink pathName="/" text="Inicio" />
        <NavLink pathName="/about" text="Sobre" />
        <DropdownLink/>
        <NavLink pathName="/news" text="Conteúdo" />
        <NavLink pathName="/faq" text="Perguntas Frequentes" />
        <Button
          variant='bordered'
          color='warning'
          radius='sm' 
          size='md' 
          className='hover:text-red-400 hover:border-red-400'
          onClick={() => router.push('/contact')} >
          Entre em contato
        </Button>
      </ul>
    </nav>
  )
}