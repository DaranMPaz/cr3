'use client'

import { SectionContainer } from "./section";
import Image from "next/image";
import Link from "next/link";
import Instagram from '../../public/icons/Instagram-img.png'
import Facebook from '../../public/icons/Facebook-img.png'
import Linkedin from '../../public/icons/Linkedin-img.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Form } from "./form";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export function ContactSection() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up" className="pt-12">
      <SectionContainer padding="large" >
        <ContactSectionContainer>
          <ContactSectionTitle
            title1="Vamos começar"
            title2="a conversa?"
            text1="Entre em contato para iniciar uma jornada de sucesso"
            text2="Preencha o formulário ao lado e nossos especialistas entrarão em
            contato para entender suas necessidades e discutir como podemos ajudar
              você a atingir seus objetivos."
            text3="Alguma dúvida? Acesse nossa página de perguntas frequentes:"
            link="Perguntas frequentes"
          />
          <Form/>
        </ContactSectionContainer>
      </SectionContainer>
    </div>
  )
}

export function ContactSectionContainer({
  children
}:{
  children:React.ReactNode
}) {
  return(
    <div className="flex flex-col md:flex-row gap-20 pb-12 md:pb-0 justify-between w-full mx-auto">
      {children}
    </div>
  )
}

export function ContactSectionTitle({
  title1,
  title2,
  text1,
  text2,
  text3,
  link,
}:{
  title1 : string,
  title2 : string,
  text1 : string,
  text2 : string,
  text3 : string,
  link : string,  
}) {
  return(
    <div className="flex flex-col max-w-[600px] pr-12">
      <div className="flex flex-col gap-6 border-b border-theme-gray-700 text-theme-gray-50 pb-6">
        <h2 className="text-4xl uppercase text-theme-gray-50 leading-normal"><b className="text-theme-blue-500">{title1}</b><br/> {title2}</h2>
        <p className="font-bold">{text1}</p>
        <p className="text-theme-gray-400">{text2}</p>
      </div>
      <div className="flex w-full justify-between pt-6 gap-6">
        <div className="flex flex-col gap-6 w-full">
          <p className="text-sm text-theme-gray-400">{text3}</p>
          <Link className="uppercase text-theme-yellow-700 font-bold" href={"/faq"}>{link}</Link>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <p className="text-sm text-theme-gray-400">Se preferir você também pode acessar nossas redes sociais:</p>
          <div className="flex gap-3">
            <li className="list-none"><Link className='hover:text-red-400 transition' href={"/"}><BsInstagram/></Link></li>
            <li className="list-none"><Link className='hover:text-red-400 transition' href={"/"}><BsFacebook/></Link></li>
            <li className="list-none"><Link className='hover:text-red-400 transition' href={"/"}><BsLinkedin/></Link></li>  
          </div>
        </div>
      </div>
    </div>
  )
}