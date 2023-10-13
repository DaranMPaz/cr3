'use client'
import Image from 'next/image'
import Link from 'next/link'
import TextContent from '@/components/section/TextContent'
import { FlexYContainer } from '../Container'
import { postList } from '../../utils/posts'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Container from '../section/SectionContainer'

export default function NewsGrid2() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up" className='pt-12'>
    <Container padding="large" >
      <FlexYContainer gap>

        <TextContent color="text-red-400" gap="gap-2" titleType="heading" title1="fique por dentro" paragraph="Esclarecendo suas Dúvidas e explicando como a CR3 pode ajudar sua empresa" />
        
        <div className='grid lg:grid-cols-4 gap-6 md:gap-8 md:grid-cols-2 sm:grid-cols-1'>

          { postList.map(((post) => (     
              <div className="bg-zinc-800 md:origin-center md:hover:scale-105 transition" key={post.id}>

                <div className="object-cover">
                  <Image className="w-full" width={512} height={248} src={`${post.image}`} alt="Diferencial"></Image>
                </div>

                <div className="flex flex-col gap-4 w-full p-6 text-left">

                  <h3 className="upperase text-zinc-100 text-sm md:text-sm font-bold uppercase tracking-wide leading-10">{post.title}</h3>

                  <div className='flex flex-col gap-1 justify-between'>
                    <p className="text-zinc-400 text-sm md:text-sm pb-2">{post.shortDescription}</p>
                    <Link href={`/news/posts/${post.id}`} className='text-yellow-500'>[ continuar lendo ]</Link>
                  </div>

                </div>
              </div>

          )))}
        </div>

      </FlexYContainer>
    </Container>
    </div>
  )
}