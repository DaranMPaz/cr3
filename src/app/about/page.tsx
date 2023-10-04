import Logo from "../../../public/logo-colored-light.png";
import About2Img from "../../../public/about-2-img.png"
import Diferential1 from "../../../public/diferencial-1-img.png"
import Diferential2 from "../../../public/diferencial-2-img.png"
import Diferential3 from "../../../public/diferencial-3-img.png"
import Metodologia1 from "../../../public/metodologia-1.png"
import Metodologia2 from "../../../public/metodologia-2.png"
import Metodologia3 from "../../../public/metodologia-3.png"
import Metodologia4 from "../../../public/metodologia-4.png"
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown,} from "@/app/components/header";
import { SectionImageContainer, PaddingContainer, SectionContainer, TextSection, ImageSection, CenteredSection} from "@/app/components/section";
import { GridContainer, FlexContainer } from "@/app/components/container";
import { VerticalCard, TimeLineCard, TimelineDivider } from "@/app/components/card"

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
      <SectionImageContainer image="bg-theme-about">
        <PaddingContainer>
          <TextSection titleType="display" br title1="Quem Somos" paragraph="Na CR3 Auditoria, nossa história é moldada por nossa paixão por excelência e nosso compromisso com a sustentabilidade."/>
        </PaddingContainer>
      </SectionImageContainer>

      {/* SOBRE */}
      <SectionContainer padding="large">
        <TextSection titleType="heading" hasCta title1="Pioneirismo" title2=" em Auditorias de Terceira Parte" paragraph="Somos pioneiros na condução de auditorias de terceira parte para sistemas de logística reversa de embalagens, impulsionando a conformidade, a eficiência e a responsabilidade ambiental." cta="ENTRE EM CONTATO" link="/contact" />
        <ImageSection src={About2Img} alt="About" height={512} width={512} />
      </SectionContainer>

      {/* DIFERENCIAIS */}
      <CenteredSection title="Nossos Diferenciais" paragraph="Compromisso, Inovação e Resultados" >
        <GridContainer cols="grid-cols-3" gap>
          <VerticalCard image={Diferential1} title1="Abordagem" title2="Inovadora" paragraph1="A inovação está no cerne de tudo o que fazemos." paragraph2="Somos pioneiros na aplicação de metodologias de auditoria avançadas, permitindo-nos oferecer insights valiosos e recomendações acionáveis aos nossos clientes."/>
          <VerticalCard image={Diferential2} title1="Compromisso" title2="com a Excelência" paragraph1="Temos o compromisso com a excelência." paragraph2="Cada auditoria que realizamos é conduzida com atenção meticulosa aos detalhes, garantindo a conformidade rigorosa e a confiabilidade dos dados."/>
          <VerticalCard image={Diferential3} title1="Resultados" title2="Mensuráveis" paragraph1="Nossas sugestões impulsionam conformidade, sustentabilidade e competitividade." paragraph2="Não medimos nosso sucesso apenas pela conclusão das auditorias, mas pelos resultados reais que proporcionamos aos nossos clientes."/>
        </GridContainer>
      </CenteredSection>

      {/* METODOLOGIA */}
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

      {/* BANNER */}
      <SectionImageContainer image="bg-theme-cta2">
        <PaddingContainer>
          <TextSection hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Fale Conosco" link="/contact" />
        </PaddingContainer>
      </SectionImageContainer>
    </>
  );
}
