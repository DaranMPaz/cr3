import { AboutBanner, AboutDiferentials, AboutHeader, AboutMetodology, AboutSection, AboutTitle } from "../components/aboutComponents";
import { ContactSection } from "../components/contactForm";

export default function About() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <AboutHeader />
      <AboutTitle />
      <AboutSection />
      <AboutDiferentials />
      <AboutMetodology />
      <AboutBanner />
      <ContactSection />
    </div>
  );
}
