"use client"
import { FC, useEffect, useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import Container from "../shared/Container";
import api from "@/lib/helpers/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Skeleton } from "../ui/skeleton";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/lib/slices/cartSlice";
import ProductSkeleton from "../shared/ProductSkeleton";
import ProductCard from "../shared/ProductCard";
import { Product } from "@/types";

interface IProps { }



const PopularItems: FC<IProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
  };

  const { isPending: isPendingCategories, data: Categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const getProducts = async () => {
    const response = await api.get(`/home?page=1&limit=12`);
    return response.data;
  };

  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = selectedCategory
    ? data?.products.filter((product: any) => product.category === selectedCategory)
    : data?.products;

  return (
    <Container>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="text-[#160E4B] font-bold text-3xl">Popular Items</div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory("")}
              className={`font-semibold pb-2 ${selectedCategory === "" ? "text-[#F82BA9] border-b-2 border-[#F82BA9]" : "text-[#160E4B] "
                }`}
            >
              All
            </button>
            {Categories?.categories.map((category: any, idx: any) => {
              if (category.name === "flowers" || category.name === "chocolate") {
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(category._id)}
                    className={`font-semibold pb-2 ${selectedCategory === category._id ? "text-[#F82BA9] border-b-2 border-[#F82BA9]" : "text-[#160E4B] "
                      }`}
                  >
                    {category.name}
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
          {isPending ? (
            Array.from({ length: 12 }).map((_, idx) => <ProductSkeleton key={idx} />)
          ) : (
            filteredProducts?.map((product: Product, idx: number) => (
              <ProductCard product={product} key={idx} />

            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default PopularItems;
