'use client'
import Metodology from '@/components/Metodology'
import Contact from '@/components/contact/Contact'
import BoxSection from '@/components/boxSection/BoxSection'
import { Banner } from '@/components/section/Banner'
import Container from '@/components/section/Container'
import TextContent from '@/components/section/TextContent'
import { ImageAnimated } from '@/components/ImageAnimated'
import { HiDocumentSearch } from 'react-icons/hi'
import person6 from '../../../../public/person/person-5.png'
import Benefit from '@/components/benefit/Benefit'
import Audit2Img from '../../../../public/audit-2-img.jpg'
import TitleSection from '@/components/titleSection/TitleSection'

export default function Audit() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <TitleSection 
        image="bg-theme-services-audit" 
        title="Compromisso"
        title2="com as normas"
        paragraph="Asseguramos que cada detalhe seja tratado com total consonância com as legislações vigentes." 
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent 
          gap="gap-6" 
          color="text-theme-blue-500" 
          titleType="heading" 
          br
          title1="Pioneirismo" 
          title2=" em Auditorias de Terceira Parte" 
          paragraph="Somos pioneiros na condução de auditorias de terceira parte para sistemas de logística reversa de embalagens, impulsionando a conformidade, a eficiência e a responsabilidade ambiental." 
        />
        <ImageAnimated onLeft image={person6} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
          <HiDocumentSearch />
        </ImageAnimated>
      </Container>

      <BoxSection 
        image={Audit2Img} 
        alt='Audotoria para sistemas de logística reversa de embalagens'
        emphasis='para sistemas de'
        title='logística reversa de embalagens'
        paragraph='Realizamos auditorias minuciosas nas entidades gestoras e modelos individuais de logística reversa de embalagens para avaliar se estão em conformidade com os requisitos definidos nas legislações vigentes.'
        complement='O processo de auditoria também contempla as empresas aderentes, verificando se estão reportando de maneira precisa e transparente a quantidade real de embalagens colocadas no mercado brasileiro.'
        finaly='Essa abordagem assegura a confiabilidade das informações e promove a integridade do ciclo de logística reversa.'
      />

      <Metodology />
      <Benefit />
      <Banner banner={2} />
      <Contact />
    </div>
  )
}