import { ContactSection } from '@/app/components/contactForm'
import { IsoBanner, IsoMetodology, IsoSection1, IsoSection2, IsoTitle, IsotHeader } from '@/app/components/IsoComponents'

export default function Iso() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <IsotHeader />
      <IsoTitle />
      <IsoSection1 />
      <IsoSection2 />
      <IsoMetodology />
      <IsoBanner />
      <ContactSection />
    </div>
  )
}