'useClient'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import DropdownLink from './DropdownLink'
import IsoIcons from './IsoIcons'
import NavLink from './NavLink'

export default function Nav() {
  const router = useRouter()
  return (
    <nav className="hidden w-full justify-end items-center md:flex">
      <ul className="flex items-center gap-6">
        <NavLink pathName="/" text="Início" />
        <NavLink pathName="/about" text="Sobre" />
        <DropdownLink />
        <NavLink pathName="/news" text="Conteúdo" />
        <NavLink pathName="/faq" text="Perguntas Frequentes" />
        <IsoIcons />
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