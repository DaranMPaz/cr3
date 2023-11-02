'use client'
import BannerComponent from "@/components/BannerComponent";
import Diferential from "@/components/Diferential";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import ImageBlock from "@/components/ImageBlock";
import Metodology from "@/components/Metodology";
import TextContent from "@/components/TextContent";
import ContactComponent from "@/components/contact/ContactComponent";
import Container from "@/components/section/SectionContainer";
import { MdWorkspacePremium } from "react-icons/md";
import person6 from '../../../../public/person/person-6.png';

export default function About() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <HeroSectionComponent
        image="bg-theme-about"
        title="QUEM SOMOS"
        paragraph="Na CR3 Auditoria, nossa história é moldada por nossa paixão por excelência e nosso compromisso com a sustentabilidade."
      />

      {/* SESSÃO TEXTO IMAGEM */}
      <Container padding="large">
        <TextContent gap="gap-6" color="text-theme-blue-500" titleType="heading" hasCta title1="Pioneirismo" title2=" em Auditorias de Terceira Parte" paragraph="Somos pioneiros na condução de auditorias de terceira parte para sistemas de logística reversa de embalagens, impulsionando a conformidade, a eficiência e a responsabilidade ambiental." cta="ENTRE EM CONTATO" link="/contact" />
        <ImageBlock onLeft image={person6} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
          <MdWorkspacePremium />
        </ImageBlock>
      </Container>

      <Diferential />
      <Metodology />
      <BannerComponent banner={1} />
      <ContactComponent />
    </div>
  );
}
