'use client'

import Logo from "../../../public/logo-colored-light.png";
import ContactImg from '../../../public/contact-img.svg'

import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'
import { OtherContacts, PaddingContainer, SectionImageContainer, TextSection } from '@/app/components/section'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function ContactHeader(){
  return(
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link='/' text='Inicio' />
        <HeaderLink link='/about' text='Conheça a CR3'/>
        <HeaderDropdown/>
        <HeaderLink link='/news' text='Conteúdo' />
        <HeaderLink link='/faq' text='Dúvidas' />
        <HeaderButton link='/contact' text='Entre em Contato'/>
      </HeaderLinkGroup>
    </HeaderContainer>
  )
}

export function ContactOthers(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <OtherContacts img={ContactImg} alt='contato' title='OUTRAS FORMAS DE CONTATO' mail='contato@cr3auditoria.com.br' phone='+11 9 1234 5678' />
    </div>
  )
}

export function ContactBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-cta4">
        <PaddingContainer>
          <TextSection gap="gap-6" br color="text-theme-blue-300" hasCta titleType="display" title1="Descubra Nossos Serviços" title2="e Transforme Seu Negócio" paragraph="Queremos ajudar você a trazer conformidade, integridade e transparência para o seu negócio." cta="Conheça nossos serviços" link="/services/audit" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}