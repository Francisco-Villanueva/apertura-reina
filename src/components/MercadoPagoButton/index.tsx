import { useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { eventStore, paymentStore } from "@/store";
import { Loader } from "../Loader";
import { useToast } from "../ui/use-toast";

export const MercadoPagoButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();
  const { payment } = paymentStore();
  const { selectedEvent, selectedTime } = eventStore();

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const { data: preference } = await axios.post("/api/checkout", {
        product: selectedEvent,
        payment,
        time: selectedTime,
      });

      router.push(preference.url!);
    } catch (error) {
      toast({
        title: "Error en la compra",
        description: (
          <div>
            <span className="font-semibold">Posibles razones</span>
            <ol className="pl-2 italic text-xs ">
              <li>🕓 Este ticket ya no se encuntra disponible.</li>
              <li>
                🗓️ La cantidad de entradas solicitadas supera la cantidad de
                entradas disponibles.
              </li>
            </ol>

            <br />
            <hr />
            <br />

            <div className="flex justify-between w-full">
              <span className="py-1">Vuelve al inicio y pruebe nuevamente</span>

              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => {
                  console.log("volver");
                  router.push("/");
                  location.reload();
                }}
              >
                vovler
              </Button>
            </div>
          </div>
        ),
        variant: "destructive",
      });
      // alert("fallo el pago");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      // variant={"secondary"}
      onClick={handleCheckout}
      disabled={!payment || !selectedEvent?.title}
      className=" w-full bg-[#4287F5] hover:bg-[#4287F5]/85"
    >
      {loading ? <Loader /> : <span>Confirmar Compra</span>}
    </Button>
  );
};
