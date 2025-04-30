import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getStats } from "../queries/stats";

export const useGetStats = () => {
  return useQuery({ queryKey: ["stats"], queryFn: getStats });
};

export const useGetStatsSuspense = () => {
  return useSuspenseQuery({ queryKey: ["stats"], queryFn: getStats });
};
