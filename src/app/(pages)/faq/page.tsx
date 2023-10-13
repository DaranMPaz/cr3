import ContactBanner from '@/components/Contact/Contact'
import { Banner } from "@/components/Section/Banner"
import FAQAccordion from "@/components/Accordeon/Accordeon"

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FAQAccordion />
      <Banner banner={3} />
      <ContactBanner />
    </div>
  )
}