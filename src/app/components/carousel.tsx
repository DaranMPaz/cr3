import Link from "next/link";
import { LinkButton } from "./button";

export default function Carousel({
  title1,
  title2,
  paragraph,
  cta,
  link,
}: {
  title1: string;
  title2: string;
  paragraph: string;
  cta: string;
  link: string;
}) {
  return (
    <div className="w-full h-full object-cover relative max-w-[1600px] mx-auto mt-[80px]">
      <video autoPlay loop muted>
        <source src={"home-video.mp4"} />
      </video>
      <div className="flex flex-col gap-6 absolute top-0 left-0 p-24 w-full max-w-[1440px]">
        <h1 className="text-5xl uppercase leading-tight max-w-2xl">
          <b className="text-theme-blue-500 font-bold pr-2">{title1}</b>
          {title2}
        </h1>
        <p className="max-w-md">{paragraph}</p>
        <LinkButton link={link} text={cta} />
      </div>
    </div>
  );
}
