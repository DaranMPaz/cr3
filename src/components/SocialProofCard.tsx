import Image from "next/image";

export default function SocialProofCard(
  {
    avatar,
    name,
    company,
    comment,
    hasImage
  } : {
    avatar: any,
    name: string,
    company?: string,
    comment: string,
    hasImage?: boolean
  }

) {
  return(
    <div className='flex flex-col gap-6 p-8 border-l-4 border-red-500 bg-zinc-800 w-full md:max-w-[373px]'>

      <div className='flex items-center gap-4'>
        { hasImage && <Image src={avatar} alt='João Costa' height={48} className='rounded-full' /> }
        <div className='flex w-full flex-col leading-tight'>
          <h4 className='font-bold text-xl '>{name}</h4>
          { company && <p className='text-zinc-400'>{company}</p> }
        </div>
      </div>

      <div className='flex flex-1'>
        <p className='text-zinc-300 font-sans text-justify space-y-8'>
          {comment.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}</p>
      </div>
    </div>
  )
}