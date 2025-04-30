"use client";
import { FC, useState, useEffect } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";
import { PaginationComponent } from "@/components/shared/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/lib/helpers/axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Categories from "./_compponent/Categories";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/lib/slices/cartSlice";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types";
interface IProps { }

const ProductSkeleton = () => (
  <div className="relative p-4 w-full">
    <div className="bg-[#FEEDF7] rounded-lg p-6">
      <Skeleton className="h-40 w-full" />
    </div>
    <div className="px-2 mt-4 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-6 w-1/3" />
    </div>
  </div>
);



const page: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };


  const getProducts = async () => {
    const params = new URLSearchParams();
    params.append('page', currentPage);
    params.append('limit', '40');

    if (selectedCategories.length > 0) {
      selectedCategories.forEach(categoryId => {
        params.append('category', categoryId);
      });
    }

    const response = await api.get(`/products?${params.toString()}`);
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["products", currentPage, selectedCategories],
    queryFn: getProducts,
  });


  const [range, setRange] = useState<[number, number]>([0, 36]);

  const handleChange = (values: number[]) => {
    setRange([values[0], values[1] ?? values[0]]);
  };

  return (
    <div className="container mx-auto my-10 flex flex-col md:flex-row">
      <div className="w-full md:w-3/12 py-4 flex flex-col items-center gap-5">
        {/* <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  pb-5 ">Search</p>
          <input
            type="text"
            placeholder="Search By the name"
            className="w-full px-4 py-2 border rounded-[20px] categoryshadow"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div> */}
        <Categories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        {/* <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Brands
          </p>
          <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
            <li className="pb-2 flex items-center gap-2 ">
              <input type="checkbox" /> <span>Tovola</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Sundoy</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Sahoo Gifts</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Casterly</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Mainden Gifts</span>
              <span className="absolute right-0">(8)</span>
            </li>
          </ul>
        </div>

        <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Price Rating
          </p>
          <p className="text-sm font-medium text-pink-500 mb-2">
            ${range[0]} - ${range[1]}
          </p>
          <Slider
            defaultValue={range}
            min={0}
            max={100}
            step={1}
            onValueChange={handleChange}
            className="w-full"
          />
        </div>
        <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Sales
          </p>
          <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
            <li className="pb-2 flex items-center gap-2 ">
              <input type="checkbox" /> <span>On Sale</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>In Stock</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Out Of Stock</span>
              <span className="absolute right-0">(8)</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Discount</span>
              <span className="absolute right-0">(8)</span>
            </li>
          </ul>
        </div>
        <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Ratings
          </p>
          <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
            <li className="pb-2 flex gap-2">
              <input type="checkbox" />
              <div className="w-full flex items-center gap-1">
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
              </div>
            </li>
            <li className="pb-2 flex gap-2">
              <input type="checkbox" />
              <div className="w-full flex items-center gap-1">
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
              </div>
            </li>
            <li className="pb-2 flex gap-2">
              <input type="checkbox" />
              <div className="w-full flex items-center gap-1">
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
              </div>
            </li>
            <li className="pb-2 flex gap-2">
              <input type="checkbox" />
              <div className="w-full flex items-center gap-1">
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
              </div>
            </li>
            <li className="pb-2 flex gap-2">
              <input type="checkbox" />
              <div className="w-full flex items-center gap-1">
                <FaStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
                <FaRegStar size={15} className="text-[#F82BA9]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Colors
          </p>
          <div className="flex items-center gap-6">
            <button>
              <FaCircle size={28} className="text-[#606DDD]" />
            </button>
            <button>
              <FaCircle size={28} className="text-[#4CAF50]" />
            </button>
            <button>
              <FaCircle size={28} className="text-[#17A2B8]" />
            </button>
            <button>
              <FaCircle size={28} className="text-[#FFC107]" />
            </button>
            <button>
              <FaCircle size={28} className="text-[#F44336]" />
            </button>
          </div>
        </div>

        <div className="w-full rounded-[20px] p-6 categoryshadow space-y-3">
          <p className="text-[#160E4B] font-bold  mb-2 border-b border-[#757F95] pb-5">
            Sizes
          </p>
          <ul className="space-y-1 text-sm text-[#757F95] relative p-2">
            <li className="pb-2 flex items-center gap-2 ">
              <input type="checkbox" /> <span>Extra Small</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Small</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Medium</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Large</span>
            </li>
            <li className="pb-2 flex items-center gap-2">
              <input type="checkbox" /> <span>Extra Large</span>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="w-full md:w-9/12 flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {isPending ? (
            Array.from({ length: 12 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))
          ) : (
            data?.products.map((product: Product, idx: number) => (
              <Link href={`/all-category/${product._id}`} key={idx}>
              <ProductCard product={product} key={idx} />
              </Link>
            ))
          )}
        </div>
        <div className="flex justify-center items-center w-full">
          <PaginationComponent totalPages={data?.totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
