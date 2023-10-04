'use client'

import Logo from "../../public/logo-colored-light.png";
import AboutImg from "../../public/about-2-img.png";
import Benefi1Img from "../../public/beneficio-1-img.png";
import Benefi2Img from "../../public/beneficio-2-img.png";
import Benefi3Img from "../../public/como-beneficia-img.png";
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from "@/app/components/header";
import Carousel from "./components/carousel";
import { SectionImageContainer, ImageSection, TextSection, SectionContainer, BoxedSection, ImageBackground, PaddingContainer, ButtonCtaRight, FormSection, } from "./components/section";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      {/* CABEÇALHO */}
      <div data-aos="fade-up">
        <HeaderContainer>
          <HeaderLogo logo={Logo} />
          <HeaderLinkGroup>
            <HeaderLink link="/" text="Inicio" isActive />
            <HeaderLink link="/about" text="Conheça a CR3" />
            <HeaderDropdown />
            <HeaderLink link="/news" text="Conteúdo" />
            <HeaderLink link="/faq" text="Dúvidas" />
            <HeaderButton link="/contact" text="Entre em Contato" />
          </HeaderLinkGroup>
        </HeaderContainer>
      </div>

      {/* VIDEO */}
      <div data-aos="fade-up">
        <Carousel title1="Auditoria de Terceira Parte" title2="para sistemas de logística reversa de embalagens" paragraph="Especializada em logística reversa, a CR3 auditoria é pioneira em promover a conformidade no mercado de logística reversa e créditos de reciclagem do Brasil." cta="SAIBA MAIS" link="/services/audit" />
      </div>

      {/* SOBRE */}
      <div data-aos="fade-up">
        <SectionContainer padding="large">
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" hasCta title1="dedicação" title2="em moldar o futuro da auditoria de terceira parte no Brasil." paragraph="Desde a nossa fundação, temos sido pioneiros na promoção da conformidade e integridade nos sistemas de logística reversa de embalagens." cta="CONHEÇA A CR3" link="/about" />
          <ImageSection src={AboutImg} alt="About" height={512} width={512} />
        </SectionContainer>
      </div>

      {/* BANNER */}
      <div data-aos="fade-up">
        <SectionImageContainer image="bg-theme-services-home">
          <PaddingContainer>
            <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" br title1="Impacto" title2="sustentável" paragraph="Nossa abordagem não se limita às auditorias; é sobre criar um ciclo de logística reversa mais eficaz e responsável, que beneficia o meio ambiente, a sociedade e as organizações."/>
            <ButtonCtaRight link="/services/audit" text="saiba mais" />
          </PaddingContainer>
        </SectionImageContainer>
      </div>

      {/* BENEFICIO 1 */}
      <div data-aos="fade-up">
        <SectionContainer padding="large">
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" br title1="Conformidade" title2="Garantida" paragraph="Asseguramos que cada detalhe seja tratado com total consonância com as legislações vigentes." paragraph2="Nossa abordagem meticulosa e especializada significa que você pode confiar em nossas avaliações rigorosas, para garantir que seus processos de logística reversa estejam em estrita conformidade com as regulamentações."/>
          <ImageSection src={Benefi1Img} alt="About" height={512} width={512} />
        </SectionContainer>
      </div>

      {/* BENEFICIO 2 */}
      <div data-aos="fade-up">
        <SectionContainer padding="large">
          <ImageSection src={Benefi2Img} alt="About" height={512} width={512} />
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" br title1="Excelência:" title2="Padrões Elevados, Resultados Sólidos" paragraph="Excelência técnica é a base de tudo o que fazemos. Temos profundo conhecimento sobre o mercado de logística reversa de embalagens e os mecanismos de auditoria necessários." paragraph2="Entendemos os detalhes intrínsecos do setor e temos a experiência necessária para oferecer resultados sólidos e confiáveis."/>
        </SectionContainer>
      </div>

      {/* BENEFICIO 3 */}
      <div data-aos="fade-up">
        <SectionContainer padding="large">
          <BoxedSection>
            <TextSection gap="gap-6" color="text-theme-red-500" titleType="heading" br title1="Como Beneficia Você?" paragraph="Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável."/>
            <ImageSection src={Benefi3Img} alt="About" height={248} width={552} />
          </BoxedSection>
        </SectionContainer>
      </div>

      {/* BANNER */}
      <div data-aos="fade-up">
        <SectionImageContainer image="bg-theme-cta1">
          <PaddingContainer>
            <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Entre em contato" link="/contact" />
          </PaddingContainer>
        </SectionImageContainer>
      </div>

      {/* FORM */}
      <div data-aos="fade-up">
        <SectionContainer padding="large" >
            <FormSection/>
        </SectionContainer>
      </div>

    </div>
  );
}
