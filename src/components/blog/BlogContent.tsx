export default function BlogContent({title, content}:{
  title: string,
  content: string,
}) {
  return(
    <div className='w-full max-w-2xl pt-12 px-12 text-sm md:text-base mx-auto text-zinc-300 flex flex-col gap-3'>
      <h2 className='text-lg font-bold md:text-xl md:leading-tight text-red-400'>{title}</h2>
      <p className='leading-loose'>{content}</p>
    </div>
  )
}