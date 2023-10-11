'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Container from '../section/container'
import { HorizontalCard, HorizontalCardContent, HorizontalCardImage } from '../card'

export default function BoxSection({image, alt, title, emphasis, paragraph, complement, finaly}:{
  image:any,
  alt: string,
  title: string,
  emphasis: string,
  paragraph: string,
  complement?: string,
  finaly?: string,
}){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Container padding='large'>
        <HorizontalCard>
          <HorizontalCardImage image={image} alt={alt} />
          <HorizontalCardContent title1={emphasis} title2={title} paragraph1={paragraph} paragraph2={complement} paragraph3={finaly} />
        </HorizontalCard>
      </Container>
    </div>
  )
}