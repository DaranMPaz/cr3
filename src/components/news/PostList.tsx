'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { postList } from '../../utils/posts'
import { usePathname } from 'next/navigation'

const PostData = ({amount}:{amount:number}) => {
  const pathname = usePathname()
  const [visiblePosts, setVisiblePosts] = useState(amount); // Defina o número inicial de posts visíveis

  const handleLoadMore = () => {
    setVisiblePosts(visiblePosts + 4); // Carregue mais 5 posts a cada clique no botão "Ver mais"
  };

  const posts = postList.slice(0, visiblePosts)

  return (
    <div>
      <div className='grid lg:grid-cols-4 gap-6 md:gap-8 md:grid-cols-2 sm:grid-cols-1 transition'>
        {posts.map(((post) => (
          // Renderize os detalhes de cada post aqui
          <div className="bg-zinc-800 md:origin-center md:hover:scale-105 transition" key={post.id}>
            <div className='w-full h-[200px] aspect-square relative'>
              <Image className='w-full h-full object-cover' fill src={`${post.image}`} alt="Diferencial"></Image>
            </div>
            <div className="flex flex-col gap-4 w-full p-4 text-left">
              <h3 className="upperase text-zinc-100 text-sm md:text-sm font-bold uppercase tracking-wide leading-10">{post.title}</h3>
              <div className='flex flex-col gap-1 justify-between'>
                <p className="text-zinc-400 text-sm md:text-sm pb-2">{post.shortDescription}</p>
                <Link href={`/news/posts/${post.id}`} className='text-yellow-500'>[ continuar lendo ]</Link>
              </div>
            </div>
          </div>
        )))}
      </div>

      {visiblePosts < postList.length && (
        <Button 
          variant='bordered'
          color='warning'
          className='hover:border-red-400 hover:text-red-500 m-max absolute left-1/2 -translate-x-1/2 mt-12'
          onClick={handleLoadMore}
        >Mostar Mais</Button>
      )}
    </div>
  );
};

export default PostData;
