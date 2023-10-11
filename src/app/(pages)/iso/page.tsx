import { ContactSection } from '@/components/contactForm'
import { IsoBanner, IsoMetodology, IsoSection1, IsoSection2, IsoTitle } from '@/components/IsoComponents'

export default function Iso() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <IsoTitle />
      <IsoSection1 />
      <IsoSection2 />
      <IsoMetodology />
      <IsoBanner />
      <ContactSection />
    </div>
  )
}