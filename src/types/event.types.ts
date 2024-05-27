import { z } from "zod";
import { PaymentZodSchema } from "./payment.types";

export const PAYMENT_STATUSES = ["Pending", "Approved", "Refused"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];
const EventDetailsZodSchema = z.object({
  time: z.string().nonempty(),
  availables: z.number(),
});
export type EventDetails = z.infer<typeof EventDetailsZodSchema>;
export const EventZodSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  subTitle: z.string(),
  price: z.number(),
  event: z.array(EventDetailsZodSchema),
  description: z.array(z.string()),
  availables: z.number(),
  Payments: z.array(PaymentZodSchema),
});

export type Event = z.infer<typeof EventZodSchema>;
