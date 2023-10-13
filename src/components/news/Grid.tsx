'use client'
import { FlexYContainer } from '../Container'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Container from '../section/SectionContainer'
import TextContent from '../TextContent'
import PostData from './PostList'

export default function NewsGrid({title, subtitle, amount}:{title: string, subtitle:string, amount:number}) {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up" className='pt-12'>
    <Container padding="large" >
      <FlexYContainer gap>
        <TextContent color="text-red-400" gap="gap-2" titleType="heading" title1={title} paragraph={subtitle} />
            <PostData amount={amount} />
        </FlexYContainer>
      </Container>
    </div>
  )
}