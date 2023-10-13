import FAQAccordion from "@/components/accordeon/Accordeon"
import ContactComponent from "@/components/contact/ContactComponent"
import BannerComponent from "@/components/BannerComponent"

export default function Faq() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <FAQAccordion />
      <BannerComponent banner={3} />
      <ContactComponent />
    </div>
  )
}