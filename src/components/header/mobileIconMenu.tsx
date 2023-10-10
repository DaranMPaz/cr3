'use client'
import {MdMenu} from 'react-icons/md'
import { Button } from '@nextui-org/react'

export default function MobileIconMenu({
  onClick
}:{
  onClick:any
}){
  return(
    <Button onClick={onClick} variant='bordered' isIconOnly radius='sm' className='border-zinc-900 hover:text-red-400 transition md:hidden'>
      <MdMenu className='w-6 h-6' />
    </Button>
  )
}