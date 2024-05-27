import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { PaymentForm } from "../Forms";
import ProductCard from "../ProductCard";
import { eventStore, paymentStore } from "@/store";
import { Event } from "@/types/event.types";
import { MercadoPagoButton } from "../MercadoPagoButton";
import { PaymentDetails } from "../Payments";
export function ClientDataAside({ product }: { product: Event }) {
  const { setSelectedEvent, selectedEvent } = eventStore();
  const { paymentStep, payment, setPaymentStep } = paymentStore();
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"secondary"} onClick={() => setSelectedEvent(product)}>
          Comprar
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 max-md:w-full p-0 bg-primary border-none  flex flex-col   font-montserrat ">
        <SheetHeader className=" flex justify-center items-center p-4 ">
          <SheetTitle className=" text-secondary text-2xl">
            {paymentStep === 0 && (
              <div>
                Completar con tus datos
                <span className="">📜</span>
              </div>
            )}
            {paymentStep === 1 && (
              <div>
                Detalles de la compra
                <span className=""></span>
              </div>
            )}
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex flex-col  h-full   gap-4 px-6">
          <div className="w-full h-full">
            {paymentStep === 0 && <PaymentForm />}
            {paymentStep === 1 && (
              <div className="flex flex-col justify-between  h-full">
                <div className="px-4 flex-grow flex flex-col">
                  <span className="italic">Detalles de la compra</span>
                  <div className="rounded-lg flex-grow  text-secondary ">
                    <PaymentDetails paymentDetails={payment} />
                  </div>
                </div>
                <span className="w-full m-auto  text-md text-secondary ">
                  ⚠️Por favor respetar los horarios, por la capacidad del lugar
                  ⚠️
                </span>
                <div className="w-full flex justify-center p-2 gap-2 ">
                  <MercadoPagoButton />
                  <Button
                    className="  bg-primary border border-accent/25 "
                    onClick={() => setPaymentStep("prev")}
                  >
                    volver
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
