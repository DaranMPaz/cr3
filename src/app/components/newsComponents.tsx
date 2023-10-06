'use client'

import Logo from "../../../public/logo-colored-light.png";

import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown,} from "@/app/components/header";
import { NewsGrid } from '@/app/components/grid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function NewsHeader(){
  return(
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link='/' text='Inicio' />
        <HeaderLink link='/News' text='Conheça a CR3' />
        <HeaderDropdown/>
        <HeaderLink link='/news' text='Conteúdo' isActive />
        <HeaderLink link='/faq' text='Dúvidas' />
        <HeaderButton link='/contact' text='Entre em Contato' />
      </HeaderLinkGroup>
    </HeaderContainer>
  )
}

export function NewsContent(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up" className='pt-20'>
      <NewsGrid />
    </div>
  )
}