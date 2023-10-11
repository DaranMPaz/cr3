import Image from 'next/image'
import Link from 'next/link'
import { SectionContainer, TextSection } from '@/components/section'
import { FlexYContainer } from './container'
import { postList } from '../utils/posts'
import { newsList } from '../utils/news'

export function NewsGrid() {

  return(
    <>
    <SectionContainer padding="large" >
      <FlexYContainer gap>

        <TextSection color="text-red-400" gap="gap-2" titleType="heading" title1="fique por dentro" paragraph="Esclarecendo suas Dúvidas e explicando como a CR3 pode ajudar sua empresa" />
        
        <div className='grid lg:grid-cols-3 gap-6 md:gap-12 md:grid-cols-2 sm:grid-cols-1'>
          { postList.map((post => (     
              <div className="bg-zinc-800" key={post.id}>
                <div className="object-cover">
                  <Image className="w-full" width={512} height={512} src={`/news/${post.image}`} alt="Diferencial"></Image>
                </div>
                <div className="flex flex-col gap-4 w-full p-6 text-left">
                  <h3 className="upperase text-zinc-100 text-lg md:text-xl font-bold">{post.title}</h3>
                  <div className='flecx flex-col gap-1'>
                    <p className="text-zinc-400 text-sm md:text-base pb-2">{post.shortDescription}</p>
                    <Link href={`news/posts/${post.id}`} className='text-yellow-500'>[ continuar lendo ]</Link>
                  </div>
                </div>
              </div>
          )))}
        </div>

        <TextSection color="text-red-400" gap="gap-2" titleType="heading" title1="noticias" />

        <div className='grid lg:grid-cols-4 gap-6 md:gap-12 md:grid-cols-2 sm:grid-cols-1'>
          { newsList.map((news) => (     
              <div className="bg-zinc-800" key={news.id}>
                <div className="flex flex-col gap-4 w-full p-6 text-left">
                  <h4 className="uppercase text-zinc-100 text-sm font-bold leading-relaxed">{news.title}</h4>
                  <div className="flex gap-1 text-zinc-400 text-sm">
                    <p>Fonte:</p>
                    <p>{news.origin}</p>
                  </div>
                  <Link href={news.link} target='_blank' className='text-yellow-500 text-sm'>[ acessar conteúdo ]</Link>
                </div>
              </div>
          )) }
        </div>

      </FlexYContainer>
    </SectionContainer>
    </>
  )
}