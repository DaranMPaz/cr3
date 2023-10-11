import { LinkButton } from '@/components/button'
import { MdCheckCircleOutline } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

export function SuccessMessage() {

  const router = useRouter()

  return(
    <div className='flex flex-col gap-6 w-full max-w-[600px] transition'>
      <MdCheckCircleOutline className="text-4xl md:text-6xl text-blue-400" />
      <h2 className='text-xl md:text-2xl font-bold uppercase leading-relaxed max-w-2xl text-blue-400'>Sua mensagem foi enviada com sucesso</h2>
      <p className='leading-relaxed text-zinc-400'>Agradecemos por entrar em contato conosco! Vamos analisar suas informações e entrar em contato em breve para ajudá-lo com suas necessidades de auditoria.</p>
      <p className='leading-relaxed text-zinc-400'> Obrigado pela confiança em nossa equipe.</p>
      <Button onClick={() => router.push('/')} variant="solid" color="warning" className="hover:bg-red-400 w-max font-bold" radius="sm" size="lg">Voltar para a página inicial</Button>
    </div>
  )
}