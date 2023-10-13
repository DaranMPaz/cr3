'use client'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { postList } from '@/utils/posts'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BlogTile from '@/components/blog/BlogTitle';
import BlogContent from '@/components/blog/BlogContent';
import NewsComponent from '@/components/news/NewsComponent';
import NewsGrid2 from '@/components/news/Grid2';
import Image from 'next/image';
import { IoChevronDownSharp } from 'react-icons/io5';

export default function Post({ params }: { params: { slug: any } }) {
  
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  const postId = params.slug
  const selectedPost = postList.find(post => post.id === postId)

  if (selectedPost) {
    return (
      <div>
        <div className='relative pt-16 md:pt-20 transition' data-aos="fade-up">
          <Image 
            src={selectedPost.image} 
            alt={selectedPost.title} 
            width={1600} 
            height={900} 
            className='object-fit w-full h-[320px] md:h-[720px] md:object-cover brightness-[0.2]' 
          />
          <IoChevronDownSharp className="text-zinc-100 text-2xl animate-bounce-slow absolute bottom-12 md:bottom-28 left-1/2 -translate-x-1/2" />
          <div className='absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 md:p-12 w-full max-w-3xl 
          md:max-w-3xl flex flex-col gap-4 mt-4'>
            <Link className='p-2 bg-black bg-opacity-50 rounded-full w-max hover:bg-opacity-100 hover:text-yellow-500 transition' href={'/news'}>
              <MdChevronLeft size={24} />
            </Link>
            <h1 className='text-xl font-bold md:text-4xl md:leading-tight text-red-400'>{selectedPost.title}</h1>
            <p className='text-zinc-100 leading-relaxed text-sm md:text-base'>{selectedPost.title}</p>
          </div>
        </div>  

        <div className='w-full bg-zinc-800'>

          <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
            <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle}</h2>
            <p className='leading-loose'>{selectedPost.content}</p>
          </div>

          { selectedPost.content2 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle2}</h2>
              <p className='leading-loose'>{selectedPost.content2}</p>
            </div>
          }

          { selectedPost.content3 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle3}</h2>
              <p className='leading-loose'>{selectedPost.content3}</p>
            </div>
          }

          { selectedPost.content4 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle4}</h2>
              <p className='leading-loose'>{selectedPost.content4}</p>
            </div>
          }

          { selectedPost.content5 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle5}</h2>
              <p className='leading-loose'>{selectedPost.content5}</p>
            </div>
          }
          { selectedPost.content6 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle6}</h2>
              <p className='leading-loose'>{selectedPost.content6}</p>
            </div>
          }
          { selectedPost.content7 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle7}</h2>
              <p className='leading-loose'>{selectedPost.content7}</p>
            </div>
          }
          { selectedPost.content8 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle8}</h2>
              <p className='leading-loose'>{selectedPost.content8}</p>
            </div>
          }
          { selectedPost.content9 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle9}</h2>
              <p className='leading-loose'>{selectedPost.content9}</p>
            </div>
          }
          { selectedPost.content10 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle10}</h2>
              <p className='leading-loose'>{selectedPost.content10}</p>
            </div>
          }
          { selectedPost.content11 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle11}</h2>
              <p className='leading-loose'>{selectedPost.content11}</p>
            </div>
          }
          { selectedPost.content12 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle12}</h2>
              <p className='leading-loose'>{selectedPost.content12}</p>
            </div>
          }
          { selectedPost.content13 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle13}</h2>
              <p className='leading-loose'>{selectedPost.content13}</p>
            </div>
          }
          { selectedPost.content14 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle14}</h2>
              <p className='leading-loose'>{selectedPost.content14}</p>
            </div>
          }
          { selectedPost.content15 &&
            <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{selectedPost.subtitle15}</h2>
              <p className='leading-loose'>{selectedPost.content15}</p>
            </div>
          }

            <div className='max-w-2xl pt-16 px-12 mx-auto flex flex-col gap-6'>
              { selectedPost.references &&
                <div className='flex flex-col gap-4'>
                  <span className='uppercase text-zinc-400 font-bold pr-2'>Referências:</span>
                  <span className='text-zinc-400'>{selectedPost.references}:</span>
                </div>
              }
              { selectedPost.moreInfo && 
                <Link 
                  href={selectedPost.moreInfo}
                  className='text-yellow-400 uppercase pb-12 hover:text-red-400 transition flex gap-2 items-center text-sm'
                  target='_BLANK'> 
                    Saiba mais 
                    <MdChevronRight size={18} />
                </Link> }
              { selectedPost.moreInfo2 && 
                <Link 
                  href={selectedPost.moreInfo2}
                  className='text-yellow-400 uppercase pb-12 hover:text-red-400 transition flex gap-2 items-center text-sm'
                  target='_BLANK'> 
                    Saiba mais 
                    <MdChevronRight size={18} />
                </Link> }
            </div>


          { selectedPost.news1 && <div className='max-w-2xl pt-12 px-12 mx-auto flex flex-col gap-6'>
            <span className='uppercase font-bold'>Saiba mais</span>
            <div className='grid lg:grid-cols-3 gap-6 md:gap-8 md:grid-cols-2 sm:grid-cols-1'>
              { selectedPost.news1 && <NewsComponent newsTitle={selectedPost.news1[0]} newsLink={selectedPost.news1[1]} /> }
              { selectedPost.news2 && <NewsComponent newsTitle={selectedPost.news2[0]} newsLink={selectedPost.news2[1]} /> }
              { selectedPost.news3 && <NewsComponent newsTitle={selectedPost.news3[0]} newsLink={selectedPost.news3[1]} /> }
            </div>
          </div> }

          <div className='w-full max-w-2xl py-2 pt-12 px-12 pb-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
              <Link className='p-2 pr-4 bg-black flex items-center bg-opacity-50 rounded-full w-max hover:bg-opacity-100 hover:text-yellow-500 transition' href={'/news'}>
              <MdChevronLeft size={24} />
              Voltar
            </Link>
          </div>

        </div>

        <NewsGrid2 />

      </div>
    );
  } else {
    return (
      <div className='w-full bg-zinc-800 py-32 md:pt-20'>
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