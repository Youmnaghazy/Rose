"use client";

import { Product } from "@/types";
import { nanoid } from "@reduxjs/toolkit";
import {
  CheckCircleIcon,
  Edit,
  Loader2,
  Trash,
  XCircleIcon,
} from "lucide-react";
import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useDeleteProduct } from "@/lib/api/hooks/product";
import { toast } from "sonner";
interface IProps {
  product: Product;
}
const products = [
  {
    id: nanoid(),
    label: "NEW",
    image: "/home/product1.png",
    title: "Special Gift Box",
    price: 250,
    oldPrice: 350,
    rating: 4,
  },
  {
    id: nanoid(),
    label: "OUT OF STOCK",
    image: "/home/product2.png",
    title: "Special Gift Box",
    price: 250,
    rating: 4,
  },
  {
    id: nanoid(),
    label: "HOT",
    image: "/home/product3.png",
    title: "Special Gift Box",
    price: 250,
    rating: 4,
  },
  {
    id: nanoid(),
    label: "HOT",
    image: "/home/product3.png",
    title: "Special Gift Box",
    price: 250,
    rating: 4,
  },
  {
    id: nanoid(),
    label: "HOT",
    image: "/home/product3.png",
    title: "Special Gift Box",
    price: 250,
    rating: 4,
  },
];

const ProductCard: FC<IProps> = ({ product }) => {
  const router = useRouter();

  const { mutate: deleteProduct, isPending: isDeletingProduct } =
    useDeleteProduct();

  let label;
  if (product.sold === product.quantity) {
    label = "OUT OF STOCK";
  } else if (product.sold > 0) {
    label = "HOT";
  } else {
    label = "NEW";
  }

  return (
    <div className="relative p-4 w-full ">
      {label && (
        <span className="absolute top-6 right-6 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {label}
        </span>
      )}
      <div className="bg-[#FEEDF7] rounded-lg p-6">
        <img
          src={product.imgCover}
          alt={product.title}
          className="mx-auto h-40 object-cover object-center w-[180px] rounded-[inherit]"
        />
      </div>
      <div className="px-2 mt-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <div className="text-yellow-500 my-1">
            {"★".repeat(product.rateAvg)}
            {"☆".repeat(5 - product.rateAvg)}
          </div>
          <div className="text-pink-600 font-bold text-lg">
            ${product.price.toFixed(2)}
          </div>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => router.push(`/update-product/${product.id}`)}
            className="mt-2 w-[42px] h-[42px] rounded-full cursor-pointer text-rose-100 flex justify-center items-center"
          >
            <Edit size={20} className="text-rose-100" />
          </button>
          <button
            onClick={() =>
              deleteProduct(product.id, {
                onSuccess: () => {
                  toast.success("Product deleted successfully", {
                    icon: (
                      <CheckCircleIcon className="text-green-500 w-6 h-6" />
                    ),
                  });
                },
                onError: () => {
                  toast.error("Failed to delete product", {
                    icon: <XCircleIcon className="text-error-red w-6 h-6" />,
                  });
                },
              })
            }
            className="mt-2 w-[42px] h-[42px] rounded-full cursor-pointer text-rose-100 flex justify-center items-center"
            disabled={isDeletingProduct}
          >
            {isDeletingProduct ? (
              <Loader2 size={20} className="text-rose-100 animate-spin" />
            ) : (
              <Trash size={20} className="text-rose-100" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="relative p-4 w-full">
      <Skeleton className="absolute top-6 right-6 w-20 h-6 rounded-full" />
      <div className="bg-[#FEEDF7] rounded-lg p-6">
        <Skeleton className="mx-auto h-40 w-full rounded-lg" />
      </div>
      <div className="px-2 mt-4 flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4 rounded" />
            ))}
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="space-y-4">
          <Skeleton className="w-[42px] h-[42px] rounded-full" />
          <Skeleton className="w-[42px] h-[42px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
