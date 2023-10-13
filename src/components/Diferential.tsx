'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Diferential1 from '../../../public/diferentials/diferencial-1.jpg'
import Diferential2 from '../../../public/diferentials/diferencial-2.jpg'
import Diferential3 from '../../../public/diferentials/diferencial-3.jpg'
import Centered from './section/Centered'
import { GridContainer } from './Container'
import { VerticalCard } from './Card'

export default function Diferential(){

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return(
    <div data-aos="fade-up">
      <Centered title="Nossos Diferenciais" paragraph="Compromisso, Inovação e Resultados" >
        <GridContainer cols="grid-cols-1 md:grid-cols-3" gap>
          <VerticalCard image={Diferential1} title1="Abordagem" title2="Inovadora" paragraph1="A inovação está no cerne de tudo o que fazemos." paragraph2="Somos pioneiros na aplicação de metodologias de auditoria avançadas, permitindo-nos oferecer insights valiosos e recomendações acionáveis aos nossos clientes."/>
          <VerticalCard image={Diferential2} title1="Compromisso" title2="com a Excelência" paragraph1="Temos o compromisso com a excelência." paragraph2="Cada auditoria que realizamos é conduzida com atenção meticulosa aos detalhes, garantindo a conformidade rigorosa e a confiabilidade dos dados."/>
          <VerticalCard image={Diferential3} title1="Resultados" title2="Mensuráveis" paragraph1="Nossas sugestões impulsionam conformidade, sustentabilidade e competitividade." paragraph2="Não medimos nosso sucesso apenas pela conclusão das auditorias, mas pelos resultados reais que proporcionamos aos nossos clientes."/>
        </GridContainer>
      </Centered>
    </div>
  )
}