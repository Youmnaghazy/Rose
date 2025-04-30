import Image from "next/image"
import { FC } from "react"
import Container from "../shared/Container"

interface IProps {}

const OurGallery: FC<IProps> = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="text-[#F82BA9] font-bold text-lg tracking-[4px] uppercase">
          Our Gallery
        </p>
        <p className="text-[#160E4B] font-bold text-3xl text-center">
          Let's Check Our Photo Gallery
        </p>
      </div>

      {/* First Row - 3 equal images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        <img src="/home/gift1.svg" alt="Gallery 1" className="w-full h-auto rounded-xl" />
        <img src="/home/gift2.svg" alt="Gallery 2" className="w-full h-auto rounded-xl" />
        <img src="/home/gift3.svg" alt="Gallery 3" className="w-full h-auto rounded-xl" />
      </div>

      {/* Second Row - 2 images: one takes 2 cols, one takes 1 col */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <img
          src="/home/gift4.svg"
          alt="Gallery 4"
          className=" md:col-span-2 w-full h-auto rounded-xl"
        />
        <img
          src="/home/gift5.svg"
          alt="Gallery 5"
          className="col-span-1 w-full h-auto rounded-xl"
        />
      </div>
    </Container>
  )
}

export default OurGallery
