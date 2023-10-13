'use client'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { postList } from '@/utils/posts'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BlogTile from '@/components/Blog/BlogTitle';
import BlogContent from '@/components/Blog/BlogContent';
import NewsComponent from '@/components/News/NewsComponent';
import NewsGrid2 from '@/components/News/Grid2';

export default function Post({ params }: { params: { slug: any } }) {
  
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  const postId = params.slug
  const selectedPost = postList.find(post => post.id === postId)

  if (selectedPost) {
    return (
      <div>

        <BlogTile 
          postTitle={selectedPost.title}
          postShortDescription={selectedPost.shortDescription}
          imageSrc={selectedPost.image}
          imageAlt={selectedPost.title}
        />

        <div className='w-full bg-zinc-800'>

          <BlogContent
            title={selectedPost.subtitle}
            content={selectedPost.content}
          />

          { selectedPost.content2 &&
            <BlogContent
              title={selectedPost.subtitle2}
              content={selectedPost.content2}
            />
          }

          { selectedPost.content3 &&
            <BlogContent
              title={selectedPost.subtitle3}
              content={selectedPost.content3}
            />
          }

          { selectedPost.content4 &&
            <BlogContent
              title={selectedPost.subtitle4}
              content={selectedPost.content4}
            />
          }

          { selectedPost.content5 &&
            <BlogContent
              title={selectedPost.subtitle5}
              content={selectedPost.content5}
            />
          }

          { selectedPost.content6 &&
            <BlogContent
              title={selectedPost.subtitle6}
              content={selectedPost.content6}
            />
          }        

          { selectedPost.content7 &&
            <BlogContent
              title={selectedPost.subtitle7}
              content={selectedPost.content7}
            />
          }  

          { selectedPost.content8 &&
            <BlogContent
              title={selectedPost.subtitle8}
              content={selectedPost.content8}
            />
          }

          { selectedPost.content9 &&
            <BlogContent
              title={selectedPost.subtitle9}
              content={selectedPost.content9}
            />
          }

          { selectedPost.content10 &&
            <BlogContent
              title={selectedPost.subtitle10}
              content={selectedPost.content10}
            />
          }

          { selectedPost.content11 &&
            <BlogContent
              title={selectedPost.subtitle11}
              content={selectedPost.content11}
            />
          }

          { selectedPost.content12 &&
            <BlogContent
              title={selectedPost.subtitle12}
              content={selectedPost.content12}
            />
          }

          { selectedPost.content13 &&
            <BlogContent
              title={selectedPost.subtitle13}
              content={selectedPost.content13}
            />
          }

          { selectedPost.content14 &&
            <BlogContent
              title={selectedPost.subtitle14}
              content={selectedPost.content14}
            />
          }

          {
            selectedPost.content15 && 
            <BlogContent
              title={selectedPost.subtitle15}
              content={selectedPost.content15}
            />
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