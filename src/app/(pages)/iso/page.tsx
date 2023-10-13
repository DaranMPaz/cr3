'use client'
import Metodology from '@/components/Metodology'
import BoxSection from '@/components/BoxSection'
import { HiDocumentSearch } from 'react-icons/hi'
import Iso2Img from '../../../../public/iso-2-img.jpg'
import person2 from '../../../../public/person/person-2.png'
import Container from '@/components/section/SectionContainer'
import ContactComponent from '@/components/contact/ContactComponent'
import HeroSectionComponent from '@/components/HeroSectionComponent'
import BannerComponent from '@/components/BannerComponent'
import TextContent from '@/components/TextContent'
import Benefit from '../../../components/benefit/BenefitComponent'
import ImageBlock from '@/components/ImageBlock'

export default function Iso() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <HeroSectionComponent 
        image="bg-theme-services-iso" 
        title="Em breve"
        title2="Auditoria ISO"
        paragraph="A certificação ISO é altamente valorizada e muitas vezes é um requisito para fazer negócios em mercados internacionais. A CR3 está sempre empenhada em proporcionar soluções de excelência para seus clientes, e estamos empolgados em anunciar que em breve estaremos oferecendo um novo serviço de Auditoria ISO."  
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent 
          gap="gap-6" 
          color="text-theme-blue-500" 
          titleType="heading" 
          br
          title1="Padrões Técnicos" 
          title2=" para uma ampla variedade de indústrias e setores" 
          paragraph="A ISO (Organização Internacional de Normalização) é uma entidade global que estabelece padrões técnicos para uma ampla variedade de indústrias e setores. Esses padrões são projetados para garantir a qualidade, segurança e eficiência de produtos e serviços em todo o mundo. A certificação ISO é altamente valorizada e muitas vezes é um requisito para fazer negócios em mercados internacionais." 
          paragraph2='A Auditoria ISO é um processo crítico que verifica se uma organização atende aos requisitos estabelecidos pelos padrões ISO relevantes. Essa certificação demonstra o compromisso de uma empresa com a qualidade e a melhoria contínua e pode aumentar a confiança dos clientes, parceiros e partes interessadas.'
        />
        <ImageBlock onLeft image={person2} alt="Homem Segurando uma pasta" color="bg-theme-red-500">
          <HiDocumentSearch />
        </ImageBlock>
      </Container>

      <BoxSection 
        image={Iso2Img} 
        alt='Audirotia ISO'
        emphasis='Aprimorar a qualidade'
        title='de seus produtos ou serviços'
        paragraph='Estamos ansiosos para lançar nosso novo serviço de Auditoria ISO em breve, e acreditamos que ele será um recurso valioso para organizações em busca de certificação ISO. Se você deseja aprimorar a qualidade de seus produtos ou serviços, demonstrar seu compromisso com a excelência ou expandir seus horizontes no mercado global, a CR3 está aqui para ajudar.'
        finaly='Fique atento para obter mais informações sobre o lançamento deste serviço e entre em contato conosco para saber como podemos ajudar sua organização a alcançar o sucesso ISO.'
      />

      <Metodology />
      <Benefit />
      <BannerComponent banner={2} />
      <ContactComponent />
    </div>
  )
}