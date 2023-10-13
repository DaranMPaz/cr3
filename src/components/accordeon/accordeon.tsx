'use client'
import {Accordion, AccordionItem} from "@nextui-org/react"
import { FlexYContainer } from "../Container"
import Container from "../section/SectionContainer"
import TextContent from "../TextContent"

export default function FAQAccordion() {
  const answers = [
    'A CR3 Auditoria atende uma variedade de setores e indústrias. Nossos serviços de auditoria e consultoria são adaptáveis e podem ser personalizados para atender às necessidades específicas de organizações em diversos setores. Independentemente do setor em que sua empresa atua, a CR3 Auditoria está comprometida em fornecer soluções contábeis e financeiras de alta qualidade e orientação especializada para ajudar sua organização a atingir seus objetivos.',

    'A CR3 Auditoria se destaca de outras empresas de auditoria devido à nossa equipe altamente qualificada, abordagem personalizada, uso de tecnologia avançada, compromisso com a qualidade, atendimento ao cliente excepcional e valores éticos sólidos. Estamos comprometidos em oferecer soluções sob medida para atender às necessidades exclusivas de nossos clientes.',

    'Garantimos a confidencialidade dos dados do cliente por meio de rigorosas políticas de segurança e estritas práticas internas. Nossa equipe é treinada para tratar as informações dos clientes com o mais alto nível de confidencialidade. Além disso, implementamos medidas de segurança de dados avançadas para proteger as informações confiadas a nós. Essas medidas incluem o uso de sistemas de segurança de dados, controle de acesso restrito e conformidade com regulamentos de privacidade aplicáveis. A segurança e a confidencialidade dos dados de nossos clientes são prioridades máximas para nós.',
    
    'Você pode solicitar uma auditoria de terceira parte com a CR3 Auditoria entrando em contato conosco diretamente. Nossa equipe de especialistas em auditoria está à disposição para discutir suas necessidades específicas e orientá-lo sobre o processo. Você pode nos contatar por telefone, e-mail ou preenchendo o formulário de contato em nosso site. Estamos prontos para ajudá-lo a agendar uma auditoria que atenda às suas necessidades e requisitos.'
  ]

  return(
    <div className='pt-[80px]' data-aos="fade-up">
    
      <Container padding="large" >

        <FlexYContainer gap>

          <TextContent color="text-red-400" gap="gap-2" titleType="heading" title1="PERGUNTAS FREQUENTES" paragraph="Esclarecendo suas Dúvidas" />

          <Accordion variant="light">
            <AccordionItem className="text-zinc-400 leading-relaxed text-sm md:text-base" key="1" aria-label="Accordion 1" title="Quais setores ou indústrias vocês atendem?">
              {answers[0]}
            </AccordionItem>
            <AccordionItem className="text-zinc-400 leading-relaxed text-sm md:text-base" key="2" aria-label="Accordion 2" title="Como a CR3 se destaca em relação a outras empresas de auditoria?">
              {answers[1]}
            </AccordionItem>
            <AccordionItem className="text-zinc-400 leading-relaxed text-sm md:text-base" key="3" aria-label="Accordion 3" title="Como vocês garantem a confidencialidade dos dados do cliente?">
              {answers[2]}
            </AccordionItem>
            <AccordionItem className="text-zinc-400 leading-relaxed text-sm md:text-base" key="4" aria-label="Accordion 4" title="Como posso solicitar uma auditoria de terceira parte com a CR3?">
              {answers[3]}
            </AccordionItem>
          </Accordion>
        </FlexYContainer>

      </Container>    
    
    </div>
  )
}