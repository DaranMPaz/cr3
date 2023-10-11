import { AboutBanner, AboutDiferentials, AboutMetodology, AboutSection, AboutTitle } from "@/components/aboutComponents";
import { ContactSection } from "@/components/contactForm";

export default function About() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <AboutTitle />
      <AboutSection />
      <AboutDiferentials />
      <AboutMetodology />
      <AboutBanner />
      <ContactSection />
    </div>
  );
}
