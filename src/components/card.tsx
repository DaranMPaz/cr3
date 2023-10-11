import Image from "next/image";
import TimeLineDesktopItem from '../../public/desktop-divider.svg'
import TimeLineMobileItem from '../../public/mobile-divider.svg'

export function VerticalCard({image, title1, title2, paragraph1, paragraph2}:{
  image?: any,
  title1?: string,
  title2?: string,
  paragraph1?: string,
  paragraph2?: string
}) {
  return(
    <div className="bg-zinc-800">
      <div className="object-cover">
        <Image width={480} height={480} quality={100} src={image} alt="Diferencial"></Image>
      </div>
      <div className="flex flex-col gap-4 w-full p-6 text-left md:text-base text-sm leading-relaxed">
        <h3 className="uppercase text-zinc-100 sm:text-lg text-lg md:text-xl font-bold"><b className="text-red-400">{title1}</b> {title2}</h3>
        <p className="text-zinc-100">{paragraph1}</p>
        <p className="text-zinc-400">{paragraph2}</p>
      </div>
    </div>
  )
}

export function TimeLineCard({image, title, paragraph, divider}:{
  image?: any,
  title?: string,
  paragraph?: string,
  divider?: boolean
}) {
  return(
    <div className="flex items-start w-[270px]">
      <div className="flex flex-col gap-4">
          <Image src={image} alt="Metodologia"></Image>
        <div className="flex flex-col gap-4 w-full py-6 text-left">
          <h4 className="uppercase text-red-400 font-bold md:text-base">{title}</h4>
          <p className="text-zinc-400 text-sm leading-relaxed">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export function TimelineDivider() {
  return(
    <>
      <Image src={TimeLineDesktopItem} width={50} alt="Timeline Divider" className="hidden md:flex"></Image>
      <Image src={TimeLineMobileItem} alt="Timeline Divider" className="flex md:hidden mb-6"></Image>
    </>
  )
}

export function HorizontalCard({children}:{
  children: React.ReactNode
}) {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  )
}

export function HorizontalCardImage({image, alt,}:{
  image: any,
  alt: string,
}) {
  return(
    <div className="object-cover">
      <Image className="w-full" src={image} alt={alt}></Image>
    </div>
  )
}

export function HorizontalCardContent({title1, title2, paragraph1, paragraph2, paragraph3}:{
  title1?: string,
  title2?: string,
  paragraph1?: string,
  paragraph2?: string,
  paragraph3?: string
}) {
  return(
    <div className="flex flex-col gap-4 md:gap-8 w-full p-6 md:p-12 text-left leading-relaxed text-sm md:text-base bg-zinc-800">
      <h2 className="uppercase text-zinc-100 text-2xl md:text-4xl leading-snug md:leading-tight"><b className="text-red-400">{title1}</b> {title2}</h2>
      <p className="text-zinc-100">{paragraph1}</p>
      <p className="text-zinc-400">{paragraph2}</p>
      <p className="text-zinc-400">{paragraph3}</p>
    </div>
  )
}