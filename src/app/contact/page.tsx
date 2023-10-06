import { ContactSection } from '@/app/components/contactForm'
import { ContactBanner, ContactHeader, ContactOthers } from '@/app/components/ContactComponents'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactHeader />
      <ContactSection />
      <ContactOthers />
      <ContactBanner />
    </div>
  )
}