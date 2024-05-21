import { z } from "zod";

export const PAYMENT_STATUSES = ["Pending", "Approved", "Refused"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const EventZodSchema = z.object({
  id: z.string().optional(),
  date: z.string(),
  title: z.string(),
  subTitle: z.string(),
  price: z.number(),
  horario: z.string(),
  description: z.array(z.string()),
});

export type Event = z.infer<typeof EventZodSchema>;
