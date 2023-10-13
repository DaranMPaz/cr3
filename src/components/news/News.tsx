import NewsComponent from "./NewsComponent";
import TextContent from "../TextContent";

export default function News({news1, news2, news3}:{
  news1?:any,
  news2?:any,
  news3?:any,
}) {

  return(
    <>
    <TextContent color="text-red-400" gap="gap-2" titleType="heading" title1="Saiba mais:" />

    <div className='grid lg:grid-cols-3 gap-6 md:gap-8 md:grid-cols-2 sm:grid-cols-1'>
      <NewsComponent newsTitle={news1[0]} newsLink={news1[2]} />
      <NewsComponent newsTitle={news2[0]} newsLink={news2[2]} />
      <NewsComponent newsTitle={news3[0]} newsLink={news3[2]} />
    </div>
    </>
  )
}