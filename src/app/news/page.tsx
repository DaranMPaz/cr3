'use client'

import Logo from '../../../public/logo-colored-light.png'
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'
import { FormSection, SectionContainer } from '../components/section'
import { NewsGrid } from '../components/grid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function News() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return (
    <>
      <HeaderContainer>
        <HeaderLogo logo={Logo} />
        <HeaderLinkGroup>
          <HeaderLink link='/' text='Inicio' />
          <HeaderLink link='/about' text='Conheça a CR3' />
          <HeaderDropdown/>
          <HeaderLink link='/news' text='Conteúdo' isActive />
          <HeaderLink link='/faq' text='Dúvidas' />
          <HeaderButton link='/contact' text='Entre em Contato' />
        </HeaderLinkGroup>
      </HeaderContainer>

      {/* News */}
      <div data-aos="fade-up" className='pt-20'>
        <NewsGrid />
      </div>

      {/* FORM */}
      <div data-aos="fade-up">
        <SectionContainer padding="large" >
          <FormSection/>
        </SectionContainer>
      </div>
    </>
  )
}