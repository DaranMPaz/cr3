import ContactBanner from '@/components/contact/contact'
import { Banner } from "@/components/section/banner"
import FAQAccordion from "@/components/accordeon/accordeon"

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FAQAccordion />
      <Banner banner={3} />
      <ContactBanner />
    </div>
  )
}