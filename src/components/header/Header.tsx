'use client'
import Logo from '@/components/header/Logo'
import MobileIconMenu from '@/components/header/MobileIconMenu'
import { useDisclosure } from '@nextui-org/react'
import IsoIcons from './IsoIcons'
import ModalMenu from './ModalMenu'
import Nav from './Nav'

export default function Header() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className='bg-zinc-900 w-full h-16 md:h-20 flex items-center p-4 md:p-12 fixed z-40'>
      <div className='flex items-center justify-between w-full max-w-[1600px] mx-auto'>
        <Logo />
        <div className='md:hidden flex' ><IsoIcons /></div>
        <MobileIconMenu onClick={onOpen} />
        <ModalMenu isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
        <Nav />
      </div>
    </header>
  )
}