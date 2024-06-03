import { eventStore } from "@/store";
import ProductCard from "../ProductCard";
import Image from "next/image";

export function EventList() {
  const { events } = eventStore();

  return (
    <div className="  max-h-[90%] h-full  overflow-auto max-md:px-2 flex flex-col gap-4 ">
      <div className="font-normal text-accent/80   text-center px-8 max-md:px-1 max-md:text-md text-lg h-full bg-accent/20 rounded-lg flex flex-col items-center justify-center gap-2 ">
        <span>La compra de tickets se encuentra momenáneamente en pausa,</span>
        <span>Ultimos horarios de venta:</span>
        <strong className="font-semibold text-3xl max-md:text-lg text-reina-yellow">
          Lunes 3 de junio - 20:00hs a 21:30hs
        </strong>
      </div>
      {/* {events.length > 0 ? (
        events
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
          .map((product) => <ProductCard product={product} key={product.id} />)
      ) : (
        <div className="  text-white flex flex-col items-center justify-center h-96 animate-pulse ">
          <div className="h-24 w-24 relative">
            <Image
              src="/reina/RBlanca.png"
              alt="reina burguesa logo blanco"
              fill
              objectFit="cover"
            />
          </div>
          <span>Cargando ...</span>
        </div>
      )} */}
    </div>
  );
}
