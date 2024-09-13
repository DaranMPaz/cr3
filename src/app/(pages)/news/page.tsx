import ContactComponent from '@/components/contact/ContactComponent'
import Grid from '@/components/news/Grid'
import SocialProofSection from '@/components/SocialProofSection'

export default function News() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <Grid amount={8} title='fique por dentro' subtitle='Esclarecendo suas dúvidas e explicando como a CR3 pode ajudar sua empresa' />
      <SocialProofSection/>
      <ContactComponent />
    </div>
  )
}