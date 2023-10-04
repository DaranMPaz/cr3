'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";
import { PaddingContainer, SectionContainer, SectionImageContainer, TextSection } from '@/app/components/section'
import { FlexContainer, FlexYContainer } from "./container";

export function FaqAccordeon() {
  const answers = [
    'Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper.  Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper. ',
    'Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper.  Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper. ',
    'Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper.  Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper. ',
    'Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper.  Lorem ipsum dolor sit amet consectetur. Iaculis amet varius faucibus magna semper. '
  ]

  return(
    <>
    
    <SectionContainer padding="large" >

      <FlexYContainer gap>

        <TextSection color="text-theme-red-500" gap="gap-2" titleType="heading" title1="PERGUNTAS FREQUENTES" paragraph="Esclarecendo suas Dúvidas" />

        <Accordion variant="light">
          <AccordionItem className="text-theme-gray-400" key="1" aria-label="Accordion 1" title="Quais setores ou indústrias vocês atendem?">
            {answers[0]}
          </AccordionItem>
          <AccordionItem className="text-theme-gray-400" key="2" aria-label="Accordion 2" title="Como a CR3 se destaca em relação a outras empresas de auditoria?">
            {answers[1]}
          </AccordionItem>
          <AccordionItem className="text-theme-gray-400" key="3" aria-label="Accordion 3" title="Como vocês garantem a confidencialidade dos dados do cliente?">
            {answers[2]}
          </AccordionItem>
          <AccordionItem className="text-theme-gray-400" key="4" aria-label="Accordion 4" title="Como posso solicitar uma auditoria de terceira parte com a CR3?">
            {answers[3]}
          </AccordionItem>
        </Accordion>
      </FlexYContainer>

    </SectionContainer>
    
    </>
  )
}