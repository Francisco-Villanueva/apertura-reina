import { useEffect, useState } from "react";
import Background from "@/components/Background/Background";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/mock/product";
import Landing from "@/components/Landing";
import { PaymenySuccess } from "@/components/Notification";
import { PaymentForm } from "@/components/Forms";
import { Payment } from "@/types/payment.types";

interface NotificationType {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}

export default function Home() {
  const [notification, setNotification] = useState<NotificationType>({
    isOpen: false,
    type: null,
    content: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    if (status === "approved") {
      setNotification({
        content: "Pago aprobado!",
        isOpen: true,
        type: "approved",
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: "failure",
      });
    }
  }, []);

  return (
    <main
      className={` min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden  font-montserrat flex flex-col `}
    >
      <PaymenySuccess open={notification.isOpen} />

      <Background />
      <div className=" h-full  ">
        <Landing />

        <section className=" bg-foreground h-full pt-10 px-10 max-md:px-5   flex gap-4  justify-between ">
          <div className="w-3/4   max-lg:w-full h-full flex flex-col gap-4     ">
            <h2 className="text-secondary font-semibold text-2xl">
              Eventos de apertura
            </h2>

            <div className="  max-h-[90%] overflow-auto max-md:px-2">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
          <div className="w-1/4  max-lg:w-0 transition-all duration-300 ">
            <div className=" w-full flex flex-col items-center justify-around h-full">
              <div className="w-2/3 aspect-square  relative opacity-50">
                <Image
                  src={"/reina/clasica.jpg"}
                  alt="burger reina burguesa"
                  fill
                  priority
                  className="rounded-lg"
                  objectFit="cover"
                />
              </div>

              <div className="w-2/3 aspect-square  relative opacity-50">
                <Image
                  src={"/reina/cuarto.jpg"}
                  alt="burger reina burguesa"
                  fill
                  priority
                  className="rounded-lg"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
