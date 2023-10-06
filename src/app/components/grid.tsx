import { SectionContainer, TextSection } from '@/app/components/section'
import { FlexYContainer } from "./container";
import Image from 'next/image';

import { postList } from '../../utils/posts';
import { newsList } from '../../utils/news';
import Link from 'next/link';

export function NewsGrid() {
  return(
    <>
    <SectionContainer padding="large" >
      <FlexYContainer gap>

        <TextSection color="text-theme-red-500" gap="gap-2" titleType="heading" title1="fique por dentro" paragraph="Esclarecendo suas Dúvidas e explicando como a CR3 pode ajudar sua empresa" />
        
        <div className='grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1'>
          { postList.map((post) => (     
              <div className="bg-theme-gray-800" key={post.id}>
                <div className="object-cover">
                  <Image className="w-full" width={512} height={512} objectFit='contain' src={`/news/${post.image}`} alt="Diferencial"></Image>
                </div>
                <div className="flex flex-col gap-4 w-full p-6 text-left">
                  <h3 className="uppercase text-theme-gray-50 text-xl font-bold">{post.title}</h3>
                  <div className='flex flex-col gap-1'>
                    <p className="text-theme-gray-400">{post.shortDescription}</p>
                    <Link href={`news/posts/${post.id}`} className='text-theme-yellow-700 font-bold'>[ continuar lendo ]</Link>
                  </div>
                </div>
              </div>
          )) }
        </div>

        <TextSection color="text-theme-red-500" gap="gap-2" titleType="heading" title1="noticias" />

        <div className='grid lg:grid-cols-4 gap-12 md:grid-cols-2 sm:grid-cols-1'>
          { newsList.map((news) => (     
              <div className="bg-theme-gray-800" key={news.id}>
                <div className="flex flex-col gap-4 w-full p-6 text-left">
                  <h4 className="uppercase text-theme-gray-50 text-sm font-bold">{news.title}</h4>
                  <div className="flex gap-1">
                    <p className="text-theme-gray-400">Fonte:</p>
                    <p className="text-theme-gray-400">{news.origin}</p>
                  </div>
                  <Link href={news.link} target='_blank' className='text-theme-yellow-700 font-bold'>[ acessar conteúdo ]</Link>
                </div>
              </div>
          )) }
        </div>

      </FlexYContainer>
    </SectionContainer>
    </>
  )
}