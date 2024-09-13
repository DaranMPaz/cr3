import SocialProofCard from "./SocialProofCard";
import Avatar1 from '../../public/assets/socialProof/Avatar-1.jpg'
import Avatar2 from '../../public/assets/socialProof/Avatar-2.jpg'
import Avatar3 from '../../public/assets/socialProof/Avatar-3.jpg'

export default function SocialProofSection() {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-20 justify-center max-w-[1600px] mx-auto relative my-20 md:px-0 px-5">

        <div className='pb-8 border-b border-zinc-800 w-max mx-auto'>
          <h2 className='text-2xl md:text-4xl leading-snug md:leading-tight max-w-2xl text-theme-blue-500 uppercase font-bold text-center'>O que nossos clientes estão falando</h2>
        </div>

        <div className='flex justify-evenly w-full gap-8 max-w-[1248px] flex-col md:flex-row'>

          <div className='absolute top-[202px] -left-[25rem] md:opacity-20 opacity-0'>
            <SocialProofCard
              avatar={Avatar2}
              name='Ana Pereira'
              company='Comércio Internacional Ltda.'
              comment='"Implementar o novo serviço de auditoria da CR3 foi um divisor de águas para nossa empresa. A quantificação detalhada de retornos e a supervisão rigorosa dos dados de vendas nos ajudaram a melhorar nossa eficiência e a assegurar total conformidade com as recentes diretrizes normativas. Recomendamos fortemente!"'
            />
          </div>

          <SocialProofCard
            avatar={Avatar1}
            name='Maria Silva'
            company='Logística Global'
            comment='"A CR3 Auditoria transformou a forma como gerenciamos nossas operações de auditoria. Com a nova abordagem, nossa empresa não só alcançou uma conformidade impecável com as normas recentes, mas também otimizou significativamente nossos processos logísticos. O relatório final foi detalhado e extremamente útil para nossas decisões estratégicas."'
          />

          <SocialProofCard
            avatar={Avatar2}
            name='Ana Pereira'
            company='Comércio Internacional Ltda.'
            comment='"Implementar o novo serviço de auditoria da CR3 foi um divisor de águas para nossa empresa. A quantificação detalhada de retornos e a supervisão rigorosa dos dados de vendas nos ajudaram a melhorar nossa eficiência e a assegurar total conformidade com as recentes diretrizes normativas. Recomendamos fortemente!"'
          />

          <SocialProofCard
            avatar={Avatar3}
            name='João Costa'
            company='Indústria de Embalagens'
            comment='"O serviço de auditoria da CR3 foi essencial para nossa adaptação às novas regulamentações. A análise minuciosa das embalagens e a verificação precisa das notas fiscais garantiram que estivéssemos em total conformidade. A equipe foi extremamente profissional e o suporte foi além das expectativas."'
          />

          <div className='absolute top-[202px] -right-[25rem] md:opacity-20 opacity-0'>
            <SocialProofCard
              avatar={Avatar1}
              name='Maria Silva'
              company='Logística Global'
              comment='"A CR3 Auditoria transformou a forma como gerenciamos nossas operações de auditoria. Com a nova abordagem, nossa empresa não só alcançou uma conformidade impecável com as normas recentes, mas também otimizou significativamente nossos processos logísticos. O relatório final foi detalhado e extremamente útil para nossas decisões estratégicas."'
            />
          </div>

        </div>
      
      </div>
  )
}