import Image from 'next/image'

export default function ImageAnimated({image, alt, color, children, onRight, onLeft}:{
  image: any,
  color: string
  alt: string,
  children: React.ReactNode,
  onRight?: boolean,
  onLeft?: boolean,
}) {
  return(
    <div className="relative">
      { onLeft && <div className={`${color} flex flex-col justify-end items-center w-16 h-32 md:w-24 md:h-44 p-6 absolute bottom-12 left-12 animate-bounce-slowest text-3xl md:text-[68px] text-white`}>
        {children}
      </div> }
      <Image alt={alt} src={image} width={512} height={512}/>
      { onRight && <div className={`${color} flex flex-col justify-end items-center w-16 h-32 md:w-24 md:h-44 p-6 absolute bottom-12 right-24 animate-bounce-slowest text-3xl md:text-[68px] text-white`}>
        {children}
      </div> }
    </div>
  )
}