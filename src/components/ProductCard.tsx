import Image from "next/image";
import React from "react";
import { formatNumber } from "@/utils/formatNumber";
import { ClientDataAside } from "./Aside";
import { Event } from "@/types/event.types";
interface ProductCardInterface {
  product: Event;
  readonly?: boolean;
}
export default function ProductCard({
  product,
  readonly,
}: ProductCardInterface) {
  return (
    <article
      className={`flex flex-col justify-center  border border-accent/25 rounded-md    text-secondary  relative   ${
        readonly ? " w-full " : "  w-5/6 max-lg:w-full "
      }  `}
    >
      {/* {!readonly && (
        <div className="border h-2 aspect-square rounded-full absolute top-6 translate-x-[-50%] bg-secondary" />
      )} */}
      <div className="flex justify-start max-md:flex-col">
        <h5
          className="  px-4 rounded-t-md
          flex items-center font-semibold text-secondary bg-secondary/15 "
        >
          {product.date}
        </h5>
        {!product.isPrivate && (
          <div className="  flex  px-2 my-2 rounded-sm md:items-center   text-sm text-secondary  max-md:flex-col">
            <span className="font-medium text-accent/40">
              Tickets Restantes
            </span>
            <div className="flex items-center gap-4 max-md:gap-1 w-full max-md:justify-between">
              {product.event.map(({ time, availables }) => (
                <div
                  className="flex flex-col  border border-accent/20 rounded-sm max-md:w-full"
                  key={time}
                >
                  <p className="text-secondary/50 text-sm max-md:text-xs px-2 py-1 text-center">
                    {time}
                  </p>
                  <span className="bg-accent text-primary text-center font-semibold  ">
                    {availables}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <article
        className={`flex justify-between gap-4 items-start bg-primary rounded-b-md p-4   max-md:p-2   ${
          readonly ? "select-none" : ""
        }  `}
      >
        <section
          className={
            "flex flex-col    font-semibold justify-between w-full gap-2   "
          }
        >
          <header
            className={
              "flex max-md:flex-row-reverse max-md:justify-end gap-2 md:flex-col md:justify-between text-[25px] max-md:text-[15px]  "
            }
          >
            {!product.isPrivate && (
              <div className="flex items-center gap-1 text-secondary/75">
                <h3 className="font-medium   text-reina-yellow">
                  ${formatNumber(product.price)}
                </h3>
              </div>
            )}
            <h2 className="font-medium  ">{product.title}</h2>
          </header>

          <div className="text-secondary/50 text-xs font-normal   ">
            {product.subTitle}
          </div>

          {!readonly && !product.isPrivate && (
            <div className="w-1/3 max-md:w-full">
              <ClientDataAside product={product} />
            </div>
          )}
        </section>
        {!readonly && (
          <div className="h-32 max-md:h-10  relative aspect-square opacity-75  ">
            <Image
              src={"/reina/RYellow.png"}
              alt={product.title}
              fill
              objectFit="contain"
              priority
            />
          </div>
        )}
      </article>
    </article>
  );
}
