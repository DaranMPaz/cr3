'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import TextContent from './TextContent'

export default function BannerComponent({banner}:{banner:0|1|2|3}){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  const bannerImg = ['bg-theme-cta1', 'bg-theme-cta2', 'bg-theme-cta3', 'bg-theme-cta4']

  return(
    <div data-aos="fade-up">
      <div className={`flex justify-between p-0 md:p-24 mt-18 items-center w-full max-w-[1600px] mx-auto relative h-[700px] ${`${bannerImg[banner]}`} bg-no-repeat bg-cover`}>
        <div className="flex justify-between items-center px-12 md:px-24 py-12 md:py-[240px] w-full relative mx-auto">
          <TextContent gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Fale Conosco" link="/contact" />
        </div>
      </div>
    </div>
  )
}