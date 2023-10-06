import { ContactSection } from '@/app/components/contactForm'
import { AuditBanner, AuditMetodology, AuditSection1, AuditSection2, AuditTitle, AudittHeader } from '@/app/components/auditComponents'

export default function Audit() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <AudittHeader />
      <AuditTitle />
      <AuditSection1 />
      <AuditSection2 />
      <AuditMetodology />
      <AuditBanner />
      <ContactSection />
    </div>
  )
}