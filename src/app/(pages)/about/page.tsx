'use client'
import { MdWorkspacePremium } from "react-icons/md";
import person6 from '../../../../public/person/person-6.png'
import TitleSection from "@/components/titleSection/TitleSection";
import Diferential from "@/components/Diferential";
import Metodology from "@/components/Metodology";
import { Banner } from "@/components/section/Banner";
import TextContent from "@/components/section/TextContent";
import Container from "@/components/section/SectionContainer";
import ImageAnimated from "@/components/ImageAnimated";
import ContactComponent from "@/components/contact/ContactComponent";

export default function About() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <TitleSection 
        image="bg-theme-about" 
        title="Quem Somos" 
        paragraph="Na CR3 Auditoria, nossa história é moldada por nossa paixão por excelência e nosso compromisso com a sustentabilidade." 
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent gap="gap-6" color="text-theme-blue-500" titleType="heading" hasCta title1="Pioneirismo" title2=" em Auditorias de Terceira Parte" paragraph="Somos pioneiros na condução de auditorias de terceira parte para sistemas de logística reversa de embalagens, impulsionando a conformidade, a eficiência e a responsabilidade ambiental." cta="ENTRE EM CONTATO" link="/contact" />
          <ImageAnimated onLeft image={person6} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
            <MdWorkspacePremium />
          </ImageAnimated>
      </Container>

      <Diferential />
      <Metodology />
      <Banner banner={1} />
      <ContactComponent />
    </div>
  );
}
