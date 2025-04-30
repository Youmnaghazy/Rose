import {
  useMutation,
  useQueryClient,
  useQuery,
  useSuspenseQuery,
  UseQueryResult,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../queries/product";
import { Product, ProductQueryResponse } from "@/types";
import { AxiosError } from "axios";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return mutation;
};

type UseGetProductsReturnType<T extends boolean> = T extends true
  ? UseSuspenseQueryResult<ProductQueryResponse, AxiosError>
  : UseQueryResult<ProductQueryResponse, AxiosError>;

export const useGetProducts = <T extends boolean>(
  suspense: T
): UseGetProductsReturnType<T> => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const susQuery = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // @ts-ignore
  return suspense ? susQuery : query;
};

type UseGetProductReturnType<T extends boolean> = T extends true
  ? UseSuspenseQueryResult<Product, AxiosError>
  : UseQueryResult<Product, AxiosError>;

export const useGetProduct = <T extends boolean>(
  suspense: T,
  id?: string
): UseGetProductReturnType<T> => {
  const query = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id as string),
  });
  const susQuery = useSuspenseQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id as string),
  });

  // @ts-ignore
  return suspense ? susQuery : query;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return mutation;
};

export const useGetProductByID = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return mutation;
};
