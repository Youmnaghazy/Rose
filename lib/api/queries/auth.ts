import api from "@/lib/helpers/axios";
import { SignUpSchemaType, LoginSchemaType } from "@/schemas";
import { RegisterResponse } from "@/types";

const signUp = async (data: SignUpSchemaType) => {
  const response = await api.post("/auth/signup", data);
  return response.data as RegisterResponse;
};

const login = async (data: LoginSchemaType) => {
  const response = await api.post("/auth/signin", data);
  console.log(response.data);
  return response.data as RegisterResponse;
};

export { signUp, login };
