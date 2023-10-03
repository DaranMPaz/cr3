import Logo from '../../../../public/logo-colored-light.png'
import { HeaderContainer, HeaderLink, HeaderLinkGroup, HeaderLogo, HeaderButton, HeaderDropdown } from '@/app/components/header'

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

      <h1>Auditoria de Terceira Parte</h1>

    </>
  )
}