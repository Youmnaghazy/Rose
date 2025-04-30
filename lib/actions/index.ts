"use server";

import { signIn } from "@/auth";
import { cookies } from "next/headers";

const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return token?.value;
};

const setToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
};

const signInWithGoogle = async () => {
  await signIn("google");
};

export { getToken, setToken, signInWithGoogle };
