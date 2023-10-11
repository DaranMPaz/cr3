'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Container from '../section/container'
import { TextSection } from '../section/textSection'
import { ImageSection } from '../section'
import benefit from '../../../public/como-beneficia-img.svg'
import BoxedSection from './boxedSection'

export default function Benefit(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding="large">
        <BoxedSection>
          <TextSection gap="gap-6" color="text-theme-red-500" titleType="heading" br title1="Como Beneficia Você?" paragraph="Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável."/>
          <ImageSection src={benefit} alt="About" height={248} width={552} />
        </BoxedSection>
      </Container>
    </div>
  )
}