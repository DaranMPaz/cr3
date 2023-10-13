import Link from "next/link";

export default function Terms() {
  return(
    
    <div className="flex flex-col h-full text-theme-gray-50 pt-20 md:pt-28 bg-zinc-800">

      <div className='w-full max-w-2xl p-12 text-sm md:text-base mx-auto text-zinc-400 flex flex-col gap-12'>

        <h1 className='text-lg font-bold md:text-2xl md:leading-tight text-zinc-100 uppercase'>Termos Legais e Condições de Uso</h1>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Introdução:</h2>
          <p>Estes Termos Legais e Condições de Uso &quot;Termos&quot; regulam o uso do site da CR3. Ao acessar ou usar nosso site, você concorda em cumprir estes Termos e todas as leis e regulamentações aplicáveis. Se você não concordar com esses Termos, não utilize nosso site.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Uso do Site:</h2>

          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">- Informações de Contato: </b>Ao usar nosso formulário de contato, você concorda em fornecer informações precisas e atualizadas, incluindo nome, empresa, endereço de e-mail e telefone.</p>

          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">- Conduta Aceitável: </b>Você concorda em não usar nosso site para fins ilegais, difamatórios, ofensivos ou prejudiciais a terceiros. Não é permitido o envio de informações falsas ou enganosas.</p>

        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Propriedade Intelectual:</h2>

          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">Direitos Autorais: </b>Todo o conteúdo e materiais presentes neste site, incluindo, mas não se limitando a textos, gráficos, logotipos, imagens e software, são protegidos por direitos autorais e são de propriedade da CR3 ou de terceiros com licença para uso. Você não tem permissão para reproduzir, distribuir, modificar ou utilizar qualquer conteúdo deste site sem autorização prévia por escrito.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Isenção de Responsabilidade:</h2>

          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">- Precisão das Informações: </b>A CR3 se esforça para fornecer informações precisas e atualizadas em nosso site. No entanto, não garantimos a exatidão, integridade ou atualização das informações. O uso das informações deste site é por sua conta e risco.</p>

          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">- Links Externos: </b>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites. A inclusão de links não implica endosso ou afiliação com os proprietários desses sites.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Privacidade:</h2>
          <div className="flex items-center gap-2">
          <p><b className="className='font-bold md:text-base md:leading-tight text-zinc-100'">- Política de Privacidade: </b>A coleta e o uso de informações pessoais pelo nosso site estão sujeitos à nossa <Link className="text-yellow-500 underline hover:text-red-400" href={'/policy'}>Política de Privacidade</Link>  Leia-a atentamente para entender como suas informações são tratadas.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Alterações nos Termos:</h2>
          <p>A CR3 se reserva o direito de modificar estes Termos a qualquer momento, publicando uma versão revisada em nosso site. Recomendamos verificar periodicamente os Termos para estar ciente de quaisquer alterações.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Lei Aplicável:</h2>
          <p>Estes Termos são regidos pelas leis do [inserir país ou jurisdição] e qualquer litígio relacionado a estes Termos será submetido à jurisdição exclusiva dos tribunais competentes dessa jurisdição.</p>
        </div>

        <div className="flex flex-col gap-2 leading-8 ">
          <h2 className='text-base font-bold md:text-lg md:leading-tight text-zinc-200'>Contato:</h2>
          <p>Para entrar em contato conosco para esclarecimentos ou perguntas relacionadas a estes Termos, utilize as informações de contato fornecidas em nosso site.</p>
        </div>
        
        <h3 className="text-zinc-500">Data de Revisão: 13/10/2023</h3>

      </div>

    </div>

  )
}