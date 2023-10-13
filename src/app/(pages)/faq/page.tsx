import ContactBanner from '@/components/contact/Contact'
import { Banner } from "@/components/section/Banner"
import FAQAccordion from "@/components/accordeon/Accordeon"

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FAQAccordion />
      <Banner banner={3} />
      <ContactBanner />
    </div>
  )
}