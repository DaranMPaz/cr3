'use client'
import HeroSectionComponent from '@/components/HeroSectionComponent'
import ContactComponent from '@/components/contact/ContactComponent'
import TrustImage from '../../../../public/assets/manufacturers/trust-image.png'
import ReadyImage from '../../../../public/assets/manufacturers/ready-image.png'
import Image from 'next/image'
import ProccessImage1 from '../../../../public/assets/manufacturers/proccess-1-image.png'
import ProccessImage2 from '../../../../public/assets/manufacturers/proccess-2-image.png'
import ProccessImage3 from '../../../../public/assets/manufacturers/proccess-3-image.png'
import ProccessImage4 from '../../../../public/assets/manufacturers/proccess-4-image.png'
import ProccessImage5 from '../../../../public/assets/manufacturers/proccess-5-image.png'
import Container from '@/components/section/SectionContainer'
import TextContent from '@/components/TextContent'
import ImageBlock from '@/components/ImageBlock'
import { FaShield } from "react-icons/fa6";
import BannerComponent from '@/components/BannerComponent'
import SocialProofSection from '@/components/SocialProofSection'
import Benefit from '@/components/benefit/BenefitComponent'
import MovementImage from '@/components/MovementImage'
import ShieldImage from '../../../../public/assets/manufacturers/Shield-image.svg'

export default function Manufacturers() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <HeroSectionComponent
        image="bg-home-manufacturers-banner"
        title="AUDITORIA"
        title2="PARA FABRICANTES E IMPORTADORES"
        paragraph="Ajudamos a sua empresa a calcular as embalagens colocadas no mercado, trazendo mais segurança e confiabilidade para a sua Autodeclaração de Embalagens."
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent
          gap="gap-6"
          color="text-theme-blue-500"
          titleType="heading"
          title1="Confiabilidade"
          title2=" para a autodeclaração de embalagens"
          paragraph="Além da garantia da empresa estar contribuindo com o meio ambiente, recuperando a quantidade exata de embalagens que colocou no mercado durante o ano-base analisado, este serviço traz segurança e confiabilidade para a autodeclaração de embalagens, proteção contra alegações de greenwashing, proteção à reputação das marcas e da empresa."
          titleExtraStyle='pb-8 border-b border-zinc-800 mb-4'
        />
        <ImageBlock onLeft image={TrustImage} alt="Homem segurando um tablet" color="bg-red-500">
          <FaShield />
        </ImageBlock>
      </Container>


      {/* SOBRE O PROCESSO */}
      <div data-aos="fade-up" className="w-full gap-12 my-12">

        <div className='pb-8 border-b border-zinc-800 mx-auto flex justify-center'>
          <h2 className='text-2xl md:text-4xl leading-snug md:leading-tight w-full max-w-2xl text-theme-blue-500 uppercase font-bold text-center'>como funciona o processo</h2>
        </div>

        <Container padding="none">
          <MovementImage image={ProccessImage1} alignment='right' />
          <TextContent
            gap="gap-6"
            color="text-theme-red-500"
            titleType="subheading"
            title1="Caracterização de Embalagens"
            paragraph="Realizamos uma avaliação detalhada das embalagens para identificar com precisão os materiais utilizados na sua fabricação."
            paragraph2="Avaliamos todas as embalagens em que os produtos entram em contato, embalagens primárias, secundárias e terciárias, e todas as suas composições, como lacres, adesivos, rótulos e etiquetas de identificação."
            extraStyle="px-6 md:px-0 mt-12"
          />
        </Container>

        <Container padding="none" reverse>
          <TextContent
            gap="gap-6"
            color="text-theme-red-500"
            titleType="subheading"
            title1="Pesagem com Balança de Precisão"
            paragraph="Realizamos medições exatas das embalagens para assegurar total precisão nos dados de autodeclaração."
            paragraph2='O processo inclui a pesagem de todas as embalagens/SKUs em triplicata, permitindo definir com precisão o peso e as métricas corretas para a declaração.'
            extraStyle="px-6 md:px-0 mt-12"
          />
          <MovementImage image={ProccessImage2} alignment='left' />
        </Container>

        <Container padding="none">
          <MovementImage image={ProccessImage3} alignment='right' />
          <TextContent
            gap="gap-6"
            color="text-theme-red-500"
            titleType="subheading"
            title1="Quantificação do Retorno de Embalagens"
            paragraph="Fazemos o monitoramento e contabilização das embalagens retornáveis para otimizar sua logística."
            paragraph2='Se sua empresa possui um programa próprio de logística reversa, ou utiliza embalagens retornáveis nos seus produtos, avaliamos a coleta de produtos retornáveis e verificamos se as quantidades retornadas estão de acordo com o reportado, garantindo a correta contabilização.'
            extraStyle="px-6 md:px-0 mt-12"
          />
        </Container>

        <Container padding="none" reverse>
          <TextContent
            gap="gap-6"
            color="text-theme-red-500"
            titleType="subheading"
            title1="Avaliação de Notas Fiscais e Dados de Vendas"
            paragraph="Avaliamos as vendas de cada SKU através de notas fiscais e dados comerciais. Dessa forma, sabemos exatamente o número de produtos vendidos em cada estado durante o ano-base analisado."
            extraStyle="px-6 md:px-0 mt-12"
          />
          <MovementImage image={ProccessImage4} alignment='left' />
        </Container>

        <Container padding="none">
          <MovementImage image={ProccessImage5} alignment='right' />
          <TextContent
            gap="gap-6"
            color="text-theme-red-500"
            titleType="subheading"
            title1="Cálculo Final"
            paragraph="Após coletar todas as informações necessárias, nós realizamos o cálculo, com precisão, da correta quantidade de embalagens colocadas no mercado durante o ano-base analisado, em cada unidade da federação."
            extraStyle="px-6 md:px-0 mt-12"
          />
        </Container>

      </div>

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large" reverse>
        <TextContent
          hasCta
          cta='Entre em contato'
          gap="gap-6"
          color="text-theme-blue-500"
          titleType="heading"
          title1="Está pronto"
          title2=" para proteger as suas marcas?"
          paragraph="Manter a integridade e a confiança da sua marca é crucial em um mercado cada vez mais competitivo. A proteção da marca vai além da qualidade dos produtos; ela reflete um compromisso com o meio ambiente e com a confiança dos seus consumidores."
          paragraph2='Nossos serviços de auditoria asseguram que suas embalagens e processos produtivos promovam a sustentabilidade, fortalecendo a credibilidade da sua empresa e reforçando a confiança de seus clientes.'
          titleExtraStyle='pb-8 border-b border-zinc-800 mb-4'
        />
        <div className="relative animate-idle-slow">
          <Image src={ShieldImage} alt='Mais' width={250} height={250} quality={100} priority className='absolute bottom-32 -left-8 animate-idle'/>
          <Image src={ReadyImage} alt='Nova Portaria' width={512} height={512} quality={100} priority/>
        </div>
      </Container>

      <Benefit 
        title='Como Beneficia Você?'
        content='Você assegura a proteção da sua marca, fortalece a segurança de seus processos e aumenta a confiabilidade junto às partes interessadas.'
        description='Além disso, contribui para o desenvolvimento sustentável, promovendo práticas que beneficiam tanto a sua empresa quanto o meio ambiente, reforçando a transparência e confiança com todos os envolvidos.'
      />
      <SocialProofSection/>
      <BannerComponent banner={2} />
      <ContactComponent />
    </div>
  )
}