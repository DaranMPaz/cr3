'use client'
import Image from "next/image";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdChevronLeft } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function BlogTile({imageSrc, imageAlt, postTitle, postShortDescription}:{
  imageSrc: string,
  imageAlt: string,
  postTitle: string,
  postShortDescription: string,
}) {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div className='relative pt-16 md:pt-20 transition' data-aos="fade-up">

      <Image 
        src={imageSrc} 
        alt={imageAlt} 
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
        <h1 className='text-xl font-bold md:text-4xl md:leading-tight text-red-400'>{postTitle}</h1>
        <p className='text-zinc-100 leading-relaxed text-sm md:text-base'>{postShortDescription}</p>
      </div>

    </div>
  )
}