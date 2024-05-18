import { Payment } from "@/types/payment.types";
import axios from "axios";

export class PaymentServices {
  static async getPaymentById(id: Payment["id"]): Promise<Payment> {
    const response = await axios.get(`http://localhost:3001/api/payment/${id}`);

    return response.data;
  }
  static async createPayment(payment: Payment): Promise<Payment> {
    const response = await axios.post(
      `http://localhost:3001/api/payment`,
      payment
    );

    return response.data;
  }
}
