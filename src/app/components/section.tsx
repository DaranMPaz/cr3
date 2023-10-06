import Image from "next/image";
import { LinkButton } from "./button";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
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
    <div className={`flex flex-col ${gap} w-full max-w-xl z-10`}>
      {titleType === "display" && (
        <h2 className="text-5xl uppercase leading-tight max-w-2xl text-theme-gray-50">
          <b className={`${color} font-bold pr-2`}>{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      {titleType === "heading" && (
        <h2 className="text-3xl uppercase leading-[150%] text-theme-gray-50">
          <b className={`${color} font-bold pr-2`}>{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      <p className="leading-relaxed text-theme-gray-50">{paragraph}</p>
      {paragraph2 && (
        <p className="leading-relaxed text-theme-gray-400">
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

export function BoxedSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-theme-gray-900 p-24 flex justify-between items-center mx-auto">
      {children}
    </div>
  );
}

export function ImageBackground({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="object-cover w-full h-full absolute top-0 left-0 z-1">
      <Image src={src} alt="alt"></Image>
    </div>
  );
}

export function ButtonCtaRight({ link, text }: { link: string; text: string }) {
  return (
    <Link
      className="text-theme-yellow-700 uppercase font-bold flex gap-2 p-4 items-center rounded hover:text-theme-red-700 bg-black bg-opacity-80 transition absolute top-1/2 -translate-y-1/2 right-24 group"
      href={link}
    >
      {text}
      <MdChevronRight className="text-2xl group-hover:translate-x-2 transition" />
    </Link>
  );
}

export function PaddingContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center px-24 py-[240px] w-full relative mx-auto">
      {children}
    </div>
  );
}

export function SectionContainer({ children, padding,} : {
  children: React.ReactNode;
  padding: "none" | "large";
}) {
  return padding === "none" ? (
    <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto relative bg-theme-texture">
      {children}
    </div>
  ) : (
    <div className="flex justify-between p-24 items-center bg-theme-texture bg-theme-gray2-900 w-full max-w-[1600px] mx-auto relative">
      {children}
    </div>
  );
}

export function SectionImageContainer({ children, image} : {
  children: React.ReactNode,
  image: string
}) {
  return (
    <div className={`flex justify-between p-24 items-center bg-theme-gray2-900 w-full max-w-[1600px] mx-auto relative h-[700px] ${image} bg-no-repeat bg-cover`}>
      {children}
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
    <div className="flex flex-col justify-center text-center gap-12 px-24 pt-0 pb-32 items-center w-full max-w-[1600px] mx-auto relative">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h2 className="text-5xl uppercase leading-tight max-w-2xl text-theme-gray-50">
            <b className="text-theme-red-500 font-bold pr-2">{title}</b>
          </h2>
          <p className="leading-relaxed text-theme-gray-50 uppercase">{paragraph}</p>
        </div>
        {icon && <IoChevronDownSharp className="text-theme-gray-50 text-2xl" />}         
          {children}
      </div>
  )
}

export function OtherContacts({img, alt, title, phone, mail}:{
  img: any,
  alt: string,
  title: string,
  phone: string,
  mail: string,
}) {
  return(
    <SectionContainer padding="large" >
      <ImageSection src={img} alt={alt} height={512} width={512} />
      <div className="flex flex-col gap-6 w-full max-w-xl z-10">
        <h2 className="text-2xl leading-relaxed text-theme-gray-50 uppercase" >{title}</h2>
        <div className="flex flex-col">
          <div className="flex py-3 border-b border-theme-gray-600">
            <span className="uppercase font-bold text-theme-red-300 text-lg pr-4">Telefone </span>
            <span className="uppercase text-theme-gray-50 text-lg"> {phone}</span>
          </div>
          <div className="flex py-3">
            <span className="uppercase font-bold text-theme-red-300 text-lg pr-4">E-mail </span>
            <span className="uppercase text-theme-gray-50 text-lg"> {mail}</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}