import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdChevronRight } from "react-icons/md";

export default function ButtonCta({ link, text }: { link: string; text: string }) {
  const router = useRouter()
  return (
    <>
      <Link
        className="hidden text-theme-yellow-700 uppercase font-bold md:flex gap-2 p-4 items-center rounded hover:text-theme-red-700 bg-black bg-opacity-80 transition absolute md:top-1/2 md:-translate-y-1/2 md:right-24 group"
        href={link}
      >
        {text}
        <MdChevronRight className="text-2xl group-hover:translate-x-2 transition" />
      </Link>
      <Button
        variant='solid'
        color='warning'
        radius='sm' 
        size='lg' 
        className='hover:bg-red-400 w-max font-bold absolute bottom-0 translate-y-6 md:hidden'
        onClick={() => router.push(`/audit`)} >
        SAIBA MAIS
      </Button>
    </>
  );
}