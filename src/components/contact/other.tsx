'use client'
import ContactImg from '../../../public/contact-img.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Container from '../section/container';
import Image from 'next/image';

export default function Other(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding="large" >
      <Image alt='contato' src={ContactImg} width={512} height={512}></Image>
      <div className="flex flex-col gap-6 w-full max-w-xl z-10">
        <h2 className="text-2xl leading-relaxed text-theme-gray-50 uppercase" >OUTRAS FORMAS DE CONTATO</h2>
        <div className="flex flex-col">
          <div className="flex py-3 border-b border-theme-gray-600">
            <span className="uppercase font-bold text-theme-red-300 text-lg pr-4">Telefone </span>
            <span className="uppercase text-theme-gray-50 text-lg"> contato@cr3auditoria.com.br</span>
          </div>
          <div className="flex py-3">
            <span className="uppercase font-bold text-theme-red-300 text-lg pr-4">E-mail </span>
            <span className="uppercase text-theme-gray-50 text-lg"> +11 9 1234 5678</span>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}