'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/logo-mobile.svg'
import Column from './Column'
import FooterLink from './FooterLink'
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Footer() {

  const router = useRouter()

  return (
    <footer className='bg-theme-gray2-900 text-theme-gray2-300 py-4 md:py-12 px-4 md:px-24 flex justify-center items-center'>
      <div className='flex md:flex-row flex-col justify-between md:items-start gap-12 md:gap-0 w-full md:max-w-[1600px] h-full'>
        <div className='flex flex-col items-center md:items-start gap-6 w-full md:w-max max-w-[170px] mx-auto md:mx-0'>
          <Image src={Logo} alt='CR3 Auditoria' />
          <span className='text-sm text-zinc-300 leading-relaxed'>Compromisso Ambiental, Auditoria de Excelência</span>
        </div>
        <Column title="Menu">
          <FooterLink link="/" text="Inicio" />
          <FooterLink link="/about" text="Conheça a CR3" />
          <FooterLink link="/audit" text="Auditoria de Terceira Parte" />
          <FooterLink link="/iso" text="Auditoria ISO" />
          <FooterLink link="/news" text="Conteúdo" />
        </Column>
        <Column title="Ajuda">
          <FooterLink link="/faq" text="Perguntas Frequêntes" />
          <FooterLink link="/contact" text="Contato" />
        </Column>
        <Column title="Termos">
          <FooterLink link="/terms" text="Termos Legais" />
          <FooterLink link="/policy" text="Política de Privacidade" />
          <FooterLink
            isBlank
            link="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            text="LGPD"
          />
        </Column>
        <div className='flex flex-col justify-start gap-6 md:gap-8 h-full min-h-[150px]'>
          <Button
            variant='bordered'
            color='warning'
            radius='sm' 
            size='md' 
            className='hover:text-red-400 hover:border-red-400'
            onClick={() => router.push('/contact')} >
            Entre em contato
          </Button>
          {/* <ul className='flex items-center gap-6 justify-center md:justify-end'>
            <li><Link className='hover:text-red-400 transition' href={"/"}><BsInstagram/></Link></li>
            <li><Link className='hover:text-red-400 transition' href={"/"}><BsFacebook/></Link></li>
            <li><Link className='hover:text-red-400 transition' href={"/"}><BsLinkedin/></Link></li>
          </ul> */}
        </div>
      </div>
    </footer>
  )
}