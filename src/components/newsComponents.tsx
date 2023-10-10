'use client'
import { NewsGrid } from '@/components/grid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function NewsContent(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up" className='pt-20'>
      <NewsGrid />
    </div>
  )
}