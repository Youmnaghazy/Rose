'use client'
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/lib/helpers/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface IProps {
  selectedCategories: string[];
  setSelectedCategories: (categories:any) => void;
}

const CategorySkeleton = () => (

  <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
    <Skeleton className="h-6 w-1/4 mb-2" />
    <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
      {Array.from({ length: 5 }).map((_, idx) => (
        <li key={idx} className="pb-2 flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-8 absolute right-0" />
        </li>
      ))}
    </ul>
  </div>
);
const Categories = ({ selectedCategories, setSelectedCategories }: IProps) => {


  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev:any) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id: string) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="w-full">
    { isPending ? (
          <CategorySkeleton />
        ) : (
          <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
            <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
              Category
            </p>
            <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
              {data?.categories.map((category: any, idx: any) => (
                <li key={idx} className="pb-2 flex items-center gap-2 ">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category._id)}
                    onChange={() => handleCategoryChange(category._id)}
                  />
                  <span>{category.name}</span>
                  <span className="absolute right-0">({category.productsCount})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Categories;