'use client'
import { useDisclosure } from '@nextui-org/react'
import Logo from '@/components/header/logo'
import MobileIconMenu from '@/components/header/mobileIconMenu'
import ModalMenu from './modalMenu'
import Nav from './nav'

export default function Header() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return(
    <header className='bg-zinc-900 w-full h-16 md:h-20 flex items-center p-4 md:p-12'>
      <div className='flex items-center justify-between w-full max-w-[1600px] mx-auto'>
        <Logo/>
        <MobileIconMenu onClick={onOpen} />
        <ModalMenu isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
        <Nav/>
      </div>
    </header>
  )
}