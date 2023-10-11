import { IoChevronDownSharp } from "react-icons/io5";

export default function SectionImageContainer({ children, image, icon} : {
  children: React.ReactNode,
  image: string,
  icon?: boolean
}) {
  return (
    <div className={`flex justify-between p-0 md:p-24 mt-18 items-center w-full max-w-[1600px] mx-auto relative h-[700px] ${image} bg-no-repeat bg-cover`}>
      {children}
      {icon && <IoChevronDownSharp className="text-zinc-100 text-2xl animate-bounce-slow absolute bottom-12 left-1/2 -translate-x-1/2" />}  
    </div>
  );
}