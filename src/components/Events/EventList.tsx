import { eventStore } from "@/store";
import ProductCard from "../ProductCard";
import { Loader } from "lucide-react";

export function EventList() {
  const { events } = eventStore();

  return (
    <div className="  max-h-[90%] h-full overflow-auto max-md:px-2 flex flex-col gap-4 ">
      <div className="font-semibold text-accent  text-center px-8 text-lg h-full bg-reina-red/50 rounded-lg flex items-center justify-center ">
        Estamos trabajando 👩‍💻 en problemas tecnicos, ya vovlemos! 🔨⛏️
      </div>
      {/* {events.length > 0 ? (
        events
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
          .map((product) => <ProductCard product={product} key={product.id} />)
      ) : (
        <Loader />
      )} */}
    </div>
  );
}
