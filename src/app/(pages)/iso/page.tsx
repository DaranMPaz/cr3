'use client'
import Metodology from '@/components/Metodology'
import Contact from '@/components/contact/Contact'
import BoxSection from '@/components/boxSection/BoxSection'
import TextContent from '@/components/section/TextContent'
import { ImageAnimated } from '@/components/ImageAnimated'
import { HiDocumentSearch } from 'react-icons/hi'
import Iso2Img from '../../../../public/iso-2-img.jpg'
import person2 from '../../../../public/person/person-2.png'
import { Banner } from '@/components/section/Banner'
import TitleSection from '@/components/titleSection/TitleSection'
import Container from '@/components/section/SectionContainer'

export default function Iso() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <TitleSection 
        image="bg-theme-services-iso" 
        title="Auditoria ISO"
        title2="Organização Internacional de Normalização"
        paragraph="Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis." 
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent 
          gap="gap-6" 
          color="text-theme-blue-500" 
          titleType="heading" 
          br
          title1="Auditoria ISO" 
          title2=" Organização Internacional de Normalização" 
          paragraph="Nada ainda..." 
        />
        <ImageAnimated onLeft image={person2} alt="Homem Segurando uma pasta" color="bg-theme-red-500">
          <HiDocumentSearch />
        </ImageAnimated>
      </Container>

      <BoxSection 
        image={Iso2Img} 
        alt='Audirotia ISO'
        title='ISO'
        emphasis='Auditoria'
        paragraph='Nada ainda...'
      />

      <Metodology />
      <Banner banner={2} />
      <Contact />
    </div>
  )
}