import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="flex  h-full max-md:flex-col-reverse  ">
      <div className="w-1/2   max-md:w-full  flex items-center  ">
        <div className="h-full  w-full  top-0 max-md:bg-foreground   grid place-items-center  ">
          <div className=" w-5/6 flex flex-col gap-4  rounded-md p-8 max-md:px-0 ">
            <section className=" text-white text-xl ">
              <p className="font-semibold text-3xl">Apertura Gitana 💃</p>
            </section>
            <hr className="w-1/3" />
            <section className="text-white/50 w-5/6  max-md:w-full text-justify">
              <span>
                El miércoles{" "}
                <strong>5 de junio abrimos nuestras puertas 🎉.</strong> Se
                viene una inauguración bien gitana, así que andá comprando tu
                ticket, no te quedes afuera que está fresco.
              </span>
              <br />
              <br />
              <span>
                El ticket es válido por{" "}
                <strong>
                  una burger doble a elección 🍔 + papas 🍟 y unas botellita de
                  agua 💧.
                </strong>{" "}
                Vas a encotrar 3 franjas horarios, elegí la que más te guste y
                venite a disfrutar una buena burgerbicampeona ⭐⭐.
              </span>
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
