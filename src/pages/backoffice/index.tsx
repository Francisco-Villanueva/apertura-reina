import { eventStore } from "@/store";
import Provider from "../Provider";
import { PaymentsTable } from "@/components/Tables/PaymentsTable";
import { useEffect, useState } from "react";
import { Event } from "@/types/event.types";
import Image from "next/image";

import { SelectEvents } from "@/components/Events/SelectEvents";
import { useRouter } from "next/router";
import EventsInformation from "./components/EventsInformation";

export default function Page() {
  const { events } = eventStore();
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const admin = urlParams.get("admin");
    if (admin !== process.env.NEXT_PUBLIC_ADMIN) {
      router.push("/");
    }
  });
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const handleSelectEvent = (eventId: Event["id"]) => {
    setSelectedEvent(events.find((e) => e.id === eventId));
  };

  return (
    <Provider>
      <section className=" min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden bg-black font-montserrat ">
        <div className="p-8 bg-primary">
          <EventsInformation />
        </div>
        <div className="h-full flex flex-col p-8 ">
          <div className="w-40 aspect-video relative">
            <Image src="/reina/logo.png" alt=";reina burguesa" fill />
          </div>
          <div className="flex  flex-col gap-2">
            <h2 className="font-semibold text-2xl text-accent/50 border-b pb-1">
              Detalles de los pagos
            </h2>
            <SelectEvents handleSelectEvent={handleSelectEvent} />
            <PaymentsTable selectedPayments={selectedEvent?.Payments} />
          </div>
        </div>
      </section>
    </Provider>
  );
}
