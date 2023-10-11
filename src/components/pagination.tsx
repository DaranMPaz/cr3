export function Pagination({items, pageSize, currentPage, onPageChange}:{
  items:any, 
  pageSize:any,
  currentPage:any, 
  onPageChange:any
}) {

  const pagesCount = Math.ceil(items / pageSize)
  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  console.log(pages)

  return(
    <div>
      <ul>
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? 'text-red-400' : ''
           }
         >
           <a onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
    </div>
  )
}