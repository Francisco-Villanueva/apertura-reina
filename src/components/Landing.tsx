import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="flex  h-full max-md:flex-col-reverse ">
      <div className="w-1/2   max-md:w-full  flex items-center  ">
        <div className="h-full  w-full  top-0 z-10   grid place-items-center  ">
          <div className=" w-5/6 flex flex-col gap-4  rounded-md p-8 max-md:px-0 ">
            <section className=" text-white text-xl ">
              <p className="opacity-40">Que esta pasando en</p>
              <p className="font-semibold text-3xl">Reina Burguesa</p>
            </section>
            <hr className="w-1/3" />

            <section className="text-white/50 w-3/4  max-md:w-full">
              <span>
                Reina Burguesa está abriendo sus puertas al público de su ciudad
                y para esto lo va a hacer de la mejor manera. Se vendrá 5
                EVENTOS de apertura donde podés reservar tu lugar para disfrutar
                de las mejores burgers de Bahía Blanca y participar de la
                dinámica del día ...
              </span>
            </section>
            <section className="flex  gap-2 w-3/4 max-md:w-full">
              <Input
                placeholder="yo@email.com"
                type="email"
                className="bg-primary border-none text-secondary"
              />
              <Button variant="secondary">Registrate</Button>
            </section>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full max-md:w-full relative">
        <div className="h-full  w-full absolute top-0 -z-10  opacity-50">
          <Image
            src={"/reina/Bluecheese.jpg"}
            fill
            objectFit="cover"
            alt="blueCheese reina burguesa"
          />
        </div>
      </div>
    </section>
  );
}
