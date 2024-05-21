import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
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
            Completar con tus datos
            <span className="">📜</span>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex flex-col  items-center justify-center  gap-4 px-6">
          <ProductCard product={product} readonly />
          <div className="w-full ">
            {paymentStep === 0 && <PaymentForm />}
            {paymentStep === 1 && (
              <div>
                <h1 className="text-xl  text-white">Confirmar Compra</h1>
                <div>
                  <span className="italic">Detalles de la compra</span>
                  <div className="flex flex-col gap-2 text-lg text-white p-4 border border-accent/25 rounded-md">
                    <span> {selectedEvent?.title}</span>
                    <span> $ {selectedEvent?.price}</span>
                    <span> {selectedEvent?.date}</span>

                    <div className="flex flex-col gap-2">
                      <span>{payment.name}</span>
                      <span>{payment.email}</span>
                      <span>{payment.phone}</span>
                    </div>
                  </div>
                </div>
                <div className=" w- flex justify-center p-2  ">
                  <MercadoPagoButton />
                  <Button
                    variant={"outline"}
                    className="w-1/4 mx-auto "
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
