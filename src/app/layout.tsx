import "@/app/globals.css";
import { Providers } from "@/app/providers";
import Copyright from "@/components/footer/Copyright";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CR3 Auditoria",
  description:
    "Auditoria de Terceira Parte para Sistemas de Logística Reversa de Embalagens",
  keywords:
    "cr3, cr3 auditoria, auditoria, auditoria de terceira parte, logística reversa, auditoria de logística, auditoria de logística reversa, créditos de reciclagem, crédito de reciclagem, auditoria de reciclagem, auditoria de entidade gestora, auditoria de sistemas de logística reversa, auditoria de sistemas de logística reversa de embalagens, empresas, gestão, compliance, auditoria ISO, consultoria ISO, ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 45001, ISO 45000, SGI, sistema de gestão integrado, sistemas de gestão integrada, consultor ISO, consultora ISO, modelo coletivo, auditoria de modelo coletivo, auditoria de modelo individual, modelo invividual, entidade gestora de logística reversa, eureciclo, pragma, brpolen, ilog, esg cred, eu reciclo, central de custódia, cempre, instituo cempre, rever, instituto rever, políticas de compliance, consultoria, treinamento, gestao de riscos, matriz de riscos, diagnóstico sistêmico, ambiente de controle, efetividade, integridade organizacional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`dark text-foreground bg-theme-texture object-center ${PlusJakartaSans.className}`}>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <Providers>
          <main>
            <Header />
            {children}
            <Footer />
            <Copyright />
          </main>
        </Providers>
      </body>
    </html>
  );
}
