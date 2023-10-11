'use client'
import Audit1Img from '../../public/audit-1-img.png'
import Audit2Img from '../../public/audit-2-img.jpg'
import Metodologia1 from "../../public/metodologia-1.jpg"
import Metodologia2 from "../../public/metodologia-2.jpg"
import Metodologia3 from "../../public/metodologia-3.jpg"
import Metodologia4 from "../../public/metodologia-4.jpg"
import Benefi3Img from "../../public/como-beneficia-img.svg"
import { HiDocumentSearch } from 'react-icons/hi'

import { BoxedSection, CenteredSection, ImageSection, PaddingContainer, SectionContainer, SectionImageContainer, TextSection } from '@/components/section'
import { HorizontalCard, HorizontalCardContent, HorizontalCardImage, TimeLineCard, TimelineDivider } from '@/components/card'
import { FlexContainer } from '@/components/container'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ImageAnimated } from "./imageAnimated";

export function AuditTitle(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-services-audit" icon>
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" br title1="Compromisso" title2='com as normas' paragraph="Asseguramos que cada detalhe seja tratado com total consonância com as legislações vigentes."/>
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}

export function AuditSection1(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" title1="Auditoria" title2=" de Terceira Parte" paragraph="Nosso serviço de Auditoria de Terceira Parte é projetado para atender às necessidades únicas das entidades gestoras, modelos individuais de logística reversa e empresas aderentes." paragraph2='Avaliamos os processos, verificamos a precisão dos registros e asseguramos a adesão às regulamentações.' />
        <ImageAnimated onLeft image={Audit1Img} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
          <HiDocumentSearch />
        </ImageAnimated>
      </SectionContainer>
    </div>
  )
}

export function AuditSection2(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding='large'>
        <HorizontalCard>
          <HorizontalCardImage image={Audit2Img} alt='Audotoria para sistemas de logística reversa de embalagens' />
          <HorizontalCardContent title1='para sistemas de' title2='logística reversa de embalagens' paragraph1='Realizamos auditorias minuciosas nas entidades gestoras e modelos individuais de logística reversa de embalagens para avaliar se estão em conformidade com os requisitos definidos nas legislações vigentes.' paragraph2='O processo de auditoria também contempla as empresas aderentes, verificando se estão reportando de maneira precisa e transparente a quantidade real de embalagens colocadas no mercado brasileiro.' paragraph3='Essa abordagem assegura a confiabilidade das informações e promove a integridade do ciclo de logística reversa.' />
        </HorizontalCard>
      </SectionContainer>
    </div>
  )
}

export function AuditMetodology(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <CenteredSection title="Nossa Metodologia de Trabalho" paragraph="Compromisso com a Excelência e Resultados" icon >
        <FlexContainer>
          <TimeLineCard image={Metodologia1} title="Definição de escopo" paragraph="Definição do escopo da auditoria, considerando estados de atuação, número de operadores homologados e relação de empresas aderentes ao sistema."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia2} title="Planejamento Estratégico" paragraph="Desenvolvimento de um plano estratégico personalizado."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia3} title="Execução Precisa" paragraph="Execução das auditorias de acordo com as particularidades de cada unidade da federação."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia4} title="Entrega de relatório" paragraph="Avaliação final e entrega da declaração de auditoria de terceira parte quanto ao cumprimento das metas propostas e dos requisitos descritos nas legislações."/>
        </FlexContainer>
      </CenteredSection>
    </div>
  )
}

export function AuditBenefit3(){

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

export function AuditBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-cta3">
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Entre em Contato" link="/contact" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}