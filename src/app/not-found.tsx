'use client'
import Container from '@/components/section/SectionContainer'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
export default function NotFound() {

  const router = useRouter()

  return (

    <div data-aos="fade-up" className="pt-12">
      <Container padding="large" >
        <div className="flex flex-col md:flex-row gap-20 pb-12 md:pb-0 w-full mx-auto">  
          <div className="flex flex-col max-w-[600px] pr-12 mx-auto">
            <div className="flex flex-col gap-6 border-b border-zinc-700 text-zinc-100 pb-6">
              <h2 className="text-2xl md:text-4xl uppercase text-zinc-100 leading-normal md:leading-tight"><b className="text-blue-400">404</b><br/>A página não existe ou não foi encontrada</h2>
              <p>Parece que você encontrou um terreno inexplorado.</p>
              <p>Esta página é como um mapa em branco, mas não se preocupe, estamos aqui para ajudar!</p>
            </div>
            
              <ul className="flex flex-col items-start gap-12 pt-2 w-full">
                <li>
                  <Button
                    variant='solid'
                    color='warning'
                    radius='sm' 
                    size='md' 
                    className='hover:bg-red-400 w-max font-bold translate-y-6'
                    onClick={() => router.push(`/`)} 
                  >
                    IR PARA A PÁGINA INICIAL
                  </Button>
                </li>
                <li>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-400">Se você acha que isso é um erro do nosso lado, por favor, 
                    <Link className="text-yellow-500 text-sm w-max underline hover:text-red-400 transition px-1" href={"/contact"}>nos informe</Link>
                     para que possamos corrigi-lo.
                  </p>
                </li>
              </ul>

          </div>
        </div>
      </Container>
    </div>

  )
}