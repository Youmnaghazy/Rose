import Link from "next/link"
import { FC } from "react"
import { GoArrowRight } from "react-icons/go";


interface IProps{

}
const Footer:FC<IProps>= () => {
  return (
    <div className="w-full relative bg-cover bg-no-repeat bg-center p-20 flex flex-col gap-10  mt-20  " style={{ backgroundImage: 'url("/footerBg.svg")'}}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-5">
        <Link href={"/about-us"} className="text-[#160E4B] font-bold">
        About US
        </Link>
        <Link href={"/our-stores"} className="text-[#160E4B] font-bold">
        Store Location
        </Link>
        <Link href={"/contact"} className="text-[#160E4B] font-bold">
        Contact
        </Link>
        <Link href={"/delivery"} className="text-[#160E4B] font-bold">
        Delivery
        </Link>
        <Link href={"/policy"} className="text-[#160E4B] font-bold">
        Policy
        </Link>
        <Link href={"/faqs"} className="text-[#160E4B] font-bold">
        FAQS
        </Link>

      </div>
      <div className="flex  flex-col justify-center items-center w-full">
        <p className="text-[#160E4B] font-bold text-3xl">Get <span className="text-[#F82BA9]">20%</span> Off Discount Coupon</p>
        <p className="text-[#757F95] font-medium text-xl">By Subscribe Our Newsletter</p>
      </div>
      <div className="flex w-full justify-center items-center relative  ">
      <input type="email" placeholder="Enter Your Email" className="bg-[#FFFFFF] rounded-4xl px-5 py-2 w-[200px]  md:w-[300px] focus:outline-0" />
      <button type="submit" className="bg-[#F82BA9] px-5 py-2 rounded-4xl text-[#FFFFFF] font-medium -ml-10 flex items-center gap-2">Subscribe
        <GoArrowRight size={20} />
      </button>
    </div>
    </div>
  )
}

export default Footer
