import { eventStore } from "@/store";
import Provider from "../Provider";
import { PaymentsTable } from "@/components/Tables/PaymentsTable";
import { useState } from "react";
import { Event } from "@/types/event.types";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const { events } = eventStore();

  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const handleSelectEvent = (eventId: Event["id"]) => {
    setSelectedEvent(events.find((e) => e.id === eventId));
  };

  return (
    <Provider>
      <section className=" p-8 min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden bg-black font-montserrat ">
        <div className="w-40 aspect-video relative">
          <Image src="/reina/logo.png" alt=";reina burguesa" fill />
        </div>
        <div className="flex  flex-col gap-2">
          <Select onValueChange={(e) => handleSelectEvent(e)}>
            <SelectTrigger className="w-[350px]">
              <SelectValue placeholder="Select Event" />
            </SelectTrigger>
            <SelectContent>
              {events.map((event) => (
                <SelectItem
                  value={event.id}
                  className="flex cursor-pointer "
                  key={event.id}
                >
                  <span className="font-semibold mr-1">🗓️ {event.title}</span>
                  <span className="text-xs"> {event.date}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PaymentsTable selectedPayments={selectedEvent?.Payments} />
        </div>
      </section>
    </Provider>
  );
}
