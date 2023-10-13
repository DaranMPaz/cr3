export default function Column(
  {
    children, 
    title
  }:{
    children:React.ReactNode,
    title:string
  }) {
  return(
    <div className='flex flex-col gap-3'>
      <h6 className='text-theme-gray-50 font-bold'>{title}</h6>
      <ul className='list-none flex flex-col gap-3'>
        {children}
      </ul>
    </div>
  )
}