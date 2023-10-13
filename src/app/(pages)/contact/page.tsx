import Other from '@/components/contact/Other'
import ContactComponent from '@/components/contact/ContactComponent'
import { Banner } from '@/components/section/Banner'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactComponent />
      <Other />
      <Banner banner={3} />
    </div>
  )
}