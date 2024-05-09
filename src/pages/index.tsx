import { useEffect, useState } from "react";
import Background from "@/components/Background/Background";
import { CarouselEvents } from "@/components/Carrousel/Carousel";
import Image from "next/image";

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
        type: "approved",
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: "failure",
      });
    }

    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: "",
      });
    }, 5000);
  }, []);

  return (
    <main
      className={` h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] overflow-hidden font-montserrat`}
    >
      <Background />
      <nav className="h-[10vh] fixed top-0  w-full p-4">
        <div className="h-full aspect-video relative">
          <Image src="/reina/logo.png" fill alt="reina burguesa logo" />
        </div>
      </nav>
      <div className=" h-full flex items-center justify-center">
        <CarouselEvents />
        {/* 
        {notification.isOpen && (
          <div className={styles.notification}>
            <div
              className={styles.iconContainer}
              style={{
                backgroundColor:
                  notification.type === "approved" ? "#00cc99" : "#ee4646",
              }}
            >
              <Image
                src={`/assets/${notification.type}.svg`}
                alt={notification.type!}
                width={25}
                height={25}
              />
            </div>

            <p>{notification.content}</p>
          </div>
        )} */}
      </div>
    </main>
  );
}
