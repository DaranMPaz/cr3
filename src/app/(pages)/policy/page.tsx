export default function Terms() {
  return(
    
    <div className="flex flex-col h-full text-theme-gray-50 pt-20 md:pt-28 bg-zinc-800">

      <div className='w-full max-w-2xl p-12 text-sm md:text-base mx-auto text-zinc-400 flex flex-col gap-12'>

        <h1 className='text-lg font-bold md:text-2xl md:leading-tight text-zinc-100 uppercase'>Política de Privacidade</h1>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Introdução:</h2>
          <p>A CR3 reconhece a importância da privacidade dos dados pessoais de nossos visitantes e usuários. Esta política de privacidade descreve como coletamos, usamos e protegemos as informações pessoais fornecidas por meio do nosso formulário de contato.</p>
          <p>Ao utilizar nosso formulário de contato, você concorda com os termos desta política de privacidade.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Informações Coletadas:</h2>
          <p>Ao preencher o formulário de contato em nosso site, podemos coletar as seguintes informações pessoais:</p>
          <ol className="flex flex-col gap-2 text-zinc-200">
            <li className="pl-4">- Seu nome completo</li>
            <li className="pl-4">- Nome da sua empresa</li>
            <li className="pl-4">- Seu endereço de e-mail</li>
            <li className="pl-4">- Seu número de telefone</li>
          </ol>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Finalidade da coleta:</h2>
          <p>As informações coletadas por meio do formulário de contato são usadas exclusivamente para os seguintes fins:</p>
          <ol className="flex flex-col gap-2 text-zinc-200">
            <li className="pl-4">- Responder a consultas ou solicitações de informações.</li>
            <li className="pl-4">- Fornecer assistência e suporte.</li>
            <li className="pl-4">- Manter registros internos para comunicações futuras.</li>
            <li className="pl-4">- Melhorar nossos serviços e atender às necessidades de nossos visitantes e clientes.</li>
          </ol>
        </div>
      
        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Armazenamento e Proteção de Dados:</h2>
          <p>Todas as informações pessoais coletadas por meio do formulário de contato são armazenadas em servidores seguros. A CR3 adota medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, uso indevido, perda ou divulgação.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Divulgação a Terceiros:</h2>
          <p>A CR3 não compartilhará, venderá ou alugará suas informações pessoais a terceiros sem seu consentimento expresso. No entanto, podemos divulgar suas informações pessoais a terceiros apenas quando exigido por lei ou regulamentação aplicável.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Seus direitos:</h2>
          <p>Você tem o direito de:</p>
          <ul className="flex flex-col gap-2 text-zinc-200">
            <li className="pl-4">- Acessar, retificar ou excluir suas informações pessoais.</li>
            <li className="pl-4">- Retirar seu consentimento a qualquer momento.</li>
            <li className="pl-4">- Obter uma cópia das suas informações pessoais que mantemos.</li>
            <li className="pl-4">- Expressar preocupações sobre o uso de suas informações pessoais.</li>
          </ul>
          <p>Para exercer esses direitos ou fazer perguntas sobre nossa política de privacidade, entre em contato conosco através dos meios de contato fornecidos no final desta política.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Alterações na Política de Privacidade:</h2>
          <p>A CR3 se reserva o direito de modificar esta política de privacidade a qualquer momento. As alterações serão publicadas em nosso site com a data de revisão atualizada.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8 ">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Contato:</h2>
          <p>Para questões relacionadas a esta política de privacidade ou para exercer seus direitos de privacidade, entre em contato conosco:</p>
          <p className="text-yellow-500 font-bold">contato@cr3auditoria.com.br</p>
        </div>

        <h3 className="text-zinc-500">Data de Revisão: 13/10/2023</h3>

      </div>

    </div>

  )
}