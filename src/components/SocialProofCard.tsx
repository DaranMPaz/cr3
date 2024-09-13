import Image from "next/image";

export default function SocialProofCard(
  {
    avatar,
    name,
    company,
    comment
  } : {
    avatar: any,
    name: string,
    company: string,
    comment: string
  }

) {
  return(
    <div className='flex flex-col gap-6 p-8 border-l-4 border-red-500 bg-zinc-800 w-full md:max-w-[373px]'>

      <div className='flex items-center flex-1 gap-4'>
        <Image src={avatar} alt='João Costa' height={48} className='rounded-full' />
        <div className='flex w-full flex-col leading-tight'>
          <h4 className='font-bold text-xl '>{name}</h4>
          <p className='text-zinc-400'>{company}</p>
        </div>
      </div>

      <div className='flex flex-1'>
        <p className='text-zinc-300'>{comment}</p>
      </div>
    </div>
  )
}