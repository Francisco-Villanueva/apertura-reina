import { useEffect, useState } from "react";
import Background from "@/components/Background/Background";
import Image from "next/image";
import Landing from "@/components/Landing";
import { PaymenySuccess } from "@/components/Notification";
import { EventList } from "@/components/Events";
import Provider from "./Provider";
import {
  Calendar,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TimerIcon,
} from "lucide-react";
import { FrecuentsQuestions } from "@/components/Frecuents/FrecuentsQuestions";

interface NotificationType {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}

export default function Home() {
  const [notification, setNotification] = useState<NotificationType>({
    isOpen: false,
    type: null,
    content: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    if (status === "approved") {
      setNotification({
        content: "Pago aprobado!",
        isOpen: true,
        type: status,
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: status,
      });
    } else {
      setNotification({
        content: "",
        isOpen: false,
        type: null,
      });
    }
  }, []);

  console.log(notification.isOpen);
  return (
    <Provider>
      <main
        className={` min-h-[100vh] h-[100vh]  max-w-[100vw] w-[100vw] overflow-x-hidden  font-montserrat flex flex-col `}
      >
        <PaymenySuccess open={notification.isOpen} />
        <Background />
        <div className=" h-full  ">
          <Landing />
          <FrecuentsQuestions />
          <section className=" bg-foreground h-full pt-10 px-10 max-md:px-2   flex gap-4  justify-between ">
            <div className="w-3/4   max-lg:w-full h-full flex flex-col gap-4      ">
              <h2 className="text-secondary font-medium text-2xl">
                Eventos de apertura
              </h2>

              <EventList />
            </div>
            <div className="w-1/4  max-lg:hidden transition-all duration-300 p-1 ">
              <div className=" w-full flex flex-col gap-6  justify-start h-full text-accent ">
                <div className="flex flex-col items-start gap-2">
                  <section className="flex justify-between w-full items-center">
                    <div className="h-8 aspect-square relative">
                      <Image
                        src={"/reina/RBlanca.png"}
                        fill
                        alt="reina burguesa"
                      />
                    </div>
                    <h2 className="font-bold text-xl">Reina Burguesa</h2>
                  </section>
                  <hr className=" w-full opacity-20" />
                  <span className="font-light text-justify">
                    Desde 2021 elaboramos hamburguesas y somos tu compañía de
                    los fines de semana. Disfrutamos mucho de cocinar rico y
                    entre amigos, por eso queremos compartir un poco de nuestra
                    experiencia emprendiendo.
                  </span>
                </div>

                <div className="flex flex-col text-accent/70">
                  <span className="flex gap-1 ">
                    <MapPinIcon className="w-4" />
                    Fuerte Argentino 285
                  </span>
                  <span className="flex gap-1 ">
                    <TimerIcon className="w-4" />
                    20:00 - 23:00
                  </span>
                  <span className="flex gap-1  ">
                    <Calendar className="w-4" />
                    Martes - Domingo
                  </span>
                </div>

                <div className="w-full">
                  <div className="w-full aspect-square  relative">
                    <Image
                      src={"/reina/poster.jpg"}
                      fill
                      alt="reina burguesa"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-accent-foreground  text-accent w-full  p-4">
            <div className="flex flex-col items-center">
              <div className="flex  justify-center gap-4 items-center">
                <div className="relative  h-20 aspect-video ">
                  <Image src={"/reina/logo.png"} fill alt="reina" />
                </div>

                <div className="text-sm">
                  <div className="flex gap-2">
                    <InstagramIcon className="w-4" />
                    reina.burguesa
                  </div>
                  <div className="flex gap-2">
                    <PhoneIcon className="w-4" />
                    291527575
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <span className="text-xs text-accent/70">
                  Desarrollado por
                  <a
                    href="https://www.linkedin.com/in/francisco-villanueva-50708a226/"
                    className="font-semibold text-md"
                  >
                    {" "}
                    @Francisco Villanueva
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </Provider>
  );
}
