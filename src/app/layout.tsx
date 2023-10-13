import "@/app/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {Providers} from "@/app/providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
      <body className={`dark text-foreground bg-theme-texture object-center ${PlusJakartaSans.className}`}>
        <Providers>
          <main>
            <Header/>
            {children}
            <Footer/>
          </main>
        </Providers>
      </body>
    </html>
  );
}
