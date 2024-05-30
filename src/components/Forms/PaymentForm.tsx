"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentZodSchema } from "@/types/payment.types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { eventStore, paymentStore } from "@/store";
import { Label } from "@radix-ui/react-label";
import { ReactNode } from "react";
import ProductCard from "../ProductCard";

const CustomLabel = ({ label }: { label: ReactNode }) => {
  return <Label className="text-accent/80">{label}</Label>;
};
export function PaymentForm({ closeForm }: { closeForm: () => void }) {
  const { setPayment, setPaymentStep, payment } = paymentStore();
  const { selectedEvent, setSelectedTime, selectedTime } = eventStore();

  const form = useForm<z.infer<typeof PaymentZodSchema>>({
    resolver: zodResolver(PaymentZodSchema),
    mode: "onChange",
    defaultValues: {
      amount: selectedEvent?.price,
      email: payment.email,
      method: payment.method,
      name: payment.name,
      paymentDate: new Date().toLocaleString(),
      phone: payment.phone,
      status: payment.status,
      dni: payment.dni,
      time: selectedTime,
      quantity: payment.quantity,
    },
  });
  const onSubmit = () => {
    if (form.getValues().time) setSelectedTime(form.getValues().time);
    setPayment(form.getValues());
    setPaymentStep("next");
  };

  const availiableEventHours = selectedEvent?.event.filter(
    (event) => event.availables > 0
  );

  let TICKETS_QUANTITY: string[];
  if (form.getValues().time) {
    const avialblesByTime = selectedEvent?.event.filter(
      (event) => event.time === form.getValues().time
    )[0].availables;
    TICKETS_QUANTITY = ["1", "2", "3", "4"].filter(
      (value) => parseInt(value) <= avialblesByTime!
    );
  }

  return (
    <Form {...form}>
      <form className="flex flex-col  justify-between items-center  h-full p-4">
        <div className="space-y-8 w-full mx-auto text-primary">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Nombre y Apellido" />
                <FormControl>
                  <Input placeholder="Nombre y Apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Email" />

                <FormControl>
                  <Input
                    placeholder="example@mail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Numero de celular" />

                <FormControl>
                  <Input placeholder="+54 291 1234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dni"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="DNI" />

                <FormControl>
                  <Input placeholder="DNI" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <CustomLabel label="Horario" />
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Elegir horario" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availiableEventHours?.map((event) => (
                      <SelectItem
                        key={event.time}
                        value={event.time}
                        className="font-montserrat flex"
                      >
                        <div className="flex flex-grow gap-4 items-center justify-between  w-50  ">
                          <span>{event.time}</span>
                          <span className="border px-1 bg-reina-red/50 rounded-md">
                            {" "}
                            {event.availables}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {form.getValues().time && (
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <CustomLabel label="Canitdad de tickets" />
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccion la cantidad de tickets a comprar" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TICKETS_QUANTITY?.map((quantity) => (
                        <SelectItem
                          key={quantity}
                          value={quantity}
                          className="font-montserrat flex"
                        >
                          <div className="flex flex-grow gap-4 items-center justify-between  w-50  ">
                            <span>{quantity}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          )}
        </div>

        <section className="flex items-center w-full gap-2">
          <Button
            onClick={onSubmit}
            variant={"outline"}
            className="w-5/6 "
            disabled={!form.formState.isValid}
          >
            Continuar
          </Button>
          <Button
            onClick={closeForm}
            variant={"default"}
            className="w-1/3 border "
          >
            volver
          </Button>
        </section>
      </form>
    </Form>
  );
}
