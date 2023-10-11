import { ContactSection } from '@/components/contactForm'
import { ContactBanner, ContactOthers } from '@/components/contactComponents'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactSection />
      <ContactOthers />
      <ContactBanner />
    </div>
  )
}