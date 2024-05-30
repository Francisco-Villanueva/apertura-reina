import { eventStore } from "@/store";
import { Payment } from "@/types/payment.types";
import React from "react";

export function PaymentDetails({
  paymentDetails,
}: {
  paymentDetails: Payment;
}) {
  const { selectedEvent, selectedTime } = eventStore();
  return (
    <div className=" h-full flex flex-col  gap-4">
      <div className="flex flex-col gap-2  w-full">
        <h2 className="text-xl font-bold ">{selectedEvent?.title}</h2>
        <h2 className="text-md font- ">
          📌 Fuerte Argentino 285, Bahía Blanca
        </h2>

        <div className="grid grid-cols-2 grid-rows-2  gap-2 p-4 ">
          <article className="flex flex-col   items-start justify-start   w-full">
            <span>Fecha</span>
            <p className=" font-semibold">{selectedEvent?.date}</p>
          </article>
          <article className="flex flex-col   items-start justify-start  w-full flex-grow">
            <span>Horario</span>
            <p className=" font-semibold">{selectedTime} </p>
          </article>
          <article className="flex flex-col  items-start justify-start    w-full">
            <span>Ticket ID</span>
            <p className=" font-semibold">
              #
              {selectedEvent?.id
                .slice(selectedEvent?.id.length - 15)
                .toUpperCase()}{" "}
            </p>
          </article>
          <article className="flex flex-col  items-start justify-start  w-full flex-grow">
            <span>Nombre</span>
            <p className=" font-semibold">{paymentDetails.name}</p>
          </article>
        </div>
      </div>
      <div className="flex flex-col  gap-2  w-full  ">
        <h2 className="text-md font-semibold">Datos de la compra</h2>
        <div className="flex flex-col gap-2  w-5/6 mx-auto">
          <div className="flex justify-between ">
            <span>Valor de Entrada</span>
            <span className="font-semibold"> $ {paymentDetails.amount}</span>
          </div>
          <div className="flex justify-between ">
            <span>Comprador</span>
            <span className="font-semibold"> {paymentDetails.name}</span>
          </div>
          <div className="flex justify-between ">
            <span>Email</span>
            <span className="font-semibold"> {paymentDetails.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Numero celular</span>
            <span className="font-semibold"> {paymentDetails.phone}</span>
          </div>
          <div className="flex justify-between">
            <span>DNI</span>
            <span className="font-semibold"> {paymentDetails.dni}</span>
          </div>
          <div className="flex justify-between">
            <span>Pago #</span>
            <span className="font-semibold">#ahsd86512_abd71</span>
          </div>
        </div>
      </div>
    </div>
  );
}
