'use client'
import Image from 'next/image'
import BannerComponent from '@/components/BannerComponent'
import ImageBlock from '@/components/ImageBlock'
import TextContent from '@/components/TextContent'
import CtaBanner from '@/components/banner/CtaBanner'
import Benefit from '@/components/benefit/BenefitComponent'
import HomeCarousel from '@/components/carousel/HomeCarousel'
import ContactComponent from '@/components/contact/ContactComponent'
import { IsoIconsV2 } from '@/components/header/IsoIcons'
import Container from '@/components/section/SectionContainer'
import { ImCheckmark } from 'react-icons/im'
import { MdStar } from 'react-icons/md'
import { RiFileList2Fill } from 'react-icons/ri'
import person1 from '../../public/person/person-1.png'
import person3 from '../../public/person/person-3.png'
import person4 from '../../public/person/person-4.png'
import PortariaImage from '../../public/assets/home/new-portaria-image.png'
import PortariaCross from '../../public/assets/home/new-portaria-cross.png'
import SocialProofSection from '@/components/SocialProofSection'

export default function Home() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <HomeCarousel />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent
          gap="gap-6"
          color="text-theme-blue-500"
          titleType="heading" hasCta
          title1="dedicação"
          title2=" em moldar o futuro da auditoria de terceira parte no Brasil."
          paragraph="Desde a nossa fundação, temos sido pioneiros na promoção da conformidade e integridade nos sistemas de logística reversa."
          cta="CONHEÇA A CR3"
          link="/about"
        />
        <ImageBlock onLeft image={person1} alt="Homem segurando um tablet" color="bg-red-500">
          <ImCheckmark />
        </ImageBlock>
      </Container>

      {/* SESSÃO PORTARIA */}
      <Container padding='large' reverse>
        <div className="relative animate-idle-slow">
          <Image src={PortariaCross} alt='Mais' width={180} height={180} quality={100} priority className='absolute bottom-4 -left-8 animate-idle'/>
          <Image src={PortariaImage} alt='Nova Portaria' width={512} height={512} quality={100} priority/>
        </div>
        <TextContent
          gap="gap-6"
          color="text-theme-blue-500"
          titleType='heading'
          title1='Nova PORTARIA'
          title2=' IMASUL, DE 21 DE AGOSTO DE 2024.'
          paragraph='Estamos em conformidade com todos os requisitos da nova PORTARIA IMASUL N. 1447, que define as diretrizes para a auditoria de terceira parte, inclusive já tendo relatórios aprovados no estado.'
        />
      </Container>

      <CtaBanner 
        background='bg-home-manufacturers-banner'
        title='AUDITORIA'
        subtitle='PARA FABRICANTES E IMPORTADORES'
        content='Análise completa, incluindo avaliação de embalagens, pesagem precisa, quantificação de retornos e verificação de notas fiscais, trazendo segurança e confiabilidade para a sua autodeclaração de embalagens.'
        buttonCta='saiba mais'
        buttonRoute='/manufacurers'
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent
          gap="gap-6"
          color="text-theme-blue-500"
          titleType="heading"
          title1="Conformidade"
          title2=" Garantida"
          paragraph="Asseguramos que cada detalhe seja tratado com total consonância com as legislações vigentes."
          paragraph2="Nossa abordagem meticulosa e especializada significa que você pode confiar em nossas avaliações rigorosas, para garantir que seus processos de logística reversa estejam em estrita conformidade com as regulamentações."
        />
        <ImageBlock onLeft image={person4} alt="Mulher de braços cruzados" color="bg-red-500">
          <RiFileList2Fill />
        </ImageBlock>
      </Container>

      <CtaBanner 
        background='bg-home-audit-banner'
        title='IMPACTO'
        subtitle='SUSTENTÁVEL'
        content='Nossa abordagem não se limita às auditorias; é sobre criar um ciclo de logística reversa mais eficaz e responsável, que beneficia o meio ambiente, a sociedade e as organizações.'
        buttonCta='saiba mais'
        buttonRoute='/audit'
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container reverse padding="large">
        <ImageBlock onRight image={person3} alt="Mulher de braços cruzados" color="bg-yellow-500">
          <MdStar />
        </ImageBlock>
        <div className='flex flex-col gap-6'>
          <TextContent
            gap="gap-6"
            color="text-theme-blue-500"
            br
            titleType="heading"
            title1="Excelência: "
            title2=" Padrões Elevados, Resultados Sólidos"
            paragraph="Nossa equipe é formada por auditores líderes nas renomadas ISO’s 9001, 14001 e 45001, o que nos permite oferecer aos nossos clientes uma avaliação abrangente dos seus processos. Excelência técnica é a base de tudo o que fazemos. Temos profundo conhecimento sobre o mercado de logística reversa e os mecanismos de auditoria necessários."
            paragraph2="Identificamos oportunidades de melhoria, auxiliamos a mitigar riscos e ajudamos nossos clientes a alcançarem níveis superiores de eficiência e conformidade. Entendemos os detalhes intrínsecos do setor e temos a experiência necessária para oferecer resultados sólidos e confiáveis."
          />
          <IsoIconsV2 />
        </div>
      </Container>

      <Benefit 
        title='Como Beneficia Você?'
        content='Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável.'
      />
      <SocialProofSection/>
      <BannerComponent banner={0} />
      <ContactComponent />
    </div>
  );
}
