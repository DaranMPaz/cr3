import Image from "next/image";
import { LinkButton } from "./button";

export function TextSection({title1, title2, paragraph, paragraph2, cta, link, hasCta, br}:{title1:string, title2:string, paragraph:string, paragraph2?: string, cta?:string, link?:string, hasCta?:boolean, br?:boolean}) {
  return(
    <div className='flex flex-col gap-6 w-full max-w-xl'>
      <h2 className='text-3xl uppercase leading-[150%]'><b className='text-theme-blue-500 font-bold pr-2'>{title1}</b>{br && <br/>}{title2}</h2>
      <p className='leading-relaxed'>{paragraph}</p>
      {paragraph2 && <p className='leading-relaxed text-theme-gray-400'>{paragraph2}</p>}
      {hasCta && <LinkButton link={link ? link : ''} text={cta ? cta : ''} />}
    </div>
  )
}

export function ImageSection({src, alt, width, height}:{src:any, alt:string, width:number, height:number}) {
  return(
    <Image alt={alt} src={src} width={width} height={height}></Image>
  )
}

export function SectionContainer({children}:{children:React.ReactNode}) {
  return(
    <div className='flex justify-between items-center p-24 bg-theme-gray2-900 w-full max-w-[1600px] mx-auto'>
      {children}
    </div>
  )
}