import { ContactSection } from '@/components/contactForm'
import { AuditBanner, AuditMetodology, AuditSection1, AuditSection2, AuditTitle } from '@/components/auditComponents'

export default function Audit() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <AuditTitle />
      <AuditSection1 />
      <AuditSection2 />
      <AuditMetodology />
      <AuditBanner />
      <ContactSection />
    </div>
  )
}