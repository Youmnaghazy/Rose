"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Container from "../shared/Container";
import Link from "next/link";
import api from "@/lib/helpers/axios";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "@/lib/slices/cartSlice";
import { useAppDispatch } from "@/store";
import { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import ProductSkeleton from "../shared/ProductSkeleton";
import ProductCard from "../shared/ProductCard";

const PremiumGifts = () => {
  const dispatch = useAppDispatch();
  const getBestSeller = async () => {
    const response = await api.get(`/best-seller`);
    return response.data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["bestSeller"],
    queryFn: getBestSeller,
  });

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  return (
    <Container className="bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 flex flex-col gap-10 items-start">
          <p className="text-pink-500 uppercase tracking-widest font-medium">
            Premium Gifts
          </p>
          <div className="">
            <h2 className="text-3xl font-bold pr-4 ">
              Best <span className="text-pink-600 ">Seller Gifts</span> And
              Products
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-2">
              Recusandae tempora aut laborum molestias veniam. A commodi sequi
              accusantium ullam cupiditate.
            </p>
          </div>
          <Link
            href={"/all-category"}
            className="bg-[#F82BA9] cursor-pointer px-3.5 py-1.5 text-[#FFFFFF] font-medium flex items-center gap-2 rounded-lg"
          >
            Explore More →
          </Link>
        </div>
        <div className="w-full lg:w-3/4 relative">


          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, idx) => (
               <ProductSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <>
              <button
            className={` absolute left-4 top-[30%]  z-10 p-2 rounded-full text-[#FFFFFF] bg-[#F82BA9] ${
              isPrevDisabled
                ? "opacity-50 pointer-events-none bg-[#F8FAFC] text-[#B3BAC3]"
                : "text-[#FFFFFF] bg-[#F82BA9]"
            } `}
            onClick={goPrev}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            className={` absolute right-4 top-[30%] z-10 p-2 rounded-full  ${
              isNextDisabled
                ? "opacity-50 pointer-events-none bg-[#F8FAFC] text-[#B3BAC3]"
                : "text-[#FFFFFF] bg-[#F82BA9]"
            } `}
            onClick={goNext}
          >
            <IoIosArrowForward size={20} />
          </button>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {data?.bestSeller?.map((product: Product, idx: number) => (
                <SwiperSlide key={idx}>
                   <ProductCard product={product} key={idx} />
                </SwiperSlide>
              ))}
            </Swiper>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PremiumGifts;
