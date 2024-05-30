import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

export function FrecuentsQuestions() {
  return (
    <div className="flex flex-col gap-2 text-accent p-5 mx-auto bg-foreground">
      <h2 className="font-semibold text-xl text-accent/50">
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full  ">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿La burger puede ser triple?</AccordionTrigger>
          <AccordionContent>No, no seas goloso.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Y si no llego a comprar el ticket, ¿puedo consumir el local?
          </AccordionTrigger>
          <AccordionContent>No, pero podés venir a retirar.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Puedo tomar coquita de vidrio ahí?
          </AccordionTrigger>
          <AccordionContent>Si.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            ¿Me puedo llevar la coquita de vidrio a casa?
          </AccordionTrigger>
          <AccordionContent>
            No, porque el envase es retornable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            ¿Cuántos vasos de vermú puedo tomar?
          </AccordionTrigger>
          <AccordionContent>Apelamos al consumo consciente.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            ¿Siguen vendiendo el sanguche de bondiola desmechada de Hoppy?
          </AccordionTrigger>
          <AccordionContent>No, ahora vendemos burgers.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            ¿El ticket incluye la receta de las papas?
          </AccordionTrigger>
          <AccordionContent>No.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
