'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import TextContent from './TextContent'
import { IoChevronDownSharp } from 'react-icons/io5'

export default function HeroSectionComponent({title, title2, paragraph, image}:{
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
      <div className={`flex justify-between p-0 md:p-24 mt-18 items-center w-full max-w-[1600px] mx-auto relative h-[700px] ${image} bg-no-repeat bg-cover`}>
        <div className="flex justify-between items-center px-12 md:px-24 py-12 md:py-[240px] w-full relative mx-auto">
          <TextContent gap="gap-6" color="text-theme-blue-500" titleType="display" br title1={title} title2={title2} paragraph={paragraph}/>
        </div>
        <IoChevronDownSharp className="text-zinc-100 text-2xl animate-bounce-slow absolute bottom-12 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  )
}