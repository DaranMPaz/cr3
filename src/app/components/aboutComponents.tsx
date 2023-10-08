'use client'

import Logo from "../../../public/logo-colored-light.png";
import About2Img from "../../../public/about-2-img.png"
import Diferential1 from "../../../public/diferencial-1.jpg"
import Diferential2 from "../../../public/diferencial-2.jpg"
import Diferential3 from "../../../public/diferencial-3.jpg"
import Metodologia1 from "../../../public/metodologia-1.jpg"
import Metodologia2 from "../../../public/metodologia-2.jpg"
import Metodologia3 from "../../../public/metodologia-3.jpg"
import Metodologia4 from "../../../public/metodologia-4.jpg"

import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown,} from "@/app/components/header";
import { SectionImageContainer, PaddingContainer, SectionContainer, TextSection, ImageSection, CenteredSection} from "@/app/components/section";
import { GridContainer, FlexContainer } from "@/app/components/container";
import { VerticalCard, TimeLineCard, TimelineDivider } from "@/app/components/card"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ImageAnimated } from "./imageAnimated";
import { MdWorkspacePremium } from "react-icons/md";

export function AboutHeader(){
  return(
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link="/" text="Inicio" />
        <HeaderLink link="/about" text="Conheça a CR3" isActive />
        <HeaderDropdown />
        <HeaderLink link="/news" text="Conteúdo" />
        <HeaderLink link="/faq" text="Dúvidas" />
        <HeaderButton link="/contact" text="Entre em Contato" />
      </HeaderLinkGroup>
    </HeaderContainer>
  )
}

export function AboutTitle(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-about" icon>
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" titleType="display" br title1="Quem Somos" paragraph="Na CR3 Auditoria, nossa história é moldada por nossa paixão por excelência e nosso compromisso com a sustentabilidade."/>
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}

export function AboutSection(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionContainer padding="large">
        <TextSection gap="gap-6" color="text-theme-blue-500" titleType="heading" hasCta title1="Pioneirismo" title2=" em Auditorias de Terceira Parte" paragraph="Somos pioneiros na condução de auditorias de terceira parte para sistemas de logística reversa de embalagens, impulsionando a conformidade, a eficiência e a responsabilidade ambiental." cta="ENTRE EM CONTATO" link="/contact" />
          <ImageAnimated onLeft image={About2Img} alt="Mulher segurando uma pasta" color="bg-theme-red-500">
            <MdWorkspacePremium />
          </ImageAnimated>
      </SectionContainer>
    </div>
  )
}

export function AboutDiferentials(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <CenteredSection title="Nossos Diferenciais" paragraph="Compromisso, Inovação e Resultados" >
        <GridContainer cols="grid-cols-3" gap>
          <VerticalCard image={Diferential1} title1="Abordagem" title2="Inovadora" paragraph1="A inovação está no cerne de tudo o que fazemos." paragraph2="Somos pioneiros na aplicação de metodologias de auditoria avançadas, permitindo-nos oferecer insights valiosos e recomendações acionáveis aos nossos clientes."/>
          <VerticalCard image={Diferential2} title1="Compromisso" title2="com a Excelência" paragraph1="Temos o compromisso com a excelência." paragraph2="Cada auditoria que realizamos é conduzida com atenção meticulosa aos detalhes, garantindo a conformidade rigorosa e a confiabilidade dos dados."/>
          <VerticalCard image={Diferential3} title1="Resultados" title2="Mensuráveis" paragraph1="Nossas sugestões impulsionam conformidade, sustentabilidade e competitividade." paragraph2="Não medimos nosso sucesso apenas pela conclusão das auditorias, mas pelos resultados reais que proporcionamos aos nossos clientes."/>
        </GridContainer>
      </CenteredSection>
    </div>
  )
}

export function AboutMetodology(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <CenteredSection title="Nossa Metodologia de Trabalho" paragraph="Compromisso com a Excelência e Resultados" icon >
        <FlexContainer>
          <TimeLineCard image={Metodologia1} title="Definição de escopo" paragraph="Definição do escopo da auditoria, considerando estados de atuação, número de operadores homologados e relação de empresas aderentes ao sistema."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia2} title="Planejamento Estratégico" paragraph="Desenvolvimento de um plano estratégico personalizado."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia3} title="Execução Precisa" paragraph="Execução das auditorias de acordo com as particularidades de cada unidade da federação."/>
          <TimelineDivider/>
          <TimeLineCard image={Metodologia4} title="Entrega de relatório" paragraph="Avaliação final e entrega da declaração de auditoria de terceira parte quanto ao cumprimento das metas propostas e dos requisitos descritos nas legislações."/>
        </FlexContainer>
      </CenteredSection>
    </div>
  )
}

export function AboutBanner(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <SectionImageContainer image="bg-theme-cta2">
        <PaddingContainer>
          <TextSection gap="gap-6" color="text-theme-blue-500" hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Fale Conosco" link="/contact" />
        </PaddingContainer>
      </SectionImageContainer>
    </div>
  )
}