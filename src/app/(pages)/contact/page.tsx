import ContactBanner from '@/components/contact/Contact'
import Other from '@/components/contact/Other'
import ContactSection from '@/components/contact/Contact'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactSection />
      <Other />
      <ContactBanner />
    </div>
  )
}