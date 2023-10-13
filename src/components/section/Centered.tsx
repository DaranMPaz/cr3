import { IoChevronDownSharp } from "react-icons/io5"

export default function Centered({children, title, paragraph, icon} : {
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