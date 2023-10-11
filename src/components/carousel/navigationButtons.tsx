import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function RightButton({
  onClick
}:{
  onClick:any
}) {
  return(
    <div onClick={onClick} className='absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 md:right-24 text-2xl rounded-full p-2 z-30 bg-black/20 text-white cursor-pointer'>
      <MdChevronRight size={30}/>
    </div>
  )
}

export function LeftButton({
  onClick
}:{
  onClick:any
}) {
  return(
    <div onClick={onClick} className='hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <MdChevronLeft size={30}/>
    </div>
  )
}