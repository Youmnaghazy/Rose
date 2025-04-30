import About from "@/components/home/About"
import Reviews from "@/components/home/Reviews"
import { FaFacebook } from "react-icons/fa";

import Image from "next/image"
import { FC } from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import Trustedby from "@/components/home/Trustedby";
import Container from "@/components/shared/Container";


interface IProps {

}
const features = [
  {
    title: "Free Delivery",
    items: "Orders Over $120",
    icon: "/icons/Free Delivery.svg",
  },
  {
    title: "Get Refund",
    items: "Within 30 Days Returns",
    icon: "/icons/Get Refund.svg",
  },
  {
    title: "Safe Payment",
    items: "100% Secure Payment",
    icon: "/icons/Safe Payment.svg",
  },
  {
    title: "24/7 Support",
    items: "Feel Free To Call Us",
    icon: "/icons/Support.svg",
  },
];
const page: FC<IProps> = () => {
  return (
    <div className="w-full mx-auto">
      <About />
      <Reviews />
      <div className=" w-full flex flex-col justify-center items-center ">
        <div>

        <p className="text-[#F82BA9] text-center  font-bold tracking-[4px] uppercase">Our Team</p>
        <p className="text-[#160E4B] text-center font-bold text-3xl">Meet Our Expert <span className="text-[#F82BA9]">Team</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center ">
          <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[40px] shadow-sm w-[300px] lg:w-full">
            <Image
              src={"/about/person1.svg"}
              alt=""
              width={250}
              height={272}
              className="w-full"
            />
            <div className="flex flex-col items-center gap-2 font-bold text-lg border-b border-[#757F95 pb-5">
              <p className="text-[#160E4B]">Ahmed Mohamed</p>
              <p className="text-[#F82BA9] ">Senior Manager</p>
            </div>

            <div className="flex items-center justify-between ">
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaFacebook size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaInstagram size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaTwitter size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <CiYoutube size={20} />
              </span>


            </div>


          </div>
          <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[40px] shadow-sm w-[300px] lg:w-full">
            <Image
              src={"/about/person2.svg"}
              alt=""
              width={250}
              height={272}
            />
            <div className="flex flex-col items-center gap-2 font-bold text-lg border-b border-[#757F95 pb-5">
              <p className="text-[#160E4B]">Ahmed Mohamed</p>
              <p className="text-[#F82BA9] ">Senior Manager</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaFacebook size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaInstagram size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaTwitter size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <CiYoutube size={20} />
              </span>


            </div>


          </div>
          <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[40px] shadow-sm w-[300px] lg:w-full">
            <Image
              src={"/about/person3.svg"}
              alt=""
              width={250}
              height={272}
            />
            <div className="flex flex-col items-center gap-2 font-bold text-lg border-b border-[#757F95 pb-5">
              <p className="text-[#160E4B]">Ahmed Mohamed</p>
              <p className="text-[#F82BA9] ">Senior Manager</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaFacebook size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaInstagram size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaTwitter size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <CiYoutube size={20} />
              </span>


            </div>


          </div>
          <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[40px] shadow-sm w-[300px] lg:w-full">
            <Image
              src={"/about/person4.svg"}
              alt=""
              width={250}
              height={272}
            />
            <div className="flex flex-col items-center gap-2 font-bold text-lg border-b border-[#757F95 pb-5">
              <p className="text-[#160E4B]">Ahmed Mohamed</p>
              <p className="text-[#F82BA9] ">Senior Manager</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaFacebook size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaInstagram size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <FaTwitter size={20} />
              </span>
              <span className="w-[36px] h-[36px] rounded-full  flex justify-center items-center bg-[#F82BA9] text-[#FFFF]">
                <CiYoutube size={20} />
              </span>


            </div>


          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3  bg-[#FEEDF7] rounded-2xl container mx-auto  my-14 ">
        {features.map((card, index) => (
          <div key={index} className=" flex items-center gap-4  p-4">
            <div className="p-5 rounded-full bg-[#F82BA9]">
              <Image
                src={card.icon}
                alt={card.title}
                width={30}
                height={30}
              />
            </div>
            <div className="text-[#160E4B] font-semibold">
              <p>{card.title}</p>
              <p className="text-[#757F95] font-normal">{card.items}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-14 container mx-auto p-4 ">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/about/insta.svg"}
            alt="insta"
            width={256}
            height={50}
          />

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4 my-5">
            <div className="relative  rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0000004D] w-full h-full hidden group-hover:flex justify-center items-center rounded-2xl transition-all duration-300">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F82BA9] text-white">
                  <FaInstagram size={20} />
                </span>
              </div>
              <Image
                src={"/about/insta1.svg"}
                alt={"insta4"}
                width={237}
                height={237}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative  rounded-2xl overflow-hidden group">

              <div className="absolute inset-0 bg-[#0000004D] w-full h-full hidden group-hover:flex justify-center items-center rounded-2xl transition-all duration-300">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F82BA9] text-white">
                  <FaInstagram size={20} />
                </span>
              </div>


              <Image
                src={"/about/insta2.svg"}
                alt={"insta4"}
                width={237}
                height={237}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative  rounded-2xl overflow-hidden group">

              <div className="absolute inset-0 bg-[#0000004D] w-full h-full hidden group-hover:flex justify-center items-center rounded-2xl transition-all duration-300">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F82BA9] text-white">
                  <FaInstagram size={20} />
                </span>
              </div>


              <Image
                src={"/about/insta3.svg"}
                alt={"insta4"}
                width={237}
                height={237}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative  rounded-2xl overflow-hidden group">

              <div className="absolute inset-0 bg-[#0000004D] w-full h-full hidden group-hover:flex justify-center items-center rounded-2xl transition-all duration-300">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F82BA9] text-white">
                  <FaInstagram size={20} />
                </span>
              </div>


              <Image
                src={"/about/insta4.svg"}
                alt={"insta4"}
                width={237}
                height={237}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative  rounded-2xl overflow-hidden group">

              <div className="absolute inset-0 bg-[#0000004D] w-full h-full hidden group-hover:flex justify-center items-center rounded-2xl transition-all duration-300">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F82BA9] text-white">
                  <FaInstagram size={20} />
                </span>
              </div>


              <Image
                src={"/about/insta5.svg"}
                alt={"insta4"}
                width={237}
                height={237}
                className="object-cover w-full h-full"
              />
            </div>



          </div>

        </div>

      </div>

      <Trustedby/>

    </div>
  )
}

export default page
