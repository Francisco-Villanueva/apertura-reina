import { eventStore } from "@/store";
import Provider from "../Provider";
import { PaymentsTable } from "@/components/Tables/PaymentsTable";
import { useState } from "react";
import { Event } from "@/types/event.types";
import Image from "next/image";

import { SelectEvents } from "@/components/Events/SelectEvents";
import { formatNumber } from "@/utils/formatNumber";

export default function Page() {
  const { events } = eventStore();

  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const handleSelectEvent = (eventId: Event["id"]) => {
    setSelectedEvent(events.find((e) => e.id === eventId));
  };

  return (
    <Provider>
      <section className=" p-8 min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden bg-black font-montserrat ">
        <div className="h-full flex flex-col ">
          <div className="w-40 aspect-video relative">
            <Image src="/reina/logo.png" alt=";reina burguesa" fill />
          </div>
          <div className="flex  flex-col gap-2">
            <SelectEvents handleSelectEvent={handleSelectEvent} />
            <PaymentsTable selectedPayments={selectedEvent?.Payments} />
          </div>
        </div>
      </section>
      <section className="p-8 min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] bg-primary text-accent/70">
        <div className="h-full flex flex-col gap-4">
          {events.map((event) => (
            <article
              className="border border-black  rounded-xl w-1/4"
              key={event.id}
            >
              <header className="flex items-center  justify-between bg-black text-reina-yellow p-2 rounded-t-xl  ">
                <div className="text-lg font-semibold">{event.title}</div>
                <div className="text-lg  text-reina-yellow font-bold">
                  $ {formatNumber(event.price)}
                </div>
              </header>

              <section className="p-2 ">
                <div className="font-light flex justify-between gap-4">
                  <span>Cantidad vendida</span>
                  <span className="font-bold">
                    {event.Payments.reduce(
                      (a, b) => a + parseInt(b.quantity)!,
                      0
                    )}
                  </span>
                </div>
                <div className="font-light flex justify-between gap-4">
                  <span>RECAUDACION</span>
                  <span className="font-bold">
                    ${" "}
                    {formatNumber(
                      event.Payments.reduce((a, b) => a + b.amount!, 0)
                    )}
                  </span>
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>
    </Provider>
  );
}
