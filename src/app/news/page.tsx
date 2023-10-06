import { ContactSection } from "../components/contactForm";
import { NewsContent, NewsHeader } from "../components/newsComponents";

export default function News() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <NewsHeader />
      <NewsContent />
      <ContactSection />
    </div>
  )
}