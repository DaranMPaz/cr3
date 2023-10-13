'use client'
import HomeCarousel from '@/components/Carousel/HomeCarousel'
import { Banner } from '@/components/Section/Banner'
import ContactSection from '@/components/Contact/Contact'
import Benefit from '@/components/Benefit/Benefit';
import Container from '@/components/Section/Container';
import TextContent from '@/components/Section/TextContent';
import { ImageAnimated } from '@/components/ImageAnimated';
import { MdStar  } from 'react-icons/md';
import { RiFileList2Fill } from 'react-icons/ri';
import { ImCheckmark  } from 'react-icons/im';
import CtaBanner from '@/components/Banner/CtaBanner'
import person1 from '../../public/person/person-1.png'
import person4 from '../../public/person/person-4.png'
import person3 from '../../public/person/person-3.png'

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
          paragraph="Desde a nossa fundação, temos sido pioneiros na promoção da conformidade e integridade nos sistemas de logística reversa de embalagens." 
          cta="CONHEÇA A CR3" 
          link="/about" 
        />
        <ImageAnimated onLeft image={person1} alt="Homem segurando um tablet" color="bg-red-500">
          <ImCheckmark  />
        </ImageAnimated>
      </Container>

      <CtaBanner />

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
          <ImageAnimated onLeft image={person4} alt="Mulher de braços cruzados" color="bg-red-500">
            <RiFileList2Fill  />
          </ImageAnimated>
      </Container>

      {/* SESSÃO TEXTO IMAGEM */}
      <Container reverse padding="large">
        <ImageAnimated onRight image={person3} alt="Mulher de braços cruzados" color="bg-yellow-500">
          <MdStar />
        </ImageAnimated>
        <TextContent 
          gap="gap-6"
          color="text-theme-blue-500"
          br
          titleType="heading"
          title1="Excelência: "
          title2=" Padrões Elevados, Resultados Sólidos"
          paragraph="Excelência técnica é a base de tudo o que fazemos. Temos profundo conhecimento sobre o mercado de logística reversa de embalagens e os mecanismos de auditoria necessários.."
          paragraph2="Entendemos os detalhes intrínsecos do setor e temos a experiência necessária para oferecer resultados sólidos e confiáveis.."
        />
      </Container>

      <Benefit />
      <Banner banner={0} />
      <ContactSection />
    </div>
  );
}
