import { MapPinIcon } from "lucide-react";
import Image from "next/image";
export default function Landing() {
  return (
    <section className="flex  h-full max-md:flex-col-reverse  ">
      <div className="w-1/2   max-md:w-full  flex items-center  ">
        <div className="h-full  w-full  top-0 max-md:bg-foreground   grid place-items-center  ">
          <div className=" w-5/6 flex flex-col gap-4  rounded-md p-8 max-md:px-0 ">
            <section className=" text-white  ">
              <p className="font-bold text-3xl text-accent/80 text-reina-yellow">
                Lo Logramos
              </p>
              <p className="font-medium italic text-sm text-accent/80 ">
                Bienvenidos a nuestra primera apertura
              </p>
            </section>
            {/* <hr className="w-1/3" /> */}
            <section className="text-accent/50 w-5/6  max-md:w-full text-justify text-sm">
              <span>
                El martes{" "}
                <strong>4 de junio abrimos nuestras puertas 🎉</strong> para la
                familia.
              </span>
              <br />
              <br />
              <span>
                A partir del miércoles <strong>5 de junio</strong> los esperamos
                en el local para poder disfrutar de una reina recién hecha.
              </span>
              <br />
              <br />

              <span>
                El local cuenta con 20 lugares, por eso dividimos el miércoles y
                jueves en tres franjas horarias, elegí la que más te guste y
                sacá tu ticket. El mismo incluye una burger doble, papas y
                bebida ¿Puedo elegir? Si, todo es a elección.
              </span>

              <br />
              <br />
              <br />

              <span className="text-accent/80   ">
                Necesitamos que respeten los horarios, por la capacidad del
                local.
              </span>
              <br />
              <br />
              {/* Te esperamos en */}
              <span className="text-reina-yellow font-semibold   ">
                <span className="flex gap-1 ">
                  <MapPinIcon className="w-4" />
                  Fuerte Argentino 285
                </span>
              </span>
            </section>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full max-md:w-full relative">
        <div className="h-full  w-full absolute top-0 -z-10  opacity-50">
          <Image
            src={"/landing3.jpg"}
            fill
            objectFit="cover"
            alt="blueCheese reina burguesa"
          />
        </div>
      </div>
    </section>
  );
}
