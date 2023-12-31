'use client'
import Centered from '@/components/section/Centered'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Metodologia1 from '../../public/metodology/metodology-1.jpg'
import Metodologia2 from '../../public/metodology/metodology-2.jpg'
import Metodologia3 from '../../public/metodology/metodology-3.jpg'
import Metodologia4 from '../../public/metodology/metodology-4.jpg'
import { TimeLineCard, TimelineDivider } from './Card'
import { FlexContainer } from './Container'

export default function Metodology() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div data-aos="fade-up">
      <Centered title="Nossa Metodologia de Trabalho" paragraph="Compromisso com a Excelência e Resultados" icon >
        <FlexContainer>
          <TimeLineCard image={Metodologia1} title="Definição de escopo" paragraph="Definição do escopo da auditoria, considerando estados de atuação, número de operadores homologados e relação de empresas aderentes ao sistema." />
          <TimelineDivider />
          <TimeLineCard image={Metodologia2} title="Planejamento Estratégico" paragraph="Desenvolvimento de um plano estratégico personalizado." />
          <TimelineDivider />
          <TimeLineCard image={Metodologia3} title="Execução Precisa" paragraph="Execução das auditorias de acordo com as particularidades de cada unidade da federação." />
          <TimelineDivider />
          <TimeLineCard image={Metodologia4} title="Entrega de relatório" paragraph="Avaliação final e entrega da declaração de auditoria de terceira parte quanto ao cumprimento das metas propostas e dos requisitos descritos nas legislações." />
        </FlexContainer>
      </Centered>
    </div>
  )
}
export function MetodologyIso() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div data-aos="fade-up">
      <Centered title="Nossa Metodologia de Trabalho" paragraph="Compromisso com a Excelência e Resultados" icon >
        <FlexContainer>
          <TimeLineCard image={Metodologia1} title="Definição de escopo" paragraph="Definição do escopo da implementação. Quais linhas, setores e unidades serão implementadas as normas da ISO." />
          <TimelineDivider />
          <TimeLineCard image={Metodologia2} title="Planejamento Estratégico" paragraph="Desenvolvimento de um plano estratégico personalizado para a sua empresa." />
          <TimelineDivider />
          <TimeLineCard image={Metodologia3} title="Execução Precisa" paragraph="Execução do plano de implementação nos mínimos detalhes e garantindo a conformidade com as normas." />
        </FlexContainer>
      </Centered>
    </div>
  )
}