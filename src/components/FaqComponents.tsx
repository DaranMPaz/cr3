'use client'
import { FaqAccordeon } from '@/components/accordeon'
import { PaddingContainer, SectionImageContainer, TextSection } from '@/components/section'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

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