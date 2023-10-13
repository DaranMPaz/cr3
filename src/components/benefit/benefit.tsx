'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import TextContent from '../section/TextContent'
import benefit from '../../../public/como-beneficia-img.svg'
import BoxedSection from './BoxedSection'
import Image from 'next/image'
import Container from '../section/SectionContainer'

export default function Benefit(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding="large">
        <BoxedSection>
          <TextContent gap="gap-6" color="text-theme-red-500" titleType="heading" br title1="Como Beneficia Você?" paragraph="Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável."/>
          <Image alt="About" src={benefit} width={552} height={248}/>
        </BoxedSection>
      </Container>
    </div>
  )
}