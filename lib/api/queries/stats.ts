import { Statistics } from "@/types";
import api from "@/lib/helpers/axios";

export const getStats = async () => {
  const response = await api.get("/statistics");
  return response.data as Statistics;
};
