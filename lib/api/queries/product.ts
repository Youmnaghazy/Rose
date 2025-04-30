import api from "@/lib/helpers/axios";
import { Product } from "@/types";

export const addProduct = async (data: FormData) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data as Product[];
};

export const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<Product>;
}) => {
  const response = await api.put(`/products/${id}`, data);

  console.log(response.data);
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data as { message: string; product: Product };
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data as { message: string };
};
