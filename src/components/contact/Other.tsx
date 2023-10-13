'use client'
import ContactImg from '../../../public/contact-img.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from 'next/image';
import Container from '../section/SectionContainer';

import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function Other(){

  const email = 'contato@cr3auditoria.com.br'

  const copyEmail = ({email}:{email:string}) => {
    navigator.clipboard.writeText(email)
  }

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding="large" >
      <Image alt='contato' src={ContactImg} width={512} height={512} className='animate-idle-slow'></Image>
      <div className="flex flex-col gap-6 w-full max-w-xl z-10">
        <h2 className="text-2xl leading-relaxed text-theme-gray-50 uppercase" >OUTRAS FORMAS DE CONTATO</h2>
        <div className="flex flex-col">
          <div className="flex py-3 border-b border-theme-gray-600 w-max">
            <span className="uppercase font-bold text-theme-red-300 text-base pr-4">E-mail </span>
            <Popover placement='bottom' color='success' >
              <PopoverTrigger>
                <span onClick={() => copyEmail({email})} className="uppercase text-theme-gray-50 text-base cursor-pointer"> contato@cr3auditoria.com.br</span>
              </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 rounded-sm">
                    <div className="text-small font-bold">E-mail copiado para a área de transferência!</div>
                  </div>
                </PopoverContent>
            </Popover>
          </div>
          {/* <div className="flex py-3">
            <span className="uppercase font-bold text-theme-red-300 text-lg pr-4">E-mail </span>
            <span className="uppercase text-theme-gray-50 text-lg"> +11 9 1234 5678</span>
          </div> */}
        </div>
      </div>
    </Container>
    </div>
  )
}