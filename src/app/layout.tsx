'use client'
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/app/components/footer";

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
      <body className={`bg-theme-texture bg-theme-gray2-900 ${PlusJakartaSans.className}`}>
        <main className="dark text-foreground">
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
