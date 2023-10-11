import Contact from '@/components/contact/contact'
import Grid from '@/components/news/grid'

export default function News() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <Grid />
      <Contact />
    </div>
  )
}