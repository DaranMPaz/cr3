import Logo from '../../../public/logo-colored-light.png'
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'

export default function Faq() {
  return (
    <>
    <HeaderContainer>
      <HeaderLogo logo={Logo} />
      <HeaderLinkGroup>
        <HeaderLink link='/' text='Inicio' />
        <HeaderLink link='/about' text='Conheça a CR3'/>
        <HeaderDropdown/>
        <HeaderLink link='/news' text='Conteúdo'/>
        <HeaderLink link='/faq' text='Dúvidas' isActive />
        <HeaderButton link='/contact' text='Entre em Contato' />
      </HeaderLinkGroup>
    </HeaderContainer>

      <h1>Perguntas Frequentes</h1>

    </>
  )
}