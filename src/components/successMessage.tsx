import { LinkButton } from '@/components/button'
import { MdCheckCircleOutline } from 'react-icons/md'

export function SuccessMessage() {
  return(
    <div className='flex flex-col gap-6 w-full max-w-[600px] transition'>
      <MdCheckCircleOutline className="text-6xl text-theme-blue-500" />
      <h2 className='text-2xl uppercase leading-tight max-w-2xl text-theme-gray-50'>Sua mensagem foi enviada com sucesso</h2>
      <p className='leading-relaxed text-theme-gray-400'>Agradecemos por entrar em contato conosco! Vamos analisar suas informações e entrar em contato em breve para ajudá-lo com suas necessidades de auditoria.</p>
      <p className='leading-relaxed text-theme-gray-400'> Obrigado pela confiança em nossa equipe.</p>
      <LinkButton link='/' text='Ir para a página inicial'  />
    </div>
  )
}