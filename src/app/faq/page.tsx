import { FaqBanner, FaqContent, FaqHeader } from "../components/FaqComponents";
import { ContactSection } from "../components/contactForm";

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FaqHeader />
      <FaqContent />
      <FaqBanner />
      <ContactSection />
    </div>
  )
}