'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import TextContent from "../TextContent"
import ButtonCta from "./ButtonCta"

export default function CtaBanner(
  {
    background,
    title,
    subtitle,
    content,
    buttonRoute,
    buttonCta
  }:{
    background: string | 'bg-theme-services-home',
    title: string | 'IMPACTO',
    subtitle: string | 'SUSTENTÁVEL',
    content?: string | 'Nossa abordagem não se limita às auditorias; é sobre criar um ciclo de logística reversa mais eficaz e responsável, que beneficia o meio ambiente, a sociedade e as organizações.',
    buttonRoute?: string | '/audit',
    buttonCta?: string | 'saiba mais'
  }
) {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div data-aos="fade-up">
      <div className={`flex justify-between p-0 md:p-24 mt-18 items-center w-full max-w-[1600px] mx-auto relative h-[700px] bg-center ${background} bg-no-repeat bg-cover`}>
        <div className="flex justify-between items-center px-12 md:px-24 py-12 md:py-[240px] w-full relative mx-auto">
          <TextContent gap="gap-6" color="text-theme-blue-500" titleType="display" br title1={title} title2={subtitle} paragraph={content} />
          <ButtonCta link={`${buttonRoute}`} text={`${buttonCta}`} />
        </div>
      </div>
    </div>
  )
}