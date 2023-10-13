import Contact from '@/components/contact/Contact'
import Grid from '@/components/news/Grid'

export default function News() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <Grid />
      <Contact />
    </div>
  )
}