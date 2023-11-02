'use client'
import BoxSection from '@/components/BoxSection'
import HeroSectionComponent from '@/components/HeroSectionComponent'
import ImageBlock from '@/components/ImageBlock'
import { MetodologyIso } from '@/components/Metodology'
import TextContent from '@/components/TextContent'
import ContactComponent from '@/components/contact/ContactComponent'
import Container from '@/components/section/SectionContainer'
import { HiDocumentSearch } from 'react-icons/hi'
import Iso14001 from '../../../../public/iso/14001-bg.png'
import Iso45001 from '../../../../public/iso/45001-bg.png'
import Iso9001 from '../../../../public/iso/9001-bg.png'
import person2 from '../../../../public/person/person-2.png'

export default function Iso() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <HeroSectionComponent
        image="bg-theme-services-iso"
        title="CONSULTORIA"
        title2="ISO's 9001, 14001 E 45001."
        paragraph="A CR3 auditoria é especializada em fornecer serviços de consultoria personalizados para as normas ISO 9001, 14001 e 45001. Com uma equipe de especialistas altamente capacitados, estamos comprometidos em guiar as organizações na implementação eficaz desses sistemas de gestão."
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
          paragraph="Ao adotar as normas ISO 9001, 14001 e 45001, as empresas podem alcançar uma maior eficiência operacional, melhorar a satisfação dos clientes, reduzir impactos ambientais, garantir a saúde e segurança dos colaboradores, e demonstrar um compromisso inequívoco com a excelência e a responsabilidade corporativa."
          paragraph2='Conte conosco para ser seu parceiro na jornada rumo à excelência operacional e sustentabilidade.'
        />
        <ImageBlock onLeft image={person2} alt="Homem Segurando uma pasta" color="bg-theme-red-500">
          <HiDocumentSearch />
        </ImageBlock>
      </Container>

      <BoxSection
        image={Iso9001}
        alt='iso 9001'
        emphasis='ISO 9001'
        title='Melhoria da Qualidade dos Produtos/Serviços'
        paragraph='A ISO 9001 é essencial para melhorar a gestão e a satisfação dos clientes. Com um sistema de gestão adequado, sua empresa alcançará diferenciais competitivos, reconhecimento nacional e internacional, desenvolvimento dos colaboradores e qualidade total.'
        finaly='Além disso, a ISO 9001 proporcionará maior competitividade no mercado, otimização de processos e redução de custos, garantindo boas práticas de gestão e relacionamento com clientes e fornecedores.'
      />
      <BoxSection
        image={Iso14001}
        alt='iso 14001'
        emphasis='ISO 14001'
        title='GESTÃO AMBIENTAL DA SUA EMPRESA'
        paragraph='A ISO 14001 é essencial para o aprimoramento do sistema de gestão ambiental da sua empresa. Com a adoção deste sistema, você poderá identificar e controlar os impactos ambientais, cumprir regulamentos e leis ambientais, reduzir os riscos de danos e demonstrar o compromisso com a sustentabilidade.'
        finaly='Além disso, a ISO 14001 permitirá que sua empresa aumente a eficiência dos recursos, melhore sua imagem perante os stakeholders, promova a conscientização ambiental, ganhe uma vantagem competitiva no mercado e busque a inovação sustentável.'
      />
      <BoxSection
        image={Iso45001}
        alt='iso 45001'
        emphasis='ISO 45001'
        title='ambiente de trabalho seguro e saudável'
        paragraph='A ISO 45001 é fundamental para fornecer um ambiente de trabalho seguro e saudável em sua empresa. Ao adotar esse sistema de gestão de saúde ocupacional e segurança, você poderá identificar e controlar os riscos relacionados à saúde e segurança dos colaboradores, cumprir regulamentações e leis trabalhistas, reduzir acidentes e doenças ocupacionais, e promover uma cultura de segurança.'
        finaly='Além disso, a ISO 45001 ajudará a melhorar a reputação da sua empresa, demonstrando compromisso com a segurança dos colaboradores, fornecedores e clientes. Também permitirá uma gestão eficaz dos recursos humanos, redução de custos associados a acidentes e doenças ocupacionais, além de abrir portas para oportunidades de negócios que valorizam a segurança e a saúde dos trabalhadores.'
      />

      <MetodologyIso />
      <ContactComponent />
    </div>
  )
}