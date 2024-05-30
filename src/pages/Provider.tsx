import { Toaster } from "@/components/ui/toaster";
import { EventServices, PaymentServices } from "@/services";
import { eventStore, paymentStore } from "@/store";
import React, { ReactNode, useEffect } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const { setEvents } = eventStore();
  const { setPayments } = paymentStore();
  useEffect(() => {
    EventServices.getAll().then((res) => setEvents(res));
    PaymentServices.getAll().then((res) => setPayments(res));
  }, []);
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
