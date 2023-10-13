import Contact from '@/components/Contact/Contact'
import Grid from '@/components/News/Grid'

export default function News() {
  return (
    <div className="flex flex-col h-full text-zinc-100">
      <Grid />
      <Contact />
    </div>
  )
}