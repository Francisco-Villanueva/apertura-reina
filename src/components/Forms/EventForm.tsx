"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventZodSchema } from "@/types/event.types";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Event } from "@/types/event.types";
import { Label } from "@radix-ui/react-label";
import { ReactNode } from "react";

const CustomLabel = ({ label }: { label: ReactNode }) => {
  return <Label className="text-accent/80">{label}</Label>;
};

export function EventForm({
  closeForm,
  selectedEvent,
}: {
  selectedEvent: Event;
  closeForm: () => void;
}) {
  const form = useForm<z.infer<typeof EventZodSchema>>({
    resolver: zodResolver(EventZodSchema),
    mode: "onChange",
    defaultValues: {
      id: selectedEvent?.id || "",
      date: selectedEvent?.date || "",
      title: selectedEvent?.title || "",
      subTitle: selectedEvent?.subTitle || "",
      price: selectedEvent?.price || 0,
      event: selectedEvent?.event || [{ time: "", availables: 0 }],
      description: selectedEvent?.description || [""],
      Payments: selectedEvent?.Payments || [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "event",
  });
  const onSubmit = (data: z.infer<typeof EventZodSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 justify-between items-center h-full "
        // onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-8 w-full mx-auto text-primary">
          <section className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <CustomLabel label="Título del Evento" />
                  <FormControl>
                    <Input placeholder="Título del Evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subTitle"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <CustomLabel label="Subtítulo del Evento" />
                  <FormControl>
                    <Input placeholder="Subtítulo del Evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <CustomLabel label="Fecha del Evento" />
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Fecha del Evento"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <CustomLabel label="Precio del Evento" />
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Precio del Evento"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Descripción del Evento" />
                <FormControl>
                  <Input placeholder="Descripción del Evento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full ">
          <FormField
            control={form.control}
            name="event"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Detalles del Evento" />
                {fields.map((item, index) => (
                  <div key={item.id} className="flex space-x-4 mb-4">
                    <FormField
                      control={form.control}
                      name={`event.${index}.time`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Horario" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`event.${index}.availables`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Disponibles"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </FormItem>
            )}
          />
        </div>
        <section className="flex items-center w-full gap-2">
          <Button
            type="submit"
            variant="outline"
            className="w-5/6"
            onClick={() => form.handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
          <Button
            onClick={closeForm}
            variant="default"
            className="w-1/3 border"
          >
            Volver
          </Button>
        </section>
      </form>
    </Form>
  );
}
