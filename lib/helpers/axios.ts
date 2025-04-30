import axios, { AxiosError } from "axios";
import { getToken } from "../actions";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  console.log("token", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // if (typeof window !== "undefined") {
      //   const url = new URLSearchParams(window.location.search);
      //   if (url.get("login") === "true") return Promise.reject(error);
      //   url.set("login", "true");
      //   window.location.href = `${window.location.origin}${
      //     window.location.pathname
      //   }?${url.toString()}`;
      // }
    }
    return Promise.reject(error);
  }
);
export default api;
