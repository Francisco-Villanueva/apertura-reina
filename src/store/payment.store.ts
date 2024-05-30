import { Payment } from "@/types/payment.types";
import { create } from "zustand";

const INIAL_STATUS_PAYMENT: Payment = {
  email: "",
  name: "",
  phone: "",
  status: "Pending",
  dni: "",
  EventId: "",
  time: "",
  quantity: "",
};
interface IPaymentStore {
  allPayments: Payment[];
  setPayments: (payment: Payment[]) => void;
  payment: Payment;
  paymentStep: number;
  setPaymentStep: (step: "next" | "prev") => void;
  setPayment: (payment: Payment) => void;
}
export const paymentStore = create<IPaymentStore>((set) => ({
  payment: INIAL_STATUS_PAYMENT,
  allPayments: [],
  setPayments: (allPayments) => set(() => ({ allPayments })),
  paymentStep: 0,
  setPaymentStep: (step) =>
    set(({ paymentStep }) => {
      if (step === "next" && paymentStep < 2) {
        return { paymentStep: paymentStep + 1 };
      } else if (step === "prev" && paymentStep > 0) {
        return { paymentStep: paymentStep - 1 };
      } else {
        return { paymentStep };
      }
    }),
  setPayment: (payment) => set(() => ({ payment })),
}));
