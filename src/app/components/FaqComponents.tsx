'use client'

import Logo from "../../../public/logo-colored-light.png";

import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'
import { FaqAccordeon } from '@/app/components/accordeon'
import { PaddingContainer, SectionImageContainer, TextSection } from '@/app/components/section'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function FaqHeader(){
  return(
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link='/' text='Inicio' />
        <HeaderLink link='/about' text='Conheça a CR3'/>
        <HeaderDropdown/>
        <HeaderLink link='/news' text='Conteúdo'/>
        <HeaderLink link='/faq' text='Dúvidas' isActive />
        <HeaderButton link='/contact' text='Entre em Contato' />
      </HeaderLinkGroup>
    </HeaderContainer>
  )
}

export function FaqContent(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div className='pt-[80px]' data-aos="fade-up">
      <FaqAccordeon/>
    </div>
  )
}

export function FaqBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-cta1">
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Entre em contato" link="/contact" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}