import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/mock/product";
import mercadopago from "mercadopago";
import { Payment } from "@/types/payment.types";
import { PaymentServices } from "@/services";
import { Event } from "@/types/event.types";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const event: Event = req.body.product;
    const payment: Payment = req.body.payment;
    const time: string = req.body.time;
    const URL = process.env.NEXT_NGROK_URL;

    try {
      const newPayment = await PaymentServices.createPayment(
        {
          ...payment,
          EventId: event.id,
        },
        time
      );

      try {
        const preference: CreatePreferencePayload = {
          items: [
            {
              title: event.title,
              unit_price: event.price * parseInt(payment.quantity),
              quantity: 1,
            },
          ],
          auto_return: "approved",
          back_urls: {
            success: `${URL}/?reinaPaymenttId=${newPayment.id}`,
            failure: `${URL}/?reinaPaymenttId=${newPayment.id}`,
          },
          notification_url: `${URL}/api/notify`,
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(200).send({ url: response.body.init_point });
      } catch (error) {
        try {
          await PaymentServices.updatePayment({
            payment: newPayment,
            data: {
              status: "Refused",
            },
          });
        } catch (error) {
          // console.error("Error updating payment:", error);
          res.status(500).json({ message: "Internal server error", error });
        }

        // console.error("Error creating payment preference:", error);
        res.status(500).json({ message: "Internal server error", error });
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default handler;
