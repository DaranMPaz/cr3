'use client'
import AboutImg from "../../public/sobre-img.png";
import Benefi1Img from "../../public/beneficio-1-img.png";
import Benefi2Img from "../../public/beneficio-2-img.png";
import Benefi3Img from "../../public/como-beneficia-img.svg";
import { MdStar } from "react-icons/md"
import { RiFileList2Fill } from "react-icons/ri"
import { ImCheckmark } from "react-icons/im"
import { BoxedSection, ButtonCtaRight, ImageSection, PaddingContainer, SectionContainer, SectionImageContainer, TextSection } from "./section";
import Carousel from "./carousel";
import { ImageAnimated } from "./imageAnimated";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function HomeAbout(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" hasCta title1="dedicação" title2="em moldar o futuro da auditoria de terceira parte no Brasil." paragraph="Desde a nossa fundação, temos sido pioneiros na promoção da conformidade e integridade nos sistemas de logística reversa de embalagens." cta="CONHEÇA A CR3" link="/about" />
        <ImageAnimated onLeft image={AboutImg} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
          <ImCheckmark />
        </ImageAnimated>
      </SectionContainer>
    </div>
  )
}

export function HomeBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-services-home">
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" br title1="Impacto" title2="sustentável" paragraph="Nossa abordagem não se limita às auditorias; é sobre criar um ciclo de logística reversa mais eficaz e responsável, que beneficia o meio ambiente, a sociedade e as organizações."/>
          <ButtonCtaRight link="/services/audit" text="saiba mais" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}

export function HomeBenefit1(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" br title1="Conformidade" title2="Garantida" paragraph="Asseguramos que cada detalhe seja tratado com total consonância com as legislações vigentes." paragraph2="Nossa abordagem meticulosa e especializada significa que você pode confiar em nossas avaliações rigorosas, para garantir que seus processos de logística reversa estejam em estrita conformidade com as regulamentações."/>
        <ImageAnimated onLeft image={Benefi1Img} alt="Mulher de braços cruzados" color="bg-theme-red-500">
          <RiFileList2Fill />
        </ImageAnimated>
      </SectionContainer>
    </div>
  )
}

export function HomeBenefit2(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <ImageAnimated onRight image={Benefi2Img} alt="Mulher de braços cruzados" color="bg-theme-yellow-800">
          <MdStar />
        </ImageAnimated>
        <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" br title1="Excelência:" title2="Padrões Elevados, Resultados Sólidos" paragraph="Excelência técnica é a base de tudo o que fazemos. Temos profundo conhecimento sobre o mercado de logística reversa de embalagens e os mecanismos de auditoria necessários." paragraph2="Entendemos os detalhes intrínsecos do setor e temos a experiência necessária para oferecer resultados sólidos e confiáveis."/>
      </SectionContainer>
    </div>
  )
}

export function HomeBenefit3(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <BoxedSection>
          <TextSection gap="gap-6" color="text-theme-red-500" titleType="heading" br title1="Como Beneficia Você?" paragraph="Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável."/>
          <ImageSection src={Benefi3Img} alt="About" height={248} width={552} />
        </BoxedSection>
      </SectionContainer>
    </div>
  )
}

export function HomeCta(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-cta1">
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Entre em contato" link="/contact" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}