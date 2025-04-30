"use client"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { useRef, useState } from "react"
import Link from "next/link";

const slides = [
  {
    title: "Choose Perfect",
    highlight: "Gifts",
    subtitle: "From Us",
    desc: "Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et.",
    image: "/home/giftsilder.jpeg",
  },
  {
    title: "Find Beautiful",
    highlight: "Surprises",
    subtitle: "For Them",
    desc: "Praesentium itaque minus velit eveniet. Dolore doloremque ad similique fugiat.",
    image: "/home/giftsilder.jpeg",
  },
]

export default function GiftSlider() {
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
    <Swiper
    onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000 }}
      className="w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative rounded-xl overflow-hidden h-[500px] flex justify-between text-left px-6 md:px-16">

            <Image
              src={slide.image}
              alt="Background"
              fill
              className="object-cover"
              quality={100}
            />

            <div className="relative  max-w-[381px] space-y-4 flex  flex-col items-start justify-center">
              <p className="text-pink-500 font-semibold tracking-widest uppercase">
                Best Gift Shop
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#160E4B] leading-tight">
                {slide.title} <span className="text-pink-500">{slide.highlight}</span> {slide.subtitle}
              </h2>
              <p className="text-[#757F95]">{slide.desc}</p>
              <Link href={"/allCategory"}  className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
                Shop Now →
              </Link>

            </div>
              <div className=" flex gap-2 justify-end items-end z-10 mb-6">
                <button
                  className={` p-2 rounded-full ${isPrevDisabled
                    ? "opacity-50 pointer-events-none bg-[#F8FAFC] text-[#B3BAC3]"
                    : "text-[#CA5BDB] bg-[#FAEFFB]"} `}
                  onClick={goPrev}
                  disabled={isPrevDisabled}
                >

                  <IoIosArrowBack size={20} />
                </button>


                <button
                  className={` p-2 rounded-full ${isNextDisabled
                    ? "opacity-50 pointer-events-none bg-[#F8FAFC] text-[#B3BAC3]"
                    : "text-[#CA5BDB] bg-[#FAEFFB]"} `}
                  onClick={goNext}
                  disabled={isNextDisabled}
                >

                  <IoIosArrowForward size={20} />
                </button>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
