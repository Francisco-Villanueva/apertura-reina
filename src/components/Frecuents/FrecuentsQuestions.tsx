import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
type QuestionTpye = {
  question: string;
  answer: string;
};
export function FrecuentsQuestions() {
  const QUESTIONS: QuestionTpye[] = [
    {
      question: "¿La burger puede ser triple?",
      answer: "No, no seas goloso.",
    },
    {
      question: "Y si no llego a comprar el ticket, ¿puedo consumir el local?",
      answer: "No, pero podés venir a retirar.",
    },
    {
      question: " ¿Puedo tomar coquita de vidrio ahí?",
      answer: "Si..",
    },
    {
      question: "¿La burger puede ser veggie?",
      answer: "Por supuesto.",
    },
    {
      question: "¿Me puedo llevar la coquita de vidrio a casa?",
      answer: " No, porque el envase es retornable.",
    },
    {
      question: " ¿Cuántos vasos de vermú puedo tomar?",
      answer: "Apelamos al consumo consciente.",
    },
    {
      question:
        "¿Siguen vendiendo el sanguche de bondiola desmechada de Hoppy?",
      answer: "No, ahora vendemos burgers.",
    },
    {
      question: " ¿El ticket incluye la receta de las papas?",
      answer: "No.",
    },
  ];
  return (
    <div className="flex flex-col gap-2 text-accent p-5 mx-auto bg-foreground">
      <h2 className="font-semibold text-xl text-accent/50">
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full  ">
        {QUESTIONS.map(({ answer, question }, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
