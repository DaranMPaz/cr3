'use client'
import { useState, useEffect } from 'react'
import { RightButton } from './NavigationButtons'
import { Cta } from './Cta'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function HomeCarousel() {

  const slides = [
    { url:'/banner/banner-9.jpg' },
    { url:'/banner/banner-2.jpg' },
  ]

  const ctas = [
    {
      emphasis:'Auditoria de terceira parte',
      title: 'para sistemas de logística reversa de embalagens',
      paragraph: 'Especializada em logística reversa, a CR3 auditoria é pioneira em promover a conformidade no mercado de logística reversa e créditos de reciclagem do Brasil.',
      hasCta: true,
      route: '/audit',
      cta: 'SAIBA MAIS'
    },
    {
      emphasis:'Auditoria ISO ',
      title: 'Organização Internacional de Normalização',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Est pharetra et vestibulum eget eget sit in viverra luctus. Facilisis aliquet quis in sit vulputate. Tempus amet fermentum tortor cras ac quis..',
      hasCta: true,
      route: '/iso',
      cta: 'SAIBA MAIS'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000)
    return () => clearInterval(interval)
  }, [currentIndex]);

  return (
    <div className='max-w-[1600px] w-full h-[640px] md:h-[720px] m-auto pt-16 md:pt-20 relative group'>
      {<div className='w-full h-full bg-center bg-cover transition-opacity duration-500'>
        {currentIndex === 0 && 
          <motion.div 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <video autoPlay loop muted className="brightness-50 object-cover w-full h-[640px] md:h-[720px] absolute top-0 left-0 -z-0">
              <source src={'/banner/banner-1.mp4'} />
            </video>
            <Cta
              emphasis={`${ctas[0].emphasis}`}
              title={`${ctas[0].title}`}
              cta={`${ctas[0].cta}`}
              paragraph={`${ctas[0].paragraph}`}
              route={`${ctas[0].route}`} 
            />
          </motion.div>
        }
        {currentIndex === 1 && 
          <motion.div 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={`${slides[1].url}`} alt='CR3 Auditoria' width={1600} height={900} className='object-cover w-full h-[640px] md:h-[720px] absolute top-0 left-0 -z-0' />
            <Cta
              emphasis={`${ctas[1].emphasis}`}
              title={`${ctas[1].title}`}
              cta={`${ctas[1].cta}`}
              paragraph={`${ctas[1].paragraph}`}
              route={`${ctas[1].route}`} 
            />
          </motion.div>
        }
      </div>}
      <RightButton onClick={prevSlide}/>
    </div>
  )
}