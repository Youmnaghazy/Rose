"use client"
import Image from "next/image"
import { FC, useRef, useState } from "react"
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {

}
const ReviewsData = [
  {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer1.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  },
  {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer2.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  },
  {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer3.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  },
  {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer4.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  }, {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer2.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  }, {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer1.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  },
  {
    name: "Ahmed Mohamed",
    type: "Customer",
    imag:"./home/customer4.svg",
    review: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rate: 4
  }
]
const Reviews: FC<IProps> = () => {
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

    <div className="relative bg-cover bg-no-repeat bg-center p-5 pt-28 flex gap-3  mt-20 " style={{ backgroundImage: 'url("/home/Reviews.svg")' }}>

      <div className="absolute inset-0 bg-[#F82BA933]  z-0"></div>

      <div className="w-full relative">
        <button
          className={` absolute left-0 top-[40%]  z-10 p-2 rounded-full text-[#FFFFFF] bg-[#F82BA9] ${isPrevDisabled
              ? "opacity-50 pointer-events-none bg-[#F8FAFC] text-[#B3BAC3]"
              : "text-[#FFFFFF] bg-[#F82BA9]"
            } `}
          onClick={goPrev}
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          className={` absolute right-2 top-[40%] z-10 p-2 rounded-full  ${isNextDisabled
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
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {ReviewsData.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative z-10 bg-white flex flex-col gap-5 p-6 w-[302px]  rounded-tl-[50px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px]">
                <div className="flex items-center justify-center gap-6 border-b border-[#757F95] relative pb-4 ">
                  <Image
                    src={review.imag}
                    alt="Profile"
                    width={50}
                    height={50}
                    className="rounded-full z-20 "
                  />
                  <div className=" absolute left-0 top-6  rotate-45 w-[60px] h-[30px] bg-[#F82BA9] rounded-b-full flex items-end justify-center overflow-hidden">
                  </div>
                  <div className="font-bold text-lg">
                    <p className="text-[#160E4B] ">{review.name}</p>
                    <p className="text-[#F82BA9] ">{review.type}</p>
                  </div>
                </div>
                <div className="text-[#757F95] text-sm">
                {review.review}
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-1 items-center">
                    <FaStar size={16} className="text-[#F82BA9]" />
                    <FaStar size={16} className="text-[#F82BA9]" />
                    <FaStar size={16} className="text-[#F82BA9]" />
                    <FaStar size={16} className="text-[#F82BA9]" />
                  </div>
                  <Image
                    src={"/icons/icon _feedback.svg"}
                    alt="_feedback"
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}

export default Reviews
