'use client'
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { postList } from '@/utils/posts'
import { IoChevronDownSharp } from 'react-icons/io5';
import { MdChevronLeft } from 'react-icons/md';
import { NewsGrid } from '@/components/grid'

export default function Post({ params }: { params: { slug: string } }) {
  
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  const postId = params.slug
  const selectedPost = postList.find(post => post.id === postId)

  if (selectedPost) {
    return (
      <div>
        <div className='relative pt-16 md:pt-20'>
          <Image src={`/news/${selectedPost.image}`} alt={selectedPost.title} width={1600} height={900} className='object-fit w-full h-[320px] md:h-[720px] md:object-cover' />
          <IoChevronDownSharp className="text-zinc-100 text-2xl animate-bounce-slow absolute bottom-12 md:bottom-28 left-1/2 -translate-x-1/2" />
          <div className='absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 md:p-12 w-full max-w-3xl md:max-w-3xl flex flex-col gap-4 mt-4'>
            <h1 className='text-xl font-bold md:text-5xl md:leading-tight text-red-400'>{selectedPost.title}</h1>
            <p className='text-zinc-100 leading-relaxed text-sm md:text-base'>{selectedPost.shortDescription}</p>
          </div>
        </div>
        <div className='w-full bg-zinc-800'>
          <div className='w-full max-w-3xl p-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
            <Link className='text-yellow-400 uppercase pb-12 hover:text-red-400 transition flex gap-2 items-center' href={'/news'}>
              <MdChevronLeft size={24} />
              Voltar
            </Link>
            <h2 className='text-lg font-bold md:text-2xl md:leading-tight text-red-400'>{selectedPost.subtitle1}</h2>
            <p className='leading-loose'>{selectedPost.content1}</p>
          </div>
          <div className='w-full max-w-3xl p-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
            <h2 className='text-lg font-bold md:text-2xl md:leading-tight text-red-400'>{selectedPost.subtitle2}</h2>
            <p className='leading-loose'>{selectedPost.content2}</p>
            <Link className='text-yellow-400 uppercase pt-12 hover:text-red-400 transition flex gap-2 items-center' href={'/news'}>
              <MdChevronLeft size={24} />
              Voltar
            </Link>
          </div>
        </div>
        <NewsGrid/>
      </div>
    );
  } else {
    return (
      <div className='w-full bg-zinc-800 pt-16 md:pt-20'>
        <div className='w-full max-w-3xl p-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
          <h1 className='text-lg font-bold md:text-2xl md:leading-tight text-red-400'>Conteúdo não encontrado!</h1>
          <p className='leading-loose'>Volte para a página de posts para acessar as publicações disponíveis.</p>
          <Link className='text-yellow-400 uppercase pb-12 hover:text-red-400 transition flex gap-2 items-center' href={'/news'}>
            <MdChevronLeft size={24} />
            Voltar
          </Link>
        </div>
      </div>
    )}
  }