import { Payment } from "@/types/payment.types";
import { create } from "zustand";

const INIAL_STATUS_PAYMENT: Payment = {
  email: "",
  name: "",
  phone: "",
  status: "Pending",
};
interface IPaymentStore {
  payment: Payment;
  paymentStep: number;
  setPaymentStep: (step: "next" | "prev") => void;
  setPayment: (payment: Payment) => void;
}
export const paymentStore = create<IPaymentStore>((set) => ({
  payment: INIAL_STATUS_PAYMENT,
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
