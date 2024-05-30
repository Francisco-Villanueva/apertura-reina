import { eventStore } from "@/store";
import Provider from "../Provider";
import { PaymentsTable } from "@/components/Tables/PaymentsTable";
import { useState } from "react";
import { Event } from "@/types/event.types";
import Image from "next/image";

import { EditEventForm } from "@/components/Events/Backoffice";
import { SelectEvents } from "@/components/Events/SelectEvents";

export default function Page() {
  const { events } = eventStore();

  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const handleSelectEvent = (eventId: Event["id"]) => {
    setSelectedEvent(events.find((e) => e.id === eventId));
  };

  return (
    <Provider>
      <section className=" p-8 min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden bg-black font-montserrat ">
        <div className="h-full  flex-col">
          <div className="w-40 aspect-video relative">
            <Image src="/reina/logo.png" alt=";reina burguesa" fill />
          </div>
          <div className="flex  flex-col gap-2">
            <SelectEvents handleSelectEvent={handleSelectEvent} />
            <PaymentsTable selectedPayments={selectedEvent?.Payments} />
          </div>
        </div>
        <section className="border-t pt-4">
          <h2 className="text-accent/70">Editor de Eventos</h2>

          <div>
            <EditEventForm />
          </div>
        </section>
      </section>
    </Provider>
  );
}
