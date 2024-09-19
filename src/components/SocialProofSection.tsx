import SocialProofCard from "./SocialProofCard";
import Avatar1 from '../../public/assets/socialProof/Avatar-1.jpg'
import Avatar2 from '../../public/assets/socialProof/Avatar-2.jpg'
import Avatar3 from '../../public/assets/socialProof/Avatar-3.jpg'

export default function SocialProofSection() {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-20 justify-center max-w-[1600px] w-full md:w-max mx-auto relative my-20 md:px-0 px-5">

        <div className='pb-8 border-b border-zinc-800 w-full mx-auto flex justify-center'>
          <h2 className='text-2xl md:text-4xl leading-snug md:leading-tight max-w-2xl text-theme-blue-500 uppercase font-bold text-center'>O que nossos clientes estão falando</h2>
        </div>

        <div className='flex justify-evenly w-full gap-8 max-w-[1248px] flex-col md:flex-row'>

          <div className='absolute top-[202px] -left-[25rem] md:opacity-20 opacity-0 hidden md:block'>
            <SocialProofCard
              avatar={Avatar2}
              name='Ana Pereira'
              comment={`excelente serviço prestado durante nossa auditoria de terceira parte. O trabalho realizado foi essencial para garantir a conformidade com as normas aplicáveis, ajudando-nos a identificar pontos de melhoria e assegurar a qualidade de nossos processos. \n
              O conhecimento profundo da equipe sobre a legislação e a atenção aos detalhes nos proporcionaram resultados sólidos. Estamos confiantes em continuar essa parceria e contar com o suporte da CR3 em futuras auditorias.`}
            />
          </div>

          <SocialProofCard
            avatar={Avatar1}
            name='Recicla Aqui'
            comment={`Gostaríamos de agradecer à equipe da CR3 Auditoria pelo excelente trabalho realizado em nossa auditoria de terceira parte.\n
              O processo foi super construtivo, fez a gente ajustar nossos processos e reorganizar toda a documentação, tanto nossa quanto dos operadores. No final, tudo deu certo e o resultado foi excelente! \n 
              A equipe da CR3 é realmente muito competente e parece conhecer cada detalhe da legislação. \n 
              Um ponto positivo é que o relatório foi aprovado de primeira pelo MMA, sem nenhuma solicitação de ajuste. Estamos muito felizes com essa parceria!`}
          />

          <SocialProofCard
            avatar={Avatar2}
            name='ILOG - Instituto Brasileiro de Logística Reversa'
            comment={`Gostaríamos de parabenizar os auditores e a equipe pela contribuição e suporte que nos forneceram referente as auditorias obrigatórias que as Entidades Gestoras necessitam cumprir conforme os decretos, atendendo ao Decreto do IMASUL ao Decreto Federal para o MMA. \n Resultados positivos provém de excelentes trabalhos e desempenho. \n
            Esperamos continuar nossa parceria para trabalhos futuros, na próxima entrega de Relatórios Comprovatórios aos órgãos ambientais estaduais e ao MMA – Ministério de Meio Ambiente.`}
          />

          <SocialProofCard
            avatar={Avatar3}
            name='João Costa'
            comment={`Equipe dedicada e com excelente suporte oferecido no cumprimento das auditorias obrigatórias que a nossa organização deve seguir. O atendimento às exigências estabelecidas foi realizado de forma precisa e eficiente. \n
            O sucesso dos resultados obtidos reflete a excelência do trabalho realizado por todos os envolvidos. \n 
            Estamos confiantes e esperamos continuar essa parceria na entrega de relatórios futuros aos órgãos competentes, garantindo a conformidade com todas as exigências normativas.`}
          />

          <div className='absolute top-[202px] -right-[25rem] md:opacity-20 opacity-0 hidden md:block'>
            <SocialProofCard
              avatar={Avatar1}
              name='Maria Silva'
              comment={`Agradecemos à CR3 Auditoria pelo suporte eficiente durante nossa auditoria de terceira parte. A equipe demonstrou um alto nível de profissionalismo, ajudando-nos a garantir o cumprimento das normas regulatórias e a otimização dos nossos processos internos. \n 
              O relatório final foi detalhado e aprovado rapidamente, sem necessidade de ajustes, evidenciando a competência da CR3. Estamos satisfeitos com o resultado e esperamos continuar contando com seus serviços em futuras auditorias.`}
            />
          </div>

        </div>
      
      </div>
  )
}