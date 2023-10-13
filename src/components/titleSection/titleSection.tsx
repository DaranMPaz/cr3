'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import SectionImageContainer from '../section/ImageContainer'
import Padding from '../section/Padding'
import TextContent from '../section/TextContent'

export default function TitleSection({title, title2, paragraph, image}:{
  image:any,
  title?: string,
  title2?: string,
  paragraph?: string,
}){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image={`${image}`} icon>
        <Padding>
          <TextContent gap="gap-6" color="text-theme-blue-500" titleType="display" br title1={title} title2={title2} paragraph={paragraph}/>
        </Padding>
      </SectionImageContainer>
    </div>
  )
}