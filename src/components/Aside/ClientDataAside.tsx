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
import { MercadoPagoButton } from "../MercadoPagoButton";
import { IProduct } from "@/mock/product";
import ProductCard from "../ProductCard";
export function ClientDataAside({ product }: { product: IProduct }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"secondary"}>Comprar</Button>
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
          <div className="w-5/6">
            <PaymentForm />
          </div>
        </SheetDescription>
        <SheetFooter className="absolute bottom-0 w-full flex justify-center p-2  ">
          <MercadoPagoButton product={product} />
          <Button variant={"destructive"} className="w-1/4 mx-auto " disabled>
            Cerrar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
