'use client'
import { useEffect } from "react"
import SectionImageContainer from "../section/imageContainer"
import Padding from "../section/padding"
import { TextSection } from "../section/textSection"
import ButtonCtaRight from "./ButtonCta"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function CtaBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-services-home">
        <Padding>
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" br title1="Impacto" title2="sustentável" paragraph="Nossa abordagem não se limita às auditorias; é sobre criar um ciclo de logística reversa mais eficaz e responsável, que beneficia o meio ambiente, a sociedade e as organizações."/>
          <ButtonCtaRight link="/audit" text="saiba mais" />
        </Padding>
      </SectionImageContainer>
    </div>
  )
}