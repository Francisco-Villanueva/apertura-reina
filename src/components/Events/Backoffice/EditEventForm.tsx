import { eventStore } from "@/store";
import { SelectEvents } from "../SelectEvents";
import { useState } from "react";
import { Event } from "@/types/event.types";
import { EventForm } from "@/components/Forms";

export function EditEventForm() {
  const { events } = eventStore();
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const handleSelectEvent = (eventId: Event["id"]) => {
    setSelectedEvent(events.find((e) => e.id === eventId));
  };

  return (
    <div className="min-h-[100vh]">
      <div className="flex gap-2  ">
        <SelectEvents handleSelectEvent={handleSelectEvent} />
        {selectedEvent && (
          <div className="w-full">
            <EventForm selectedEvent={selectedEvent} closeForm={() => {}} />
          </div>
        )}
      </div>
    </div>
  );
}
