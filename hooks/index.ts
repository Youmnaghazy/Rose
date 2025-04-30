import { useRouter } from "next/navigation";
import {
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { useEffect } from "react";

export const useLogin = () =>
  useQueryState("login", parseAsBoolean.withDefault(false));

export const useRegister = () =>
  useQueryState("register", parseAsBoolean.withDefault(false));

export const useForgotPwd = () =>
  useQueryState("forgotPwd", parseAsBoolean.withDefault(false));

export const useCodeDialog = () =>
  useQueryState("code", parseAsBoolean.withDefault(false));

export const useProductID = () => {
  const prod = useQueryState("productID", parseAsString);
  const router = useRouter();

  useEffect(() => {
    if (prod[0]) {
      router.push(`?productID=${prod[0]}`);
    }
  }, [prod[0]]);

  return prod;
};

export const useCheckoutStep = () => {
  return useQueryState("checkout-step", parseAsInteger.withDefault(1));
};
