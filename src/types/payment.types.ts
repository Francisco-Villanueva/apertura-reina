import { z } from "zod";

export const PAYMENT_STATUSES = ["Pending", "Approved", "Refused"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const PaymentZodSchema = z.object({
  id: z.string().optional(),
  status: z.enum(PAYMENT_STATUSES),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  method: z.string().optional(),
  paymentDate: z.string().optional(),
  amount: z.number().optional(),
});

export type Payment = z.infer<typeof PaymentZodSchema>;
