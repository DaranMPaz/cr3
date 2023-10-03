import Image from "next/image";
import { LinkButton } from "./button";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export function TextSection({
  titleType,
  title1,
  title2,
  paragraph,
  paragraph2,
  cta,
  link,
  hasCta,
  br,
}: {
  titleType: "display" | "heading";
  title1?: string;
  title2?: string;
  paragraph: string;
  paragraph2?: string;
  cta?: string;
  link?: string;
  hasCta?: boolean;
  br?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xl z-10">
      {titleType === "display" && (
        <h2 className="text-5xl uppercase leading-tight max-w-2xl text-theme-gray-50">
          <b className="text-theme-blue-500 font-bold pr-2">{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      {titleType === "heading" && (
        <h2 className="text-3xl uppercase leading-[150%] text-theme-gray-50">
          <b className="text-theme-blue-500 font-bold pr-2">{title1}</b>
          {br && <br />}
          {title2}
        </h2>
      )}
      <p className="leading-relaxed text-theme-gray-50">{paragraph}</p>
      {paragraph2 && (
        <p className="leading-relaxed text-theme-gray-400 text-theme-gray-400">
          {paragraph2}
        </p>
      )}
      {hasCta && <LinkButton link={link ? link : ""} text={cta ? cta : ""} />}
    </div>
  );
}

export function ImageSection({
  src,
  alt,
  width,
  height,
}: {
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
      className="text-theme-yellow-700 uppercase font-bold flex gap-4 items-center rounded hover:text-theme-red-700 transition absolute top-1/2 right-24"
      href={link}
    >
      {text}
      <MdChevronRight clannName="text-theme-yellow-700 text-2xl transition hover:translate-x-6" />
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

export function SectionContainer({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding: "none" | "large";
}) {
  return padding === "none" ? (
    <div className="flex justify-between items-center bg-theme-gray2-900 w-full max-w-[1600px] mx-auto relative">
      {children}
    </div>
  ) : (
    <div className="flex justify-between p-24 items-center bg-theme-gray2-900 w-full max-w-[1600px] mx-auto relative">
      {children}
    </div>
  );
}
