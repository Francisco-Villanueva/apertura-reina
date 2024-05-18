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
export function PaymentForm() {
  const form = useForm<z.infer<typeof PaymentZodSchema>>({
    resolver: zodResolver(PaymentZodSchema),
    defaultValues: {
      amount: 0,
      email: "",
      method: "",
      name: "",
      paymentDate: "",
      phone: "",
      status: "Pending",
    },
  });

  const onSubmit = (values: z.infer<typeof PaymentZodSchema>) => {
    console.log("first");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
              {/* <FormLabel>Nombre</FormLabel> */}
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
              {/* <FormLabel>Email</FormLabel> */}
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
              {/* <FormLabel>Celular</FormLabel> */}
              <FormControl>
                <Input placeholder="Numero de telefono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentDate"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Celular</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Numero de telefono"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"outline"}>
          Cargar Datos
        </Button>
      </form>
    </Form>
  );
}
