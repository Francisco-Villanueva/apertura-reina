import { eventStore } from "@/store";
import { formatNumber } from "@/utils/formatNumber";
import React from "react";

export default function EventsInformation() {
  const { events } = eventStore();
  return (
    <div className=" flex flex-col gap-2 w-full mb-2 text-secondary ">
      <h2 className="font-semibold text-2xl text-accent/85 border-b pb-1">
        Datos generales
      </h2>
      <div className=" flex  gap-4">
        {events
          .filter((e) => !e.isPrivate)
          .map((event) => (
            <article
              className=" text-secondary rounded-t-xl w-full bg-black border border-accent/15  "
              key={event.id}
            >
              <header className="flex items-center  justify-between   p-2 rounded-t-xl border-b border-accent/35   ">
                <div className="text-lg font-semibold">{event.title}</div>
                <div className="text-lg   font-bold">
                  $ {formatNumber(event.price)}
                </div>
              </header>
              <section className="flex justify-between">
                {event.event.map((subEvent) => (
                  <section
                    className="flex flex-col items-center  w-full  py-4"
                    key={subEvent.time}
                  >
                    <h2 className="p-1  mx-auto  text-center font-semibold">
                      {subEvent.time}
                    </h2>
                    <div>
                      <div className="font-light flex justify-between gap-4">
                        <span>Cantidad vendida</span>
                        <span className="font-bold">
                          {event.Payments.filter(
                            (p) =>
                              p.status === "Approved" &&
                              subEvent.time === p.time
                          ).reduce((a, b) => a + parseInt(b.quantity)!, 0)}
                        </span>
                      </div>
                      <div className="font-light flex justify-between gap-4">
                        <span>Restantes</span>
                        <span className="font-bold">
                          {20 -
                            event.Payments.filter(
                              (p) =>
                                p.status === "Approved" &&
                                subEvent.time === p.time
                            ).reduce((a, b) => a + parseInt(b.quantity)!, 0)}
                        </span>
                      </div>
                      <div className="font-light flex justify-between gap-4">
                        <span>RECAUDACION</span>
                        <span className="font-bold">
                          ${" "}
                          {formatNumber(
                            event.Payments.filter(
                              (p) =>
                                p.status === "Approved" &&
                                subEvent.time === p.time
                            ).reduce((a, b) => a + b.amount!, 0)
                          )}
                        </span>
                      </div>
                    </div>
                  </section>
                ))}
              </section>
            </article>
          ))}
      </div>
    </div>
  );
}
