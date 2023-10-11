import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export function Cta({ emphasis, title, paragraph, cta, route, className} : {
  emphasis?: string;
  title?: string;
  paragraph?: string;
  cta?: string;
  route?: string;
  className?: any
}) {

  const Router = useRouter()

  return (
    <div className={`flex flex-col gap-6 w-full md:w-full max-w-md md:max-w-5xl z-20 p-6 pt-16 md:pt-24 md:p-24 absolute ${className}`}>
      <h1 className="text-3xl md:text-5xl uppercase leading-snug md:leading-tight w-full md:max-w-2xl max-w-sm text-theme-gray-50">
        <b className={`text-blue-400 font-bold pr-2`}>{emphasis}</b>
        {title}
      </h1>
      <p className="text-sm md:text-base leading-relaxed text-theme-gray-50 md:max-w-2xl max-w-xs">{paragraph}</p>
      <Button
        variant='solid'
        color='warning'
        radius='sm' 
        size='lg' 
        className='hover:bg-red-400 w-max font-bold'
        onClick={() => Router.push(`${route}`)} >
        {cta}
      </Button>
    </div>
  );
}