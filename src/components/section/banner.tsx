'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import SectionImageContainer from './imageContainer'
import Padding from './padding'
import { TextSection } from './textSection'

export function Banner({banner}:{banner:0|1|2|3}){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  const bannerImg = ['bg-theme-cta1', 'bg-theme-cta2', 'bg-theme-cta3', 'bg-theme-cta4']

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image={`${bannerImg[banner]}`}>
        <Padding>
          <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Fale Conosco" link="/contact" />
        </Padding>
      </SectionImageContainer>
    </div>
  )
}