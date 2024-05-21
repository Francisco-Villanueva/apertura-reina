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
import { Input } from "@/components/ui/input";
import { eventStore, paymentStore } from "@/store";
import { PaymentServices } from "@/services/PaymentServices";
export function PaymentForm() {
  const { setPayment, setPaymentStep, payment } = paymentStore();
  const { selectedEvent } = eventStore();

  const form = useForm<z.infer<typeof PaymentZodSchema>>({
    resolver: zodResolver(PaymentZodSchema),
    defaultValues: {
      amount: selectedEvent?.price,
      email: payment.email,
      method: payment.method,
      name: payment.name,
      paymentDate: new Date().toLocaleString(),
      phone: payment.phone,
      status: payment.status,
    },
  });

  const onSubmit = (values: z.infer<typeof PaymentZodSchema>) => {
    setPayment(values);
    setPaymentStep("next");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-primary"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
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
              <FormControl>
                <Input placeholder="Emai" type="email" {...field} />
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
              <FormControl>
                <Input placeholder="Numero de telefono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"outline"}>
          Continuar
        </Button>
      </form>
    </Form>
  );
}
