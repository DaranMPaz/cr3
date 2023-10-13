import { Banner } from "@/components/section/Banner"
import FAQAccordion from "@/components/accordeon/Accordeon"
import ContactComponent from "@/components/contact/ContactComponent"

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FAQAccordion />
      <Banner banner={3} />
      <ContactComponent />
    </div>
  )
}