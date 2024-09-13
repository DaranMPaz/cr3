'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import benefit from '../../../public/assets/home/benefit-image.png'
import BoxedSection from './BoxedSection'
import Image from 'next/image'
import Container from '../section/SectionContainer'
import TextContent from '../TextContent'

export default function Benefit(
  {
    title,
    content,
    description
  }:{
    title: string,
    content: string,
    description?: string
  }
){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding="large">
        <BoxedSection>
          <TextContent gap="gap-6" color="text-theme-red-500" titleType="heading" br title1={title} paragraph={content} paragraph2={description}/>
          <Image alt="About" src={benefit} width={512} height={268} quality={100} priority/>
        </BoxedSection>
      </Container>
    </div>
  )
}