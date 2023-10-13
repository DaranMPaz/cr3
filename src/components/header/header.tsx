'use client'
import { useDisclosure } from '@nextui-org/react'
import Logo from '@/components/Header/Logo'
import MobileIconMenu from '@/components/Header/MobileIconMenu'
import ModalMenu from './ModalMenu'
import Nav from './Nav'

export default function Header() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return(
    <header className='bg-zinc-900 w-full h-16 md:h-20 flex items-center p-4 md:p-12 fixed z-40'>
      <div className='flex items-center justify-between w-full max-w-[1600px] mx-auto'>
        <Logo/>
        <MobileIconMenu onClick={onOpen} />
        <ModalMenu isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
        <Nav/>
      </div>
    </header>
  )
}