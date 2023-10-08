import { MdWorkspacePremium } from "react-icons/md";
import { ImageSection } from "./section";

export function ImageAnimated({image, alt, color, children, onRight, onLeft}:{
  image: any,
  color: string
  alt: string,
  children: React.ReactNode,
  onRight?: boolean,
  onLeft?: boolean,
}) {
  return(
    <div className="relative">
      { onLeft && <div className={`${color} flex flex-col justify-end items-center w-24 h-44 p-6 absolute bottom-12 left-12 animate-bounce-slowest text-[68px] text-white`}>
        {children}
      </div> }
      <ImageSection src={image} alt={alt} height={512} width={512} />
      { onRight && <div className={`${color} flex flex-col justify-end items-center w-24 h-44 p-6 absolute bottom-12 right-24 animate-bounce-slowest text-[68px] text-white`}>
        {children}
      </div> }
    </div>
  )
}