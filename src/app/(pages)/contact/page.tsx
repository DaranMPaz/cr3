import ContactBanner from '@/components/contact/contact'
import Other from '@/components/contact/other'
import ContactSection from '@/components/contact/contact'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactSection />
      <Other />
      <ContactBanner />
    </div>
  )
}