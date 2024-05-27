import { API_URL } from "@/config";
import { Event } from "@/types/event.types";
import axios from "axios";

export class EventServices {
  static async getAll() {
    const response = await axios.get(`${API_URL}/event`);

    return response.data;
  }
  static async create() {
    const response = await axios.get(`${API_URL}/event`);

    return response.data;
  }
  static async getById(id: Event["id"]) {
    const response = await axios.post(`${API_URL}/event/one`, { id });

    return response.data;
  }
}
