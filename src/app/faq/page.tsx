import { FaqBanner, FaqContent } from "@/components/FaqComponents";
import { ContactSection } from "@/components/contactForm";

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FaqContent />
      <FaqBanner />
      <ContactSection />
    </div>
  )
}