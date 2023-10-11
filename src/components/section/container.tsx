'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Container({ children, padding, reverse} : {
  children: React.ReactNode
  padding: "none" | "large"
  reverse?: boolean
}) {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return padding === "none" ? (
    <div data-aos="fade-up" className={`flex ${ reverse === true ? 'flex-col' : 'flex-col-reverse' } gap-12 md:flex-row justify-between items-center w-full max-w-[1600px] mx-auto relative `}>
      {children}
    </div>
  ) : (
    <div data-aos="fade-up" className={`flex ${ reverse === true ? 'flex-col' : 'flex-col-reverse' } gap-12 md:flex-row justify-between p-6 py-12 md:p-24 items-center w-full max-w-[1600px] mx-auto relative`}>
      {children}
    </div>
  );
}