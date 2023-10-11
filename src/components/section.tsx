import Image from "next/image";
import { LinkButton } from "./button";
import { IoChevronDownSharp } from "react-icons/io5"

export function TextSection({ titleType, title1, title2, paragraph, paragraph2, cta, link, hasCta, br, gap, color} : {
  titleType: "display" | "heading";
  title1?: string;
  title2?: string;
  paragraph?: string;
  paragraph2?: string;
  cta?: string;
  link?: string;
  hasCta?: boolean;
  br?: boolean;
  gap?: string | 'gap-6'
  color?: string | 'text-theme-blue-500'
}) {
  return (
    <div className={`flex flex-col ${gap} w-full max-w-lg z-10`}>
      {titleType === "display" && (
        <h2 className="text-2xl md:text-4xl uppercase leading-snug md:leading-tight max-w-2xl text-zinc-100">
          <b className={`${color} font-bold pr-1`}>{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      {titleType === "heading" && (
        <h2 className="text-2xl md:text-4xl uppercase leading-snug md:leading-tight text-zinc-100">
          <b className={`${color} font-bold pr-2`}>{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      <p className="leading-relaxed text-zinc-200">{paragraph}</p>
      {paragraph2 && (
        <p className="leading-relaxed text-zinc-400">
          {paragraph2}
        </p>
      )}
      {hasCta && <LinkButton link={link ? link : ""} text={cta ? cta : ""} />}
    </div>
  );
}

export function ImageSection({ src, alt, width, height,} : {
  src: any;
  alt: string;
  width: number;
  height: number;
}) {
  return <Image alt={alt} src={src} width={width} height={height}></Image>;
}

export function ImageBackground({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="object-cover w-full h-full absolute top-0 left-0 z-1">
      <Image src={src} alt="alt"></Image>
    </div>
  );
}

export function CenteredSection({children, title, paragraph, icon} : {
  children?: React.ReactNode,
  title: string,
  paragraph: string
  icon?: boolean
}) {
  return(
    <div className="flex flex-col justify-center text-center gap-12 px-6 md:px-24 md:pb-32 md:py-0 py-32 items-center w-full max-w-[1600px] mx-auto relative">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h2 className="text-3xl md:text-5xl uppercase leading-tight max-w-2xl text-zinc-100">
            <b className="text-red-400 font-bold pr-2">{title}</b>
          </h2>
          <p className="leading-relaxed text-zinc-200 uppercase text-sm md:text-base">{paragraph}</p>
        </div>
        {icon && <IoChevronDownSharp className="text-zinc-200 text-2xl animate-bounce-slow" />}         
          {children}
      </div>
  )
}