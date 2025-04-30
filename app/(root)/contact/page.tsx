import Container from "@/components/shared/Container"
import Image from "next/image"
import { FC } from "react"
import { FaLocationDot } from "react-icons/fa6"
import { GoArrowRight } from "react-icons/go"
import { MdEmail } from "react-icons/md"

interface IProps {

}
const page: FC<IProps> = () => {
  return (
    <Container className="my-14">
      <p className="text-[#F82BA9] font-bold tracking-[4px]">Contact Us</p>
      <div className="w-full flex flex-col lg:flex-row gap-40 my-14">
        <div className="w-full lg:w-1/3 h-fit flex flex-col justify-start items-center  gap-12  bg-[#FFFFFF]  customShodow p-5 rounded-lg ">
          <div className="w-full flex items-center  gap-5">
            <div className="border border-[#F82BA9] rounded-lg p-6">

              <Image
                src={"/calling.svg"}
                alt="calling"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-[#F82BA9] font-bold text-xl ">Call Anytime</p>
              <p className="text-[#111111] font-semibold">241-373-2123</p>
            </div>
          </div>

          <div className="w-full flex items-center  gap-5">
            <div className="border border-[#F82BA9] rounded-lg p-6">

              <MdEmail size={30} className="text-[#F82BA9]" />
            </div>
            <div className="flex flex-col ">
              <p className="text-[#F82BA9] font-bold text-xl ">Send Email</p>
              <p className="text-[#111111] font-semibold">Dwight63@gmail.com</p>
            </div>
          </div>

          <div className="w-full flex items-center  gap-5">
            <div className="border border-[#F82BA9] rounded-lg p-6">

              <FaLocationDot size={30} className="text-[#F82BA9]" />
            </div>
            <div className="flex flex-col ">
              <p className="text-[#F82BA9] font-bold text-xl ">Visit Us</p>
              <p className="text-[#111111] font-semibold">20 Island Park Road,
                New Jearsy, New York, USA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  items-end gap-5 w-full lg:w-2/3 ">
          <div className=" flex  flex-col  items-end gap-5 w-full customShodow p-5 rounded-lg">

          <input type="text" placeholder="Name" className="border border-[#F82BA9] rounded-lg p-2 w-full focus:outline-0 placeholder:text-[#F82BA9] text-[#F82BA9]" />
          <input type="Email" placeholder="Email" className="border border-[#F82BA9] rounded-lg p-2 w-full focus:outline-0 placeholder:text-[#F82BA9] text-[#F82BA9]" />
          <input type="text" placeholder="Phone" className="border border-[#F82BA9] rounded-lg p-2 w-full focus:outline-0 placeholder:text-[#F82BA9] text-[#F82BA9]" />
          <textarea placeholder="Your Message" className="border border-[#F82BA9] rounded-lg p-2 w-full h-[150px] focus:outline-0 placeholder:text-[#F82BA9] text-[#F82BA9] ">
          </textarea>
          </div>
            <button type="submit" className="bg-[#F82BA9] px-5 py-2 rounded-4xl text-[#FFFFFF] font-medium -ml-10 flex  items-center gap-2">Send
              <GoArrowRight size={20} />
            </button>
        </div>
      </div>
    </Container>
  )
}

export default page
