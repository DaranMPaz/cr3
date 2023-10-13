import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function TextContent({ titleType, title1, title2, paragraph, paragraph2, cta, link, hasCta, br, gap, color} : {
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

  const router = useRouter()

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
      {hasCta && 
        <Button
          type="submit" 
          variant="solid" 
          color="warning" 
          className={`hover:bg-red-400 font-bold w-max uppercase`} 
          radius="sm" 
          size="lg"
          onClick={() => {router.push(`${link}`)}}
        >
          {cta}
        </Button>
      }
    </div>
  );
}

      