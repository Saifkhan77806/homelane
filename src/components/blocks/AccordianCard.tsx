import type React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
interface Props {
  accordionData: {
    question: string;
    answer: React.ReactNode;
  }[];
}

export function AccordianCard({ accordionData }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {accordionData.map((el, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{el.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {el.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
