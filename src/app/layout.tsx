import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  FooterContainer,
  FooterColumn,
  FooterCta,
  FooterLink,
  FooterLogo,
  FooterSocial,
} from "./components/footer";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CR3 Auditoria",
  description:
    "Auditoria de Terceira Parte para Logística Reversa de Embalagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={PlusJakartaSans.className}>
        <main className="bg-theme-gray2-900">{children}</main>
        <FooterContainer>
          <FooterLogo />

          <FooterColumn title="Menu">
            <FooterLink link="/" text="Inicio" />
            <FooterLink link="/about" text="Conheça a CR3" />
            <FooterLink link="/audit" text="Auditoria de Terceira Parte" />
            <FooterLink link="/iso" text="Auditoria ISO" />
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
      </body>
    </html>
  );
}
