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
      className=" w-full bg-[#4287F5]"
    >
      {loading ? <Loader /> : <span>Comprar</span>}
    </Button>
  );
};
