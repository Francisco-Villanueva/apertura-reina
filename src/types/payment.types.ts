import { z } from "zod";

export const PAYMENT_STATUSES = ["Pending", "Approved", "Refused"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const PaymentZodSchema = z.object({
  id: z.string().optional(),
  status: z.enum(PAYMENT_STATUSES).optional(),
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(8),
  dni: z.string().min(7),
  time: z.string().min(1),
  EventId: z.string().optional(),
  confirmAsist: z.string().optional(),
  method: z.string().optional(),
  paymentDate: z.string().optional(),
  amount: z.number().optional(),
});

export type Payment = z.infer<typeof PaymentZodSchema>;
