import Image from "next/image";
import { FC } from "react";
import GiftSlider from "../GiftSlider";
import Container from "../shared/Container";
import Link from "next/link";

interface ICardData {
  title: string;
  items: string;
  icon: string;
}

const cardData: ICardData[] = [
  {
    title: "Gifts Box",
    items: "30 Items",
    icon: "/icons/gift-box.svg",
  },
  {
    title: "Home & Living Gifts",
    items: "25 Items",
    icon: "/icons/home.svg",
  },
  {
    title: "Jewelry & Accessories",
    items: "15 Items",
    icon: "/icons/jewelry.svg",
  },
  {
    title: "Garment Care",
    items: "30 Items",
    icon: "/icons/garment.svg",
  },
  {
    title: "Office & Stationery",
    items: "30 Items",
    icon: "/icons/office.svg",
  },
];
const giftCollections = [
  {
    title: "Awesome Gifts Box Collections",
    tag: "Gifts Box",
    button: "Shop Now",
    image: "/home/gift1.png",
  },
  {
    title: "Best Occasion Gifts Collections",
    tag: "Occasion Gifts",
    button: "Discover Now",
    image: "/home/gift2.png",
  },
  {
    title: "Combo Sets Gift Box Up To 50% Off",
    tag: "Occasion Gifts",
    button: "Discover Now",
    image: "/home/gift3.png",
  },
];

const features: ICardData[] = [
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
const HeroSection: FC = () => {
  return (
      <Container className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#FEEDF7] flex items-center gap-4 rounded-2xl p-4"
            >
              <div className="p-5 rounded-full bg-[#F82BA9]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-[#160E4B] font-semibold">
                <p>{card.title}</p>
                <p className="text-[#757F95] font-normal">{card.items}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 ">
          <div className="relative w-full lg:w-1/3  rounded-xl">
            <Image
              src={"/home/Red christmas gifts.svg"}
              alt="Red christmas gifts"
              fill
              className="object-cover  rounded-xl"
              quality={100}
            />
            <div className="absolute left-4 top-64 w-full space-y-3 ">
              <p className="text-[#F82BA9] tracking-[4.66px] font-bold">
                Start $10.99
              </p>
              <p className="text-[#160E4B] text-3xl font-semibold ">
                Special Gifts Box <br />
                For Your Love
              </p>
              <Link href={"/all-category"}  className="bg-[#F82BA9] w-fit px-3.5 py-1.5 text-[#FFFFFF] font-medium flex items-center gap-2 rounded-lg">
                Shop Now
                <Image
                  src={"/icons/arrowRight.svg"}
                  alt="arrowRight"
                  width={13}
                  height={15}
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <GiftSlider />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {giftCollections.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-[272px] "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover "
              />

              {i == 2 && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90.66deg, rgba(0, 0, 0, 0) 0.51%, rgba(255, 255, 255, 0.5) 99.4%)",
                  }}
                ></div>
              )}
              <div className="absolute  p-6 text-white right-0 text-right top-16">
                <p
                  className={` ${
                    i === 2 ? "text-[#FFFFFF]" : "text-[#F82BA9]"
                  } `}
                >
                  {item.tag}
                </p>
                <h3 className="text-xl font-semibold leading-snug pl-20 text-[#160E4B]">
                  {item.title}
                </h3>
                <Link href={"/all-category"} className="mt-2 bg-pink-500 hover:bg-pink-600 text-sm px-4 py-2 rounded-md transition">
                  {item.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#FEEDF7] rounded-2xl">
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
      </Container>
  );
};

export default HeroSection;
