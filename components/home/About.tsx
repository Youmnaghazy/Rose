import Image from "next/image"
import { FC } from "react"
import { MdOutlineDone } from "react-icons/md";
import Container from "../shared/Container";

interface IProps{

}

const features = [
  'Streamlined Shipping Experience',
  'Affordable Modern Design',
  'Competitive Price & Easy To Shop',
  'We Made Awesome Products',
];

const About:FC<IProps>= () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-14 ">
      <div className=" w-full lg:w-1/2 flex  items-center justify-center  lg:justify-end gap-3">
      <Image
        src={"/home/about1.svg"}
        alt=""
        width={329}
        height={329}
        />
        <div className="flex flex-col items-center gap-2">
        <Image
        src={"/home/about2.svg"}
        alt=""
        width={193}
        height={193}
        className="hidden sm:block"
        />
        <Image
        src={"/home/about3.svg"}
        alt=""
        width={193}
        height={193}
        className="hidden sm:block"
        />
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white py-12">

      <div className="text-center md:text-left space-y-4">
        <p className="text-pink-500 font-bold tracking-widest uppercase text-sm">About Us</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">
          We Provide Best And Quality <span className="text-pink-500">Gifts Box</span> Product For You
        </h2>
        <p className="text-gray-500 max-w-xl">
          Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate.
          Neque quidem qui et autem dolor dicta necessitatibus ut ad.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
          Discover More →
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto md:mx-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-11 h-11 rounded-full bg-[#8C52FF] flex justify-center items-center">
             <MdOutlineDone className="text-[#FFFF]" size={20} />

              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      </div>

    </Container>
  )
}

export default About
