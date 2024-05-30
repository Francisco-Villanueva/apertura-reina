import { API_URL } from "@/config";
import { Payment } from "@/types/payment.types";
import axios from "axios";

export class PaymentServices {
  static async getAll(): Promise<Payment[]> {
    const response = await axios.get(`${API_URL}/payment`);
    return response.data;
  }
  static async getPaymentById(id: Payment["id"]): Promise<Payment> {
    const response = await axios.get(`${API_URL}/payment/${id}`);
    return response.data;
  }
  static async createPayment(payment: Payment, time: string): Promise<Payment> {
    const response = await axios.post(`${API_URL}/payment`, { payment, time });
    return response.data;
  }
  static async restorePayment(paymentId: string) {
    const response = await axios.post(`${API_URL}/payment/restore`, {
      paymentId,
    });
    return response.data;
  }
  static async deletePayment(paymentId: string) {
    const response = await axios.post(`${API_URL}/payment/delete`, {
      id: paymentId,
    });
    return response.data;
  }
  static async approbePayment({
    data,
    payment,
  }: {
    payment: Payment;
    data: Partial<Payment>;
  }) {
    const response = await axios.patch(`${API_URL}/payment/update`, {
      id: payment.id,
      data,
    });

    return response.data;
  }
  static async updatePayment({
    data,
    payment,
  }: {
    payment: Payment;
    data: Partial<Payment>;
  }) {
    const response = await axios.patch(`${API_URL}/payment/update`, {
      id: payment.id,
      data,
    });

    return response.data;
  }
}
