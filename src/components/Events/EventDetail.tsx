import { EventServices } from "@/services";
import { Event } from "@/types/event.types";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { EventBadge } from "./EventBadge";

export function EventDetail({ eventId }: { eventId: Event["id"] }) {
  const [event, setEvent] = useState<Event>();
  useEffect(() => {
    EventServices.getById(eventId).then((res) => setEvent(res));
  }, []);

  return <div>{event ? <EventBadge event={event} /> : <Loader />}</div>;
}
