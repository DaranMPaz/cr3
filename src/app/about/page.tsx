import Logo from "../../../public/logo-colored-light.png";
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinkGroup,
  HeaderLogo,
  HeaderButton,
  HeaderDropdown,
} from "@/app/components/header";
import {
  ButtonCtaRight,
  ImageBackground,
  PaddingContainer,
  SectionContainer,
  TextSection,
} from "../components/section";
import Banner1 from "../../../public/home/impact.png";

export default function About() {
  return (
    <>
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

      {/* BANNER */}
      <SectionContainer padding="none">
        <PaddingContainer>
          <TextSection
            titleType="display"
            br
            title1="Quem Somos"
            paragraph="Na CR3 Auditoria, nossa história é moldada por nossa paixão por excelência e nosso compromisso com a sustentabilidade."
          />
          <ImageBackground src={Banner1} alt="Banner1" />
        </PaddingContainer>
      </SectionContainer>
    </>
  );
}
