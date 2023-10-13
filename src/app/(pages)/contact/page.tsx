import Other from '@/components/contact/Other'
import ContactComponent from '@/components/contact/ContactComponent'
import BannerComponent from '@/components/BannerComponent'

export default function Contact() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <ContactComponent />
      <Other />
      <BannerComponent banner={3} />
    </div>
  )
}