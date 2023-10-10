import Image from "next/image";
import TimeLineItem from "../../public/timeline-item-img.png"

export function VerticalCard({image, title1, title2, paragraph1, paragraph2}:{
  image?: any,
  title1?: string,
  title2?: string,
  paragraph1?: string,
  paragraph2?: string
}) {
  return(
    <div className="bg-theme-gray-800">
      <div className="object-cover">
        <Image width={480} height={480} quality={100} src={image} alt="Diferencial"></Image>
      </div>
      <div className="flex flex-col gap-4 w-full p-6 text-left">
        <h3 className="uppercase text-theme-gray-50 text-xl font-bold"><b className="text-theme-red-400">{title1}</b> {title2}</h3>
        <p className="text-theme-gray-50">{paragraph1}</p>
        <p className="text-theme-gray-400 leading-relaxed">{paragraph2}</p>
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
          <h4 className="uppercase text-theme-red-400 font-bold text-base">{title}</h4>
          <p className="text-theme-gray-400 text-sm leading-relaxed">{paragraph}</p>
        </div>
      </div>
      {divider && <Image src={TimeLineItem} alt="Timeline Divider"></Image>}
    </div>
  )
}

export function TimelineDivider() {
  return(
    <Image src={TimeLineItem} width={50} alt="Timeline Divider"></Image>
  )
}

export function HorizontalCard({children}:{
  children: React.ReactNode
}) {
  return(
    <div className="grid grid-cols-2">
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
    <div className="flex flex-col gap-8 w-full p-12 text-left bg-theme-gray-800">
      <h2 className="uppercase text-theme-gray-50 text-4xl"><b className="text-theme-red-500">{title1}</b> {title2}</h2>
      <p className="text-theme-gray-50">{paragraph1}</p>
      <p className="text-theme-gray-400">{paragraph2}</p>
      <p className="text-theme-gray-400">{paragraph3}</p>
    </div>
  )
}