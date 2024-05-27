import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { EventServices, PaymentServices } from "@/services";
import { Payment } from "@/types/payment.types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { eventStore } from "@/store";
import { Event } from "@/types/event.types";
import { useRouter } from "next/navigation";

export function PaymenySuccess({ open = false }: { open: boolean }) {
  const [paymentDetails, setPaymentDetails] = useState<Payment>();
  const [eventDetails, setEventDetails] = useState<Event>();
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reinaPaymenttId = urlParams.get("reinaPaymenttId");
    const method = urlParams.get("payment_type");
    if (reinaPaymenttId) {
      PaymentServices.getPaymentById(reinaPaymenttId).then((res) => {
        setPaymentDetails(res);
        EventServices.getById(res.EventId!).then((res) => {
          setEventDetails(res);
        });
        PaymentServices.approbePayment({
          payment: res,
          data: {
            method: method || "",
            status: "Approved",
          },
        }).then((res) => {});
      });
    }
  }, []);
  return (
    <Sheet open={open}>
      <SheetContent className="w-1/2 max-md:w-full p-0 bg-primary border-none  flex flex-col   font-montserrat ">
        <SheetHeader className=" h-[20%] flex justify-center items-center p-0 bg-green-500  ">
          <SheetTitle className=" text-secondary text-2xl">
            Pago Confirmado
            <span className="">✅</span>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="bg-secondary max-md:w-[95%] w-5/6 mx-auto  text-primary p-4 rounded-2xl flex-grow max-h-[75%]  mt-[-50px]  flex  flex-col  justify-center items-center">
          <div className="absolute h-52 aspect-video opacity-10 z-0">
            <Image
              src="/reina/logo.png"
              alt="reina burguesa logo"
              fill
              objectFit="cover"
            />
          </div>
          {paymentDetails ? (
            <div className="flex flex-col w-full gap-8 ">
              <section className="flex flex-col gap-2   w-full">
                <h2 className="text-xl font-bold text-primary">Evento</h2>
                <h2 className="text-md font- text-primary">
                  📌 Fuerte Argentino 550, Bahía Blanca
                </h2>

                <div className="grid grid-cols-2 gap-2 w-2/3 p-4 mx-auto  mt-4">
                  <article className="flex flex-col   items-start justify-start   w-full">
                    <span>Fecha</span>
                    <p className="text-primary font-semibold">
                      {eventDetails?.date}
                    </p>
                  </article>
                  <article className="flex flex-col   items-start justify-start  w-full flex-grow">
                    <span>Horario</span>
                    <p className="text-primary font-semibold">20:00 - 23:00 </p>
                  </article>
                  <article className="flex flex-col  items-start justify-start    w-full">
                    <span>Ticket ID</span>
                    <p className="text-primary font-semibold uppercase">
                      #{paymentDetails.id?.slice(paymentDetails.id.length - 15)}
                    </p>
                  </article>
                  <article className="flex flex-col  items-start justify-start  w-full flex-grow">
                    <span>Nombre</span>
                    <p className="text-primary font-semibold">
                      {paymentDetails.name}
                    </p>
                  </article>
                </div>
              </section>
              <section className="flex flex-col  gap-2  w-full   ">
                <h2 className="text-md font-semibold">Datos de la compra</h2>
                <div className="flex flex-col gap-2  w-5/6 mx-auto">
                  <div className="flex justify-between ">
                    <span>Valor de Entrada</span>
                    <span className="font-semibold">
                      {" "}
                      $ {paymentDetails.amount}
                    </span>
                  </div>
                  <div className="flex justify-between ">
                    <span>Comprador</span>
                    <span className="font-semibold">
                      {" "}
                      {paymentDetails.name}
                    </span>
                  </div>
                  <div className="flex justify-between ">
                    <span>Email</span>
                    <span className="font-semibold">
                      {" "}
                      {paymentDetails.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Numero celular</span>
                    <span className="font-semibold">
                      {" "}
                      {paymentDetails.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha de pago</span>
                    <span className="font-semibold">
                      {paymentDetails.paymentDate
                        ? new Date(
                            paymentDetails.paymentDate
                          ).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Metodo de pago</span>
                    <span className="font-semibold">
                      {paymentDetails.method || "-"}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <Loader />
          )}
          <div className="flex flex-col justify-center  items-center  flex-grow  ">
            <h2 className="text-xl font-bold text-primary">Muchas Gracias !</h2>
            <span className="opacity-75">reina burguesa ®️</span>
          </div>
        </SheetDescription>
        <SheetFooter className="absolute bottom-0 w-full flex justify-center p-2  ">
          <Button variant={"secondary"} className="w-5/6 mx-auto">
            ⬇️ Guardar Ticket ⬇️
          </Button>
          <Button
            variant={"destructive"}
            className="w-1/4 mx-auto "
            onClick={() => router.push("/")}
          >
            Cerrar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
