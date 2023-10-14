import "@/app/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {Providers} from "@/app/providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Copyright from "@/components/footer/Copyright";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CR3 Auditoria",
  description:
    "Auditoria de Terceira Parte para Logística Reversa de Embalagens",
  keywords: 
    "cr3, recife, empresas, gestão, compliance, auditoria, ebooks, políticas de compliance, consultoria, treinamento, gestao de riscos, matriz de riscos, due diligence , diagnóstico sistêmico, ambiente de controle, efetividade, integridade organizacional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`dark text-foreground bg-theme-texture object-center ${PlusJakartaSans.className}`}>
        <Providers>
          <main>
            <Header/>
            {children}
            <Footer/>
            <Copyright/>
          </main>
        </Providers>
      </body>
    </html>
  );
}
