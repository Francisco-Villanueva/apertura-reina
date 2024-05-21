import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { Event } from "@/types/event.types";
import { eventStore, paymentStore } from "@/store";
import { Loader } from "../Loader";

export const MercadoPagoButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { payment } = paymentStore();
  const { selectedEvent } = eventStore();

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const { data: preference } = await axios.post("/api/checkout", {
        product: selectedEvent,
        payment,
      });

      router.push(preference.url!);
    } catch (error) {
      console.log("falla el API CHECKOUT", { error });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={"secondary"}
      onClick={handleCheckout}
      disabled={!payment || !selectedEvent?.title}
      className=" w-full"
    >
      {loading ? <Loader /> : <span>Comprar</span>}
    </Button>
  );
};
