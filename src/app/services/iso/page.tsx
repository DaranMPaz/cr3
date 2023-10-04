import { BoxedSection, CenteredSection, ImageSection, PaddingContainer, SectionContainer, SectionImageContainer, TextSection } from '@/app/components/section'
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'
import { HorizontalCard, HorizontalCardContent, HorizontalCardImage, TimeLineCard, TimelineDivider } from '@/app/components/card'
import Logo from '../../../../public/logo-colored-light.png'
import Iso1Img from '../../../../public/iso-1-img.png'
import Iso2Img from '../../../../public/iso-2-img.png'
import Metodologia1 from "../../../../public/metodologia-1.png"
import Metodologia2 from "../../../../public/metodologia-2.png"
import Metodologia3 from "../../../../public/metodologia-3.png"
import Metodologia4 from "../../../../public/metodologia-4.png"
import Benefi3Img from "../../../../public/como-beneficia-img.png";
import { FlexContainer } from '@/app/components/container'

export default function Audit() {
  return (
    <>
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link='/' text='Inicio' />
        <HeaderLink link='/about' text='Conheça a CR3' />
        <HeaderDropdown/>
        <HeaderLink link='/news' text='Conteúdo' />
        <HeaderLink link='/faq' text='Dúvidas' />
        <HeaderButton link='/contact' text='Entre em Contato' />
      </HeaderLinkGroup>
    </HeaderContainer>

    {/* BANNER */}
    <SectionImageContainer image="bg-theme-services-iso">
      <PaddingContainer>
        <TextSection titleType="display" br title1="Auditoria ISO" title2='Organização Internacional de Normalização' paragraph="Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis."/>
      </PaddingContainer>
    </SectionImageContainer>

    {/* SOBRE */}
    <SectionContainer padding="large">
      <ImageSection src={Iso1Img} alt="Auditoria" height={512} width={512} />
      <TextSection titleType="display" title1="Auditoria ISO" title2=" (Organização Internacional de Normalização)" paragraph="Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis." paragraph2='Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis.' />
    </SectionContainer>

    {/* COMPLEMENTO */}
    <SectionContainer padding='large'>
      <HorizontalCard>
        <HorizontalCardContent title1='subtítulo' paragraph1='Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis.' paragraph2='Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis.' />
        <HorizontalCardImage image={Iso2Img} alt='Audotoria ISO' />
      </HorizontalCard>
    </SectionContainer>

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

    {/* BENEFICIO 3 */}
      <SectionContainer padding="large">
        <BoxedSection>
          <TextSection titleType="heading" br title1="Como Beneficia Você?" paragraph="Você garante a conformidade com as legislações, fortalece a transparência e a confiança com as partes interessadas, e contribui para o desenvolvimento sustentável."/>
          <ImageSection src={Benefi3Img} alt="About" height={248} width={552} />
        </BoxedSection>
      </SectionContainer>

    {/* BANNER */}
    <SectionImageContainer image="bg-theme-cta3">
      <PaddingContainer>
        <TextSection hasCta titleType="display" br title1="Vamos Conectar" title2="e Transformar Juntos" paragraph="Quer saber mais sobre como podemos fortalecer a integridade dos seus negócios? Entre em contato conosco!" cta="Entre em Contato" link="/contact" />
      </PaddingContainer>
    </SectionImageContainer>

    </>
  )
}