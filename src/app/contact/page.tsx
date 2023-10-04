import Logo from '../../../public/logo-colored-light.png'
import ContactImg from '../../../public/contact-img.png'
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'
import { ContactSection, PaddingContainer, SectionImageContainer, TextSection } from '@/app/components/section'

export default function Contact() {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo logo={Logo} />
        <HeaderLinkGroup>
          <HeaderLink link='/' text='Inicio' />
          <HeaderLink link='/about' text='Conheça a CR3'/>
          <HeaderDropdown/>
          <HeaderLink link='/news' text='Conteúdo' />
          <HeaderLink link='/faq' text='Dúvidas' />
          <HeaderButton link='/contact' text='Entre em Contato'/>
        </HeaderLinkGroup>
      </HeaderContainer>

      {/* OUTRAS FORMAS DE CONTATO */}
      <ContactSection img={ContactImg} alt='contato' title='OUTRAS FORMAS DE CONTATO' mail='contato@cr3auditoria.com.br' phone='+11 9 1234 5678' />

      {/* BANNER */}
      <SectionImageContainer image="bg-theme-cta4">
        <PaddingContainer>
          <TextSection hasCta titleType="display" title1="Descubra Nossos Serviços" title2="e Transforme Seu Negócio" paragraph="Queremos ajudar você a trazer conformidade, integridade e transparência para o seu negócio." cta="Conheça nossos serviços" link="/services/audit" />
        </PaddingContainer>
      </SectionImageContainer>

    </>
  )
}