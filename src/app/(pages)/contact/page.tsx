import ContactBanner from '@/components/Contact/Contact'
import Other from '@/components/Contact/Other'
import ContactSection from '@/components/Contact/Contact'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactSection />
      <Other />
      <ContactBanner />
    </div>
  )
}