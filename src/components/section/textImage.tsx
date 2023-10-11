'use client'
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function TextImage({ emphasis, title, paragraph, complement, cta, route, children}:{
  emphasis?: string;
  title?: string;
  paragraph?: string;
  complement?: string;
  cta?: string;
  route?: string;
  children: React.ReactNode
}){

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Router = useRouter()

  return(
    <div className="flex flex-col md:flex-row gap-11 md:justify-between p-4 md:p-24 items-center w-full md:max-w-[1600px] mx-auto relative">
      {children}
      <div className="flex flex-col md:flex-row gap-11 md:justify-between p-4 md:p-24 items-center w-full md:max-w-[1600px] mx-auto relative">
        <h2 className="text-xl md:text-2xl uppercase leading-snug md:leading-tight w-full md:max-w-2xl max-w-sm text-zinc-100">
          <b className={`text-blue-400 font-bold pr-2`}>{emphasis}</b>
          {title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-zinc-200 md:max-w-2xl max-w-xs">{paragraph}</p>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400 md:max-w-2xl max-w-xs">{complement}</p>
        <Button
          variant='solid'
          color='warning'
          radius='sm' 
          size='lg' 
          className='hover:bg-red-400 w-max font-bold'
          onClick={() => Router.push(`${route}`)} >
          {cta}
        </Button>
      </div>  
    </div>
  )
}