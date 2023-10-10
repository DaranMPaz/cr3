import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo-colored-light.png'
import Instagram from '../../public/icons/Instagram-img.png'
import Facebook from '../../public/icons/Facebook-img.png'
import Linkedin from '../../public/icons/Linkedin-img.png'

export function Footer() {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterColumn title="Menu">
        <FooterLink link="/" text="Inicio" />
        <FooterLink link="/about" text="Conheça a CR3" />
        <FooterLink link="/services/audit" text="Auditoria de Terceira Parte" />
        <FooterLink link="/services/iso" text="Auditoria ISO" />
        <FooterLink link="/news" text="Conteúdo" />
      </FooterColumn>
      <FooterColumn title="Ajuda">
        <FooterLink link="/faq" text="Perguntas Frequêntes" />
        <FooterLink link="/contact" text="Contato" />
      </FooterColumn>
      <FooterColumn title="Termos">
        <FooterLink link="/" text="Termos Legais" />
        <FooterLink link="/" text="Política de Privacidade" />
        <FooterLink link="/" text="Termos Legais" />
        <FooterLink
          isBlank
          link="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
          text="LGPD"
        />
      </FooterColumn>
      <FooterCta />
    </FooterContainer>
  )
}

export function FooterLink({text, link, isBlank}:{
  text:string,
  link:string,
  isBlank?:boolean
}) {
  return(
   isBlank ?  
   <li className='text-sm h-max leading-6 cursor-pointer tracking-wide hover:text-theme-red-500'>
      <Link target='_blank' href={`${link}`}>{`${text}`}</Link>
    </li>
  :
    <li className='text-sm h-max leading-6 cursor-pointer tracking-wide hover:text-theme-red-500'>
      <Link href={`${link}`}>{`${text}`}</Link>
    </li>
  )
}

export function FooterColumn({children, title}:{
  children:React.ReactNode,
  title:string
}) {
  return(
    <div className='flex flex-col gap-3'>
      <h6 className='text-theme-gray-50 font-bold'>{title}</h6>
      <ul className='list-none flex flex-col gap-3'>
        {children}
      </ul>
    </div>
  )
}

export function FooterSocial({icon, link, alt}:{
  icon:any,
  link: String,
  alt:string
}) {
  return(
    <li><Link href={`${link}`}><Image src={icon} alt={`${alt}`} width={24} height={24}/></Link></li>
  )
}

export function FooterLogo() {
  return(
    <div className='flex flex-col gap-6 max-w-[170px]'>
      
      <span className='text-xs'>Compromisso Ambiental, Auditoria de Excelência</span>
    </div>
  )
}

export function FooterCta() {
  return(
    <div className='flex flex-col justify-between h-full min-h-[150px]'>
      
      <ul className='flex items-center gap-6 justify-end'>
        <FooterSocial alt='Linkedin' icon={Linkedin} link={"/"} />
        <FooterSocial alt='Facebook' icon={Facebook} link={"/"} />
        <FooterSocial alt='Instagram' icon={Instagram} link={"/"} />
      </ul>
    </div>
  )
}

export function FooterContainer({children}:{children:React.ReactNode}) {
  return(
    <footer className='bg-theme-gray2-900 text-theme-gray2-300 py-12 px-24 flex justify-center items-center'>
      <div className='flex justify-between items-start w-full max-w-[1600px] h-full'>
      {children}
      </div>
    </footer>
  )
}