"use client"
import { useLogin } from "@/hooks";
import { fetchCartItems } from "@/lib/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { Button } from "../ui/button";
import { getToken } from "@/lib/actions";
import { useSelector } from "react-redux";
import { fetchUserProfile } from "@/lib/slices/CurrentUser";

const NavBar = () => {
  const [list, setList] = useState(false);
  const dispatch = useAppDispatch();
  const myCart = useAppSelector((state) => state.cartReducer.items);
  const { data, loading, error } = useAppSelector((state) => state.userReduer);

  const pathname = usePathname();
  const home = pathname === "/";
  const allCategory = pathname === "/all-category";
  const about = pathname === "/about-us";
  const contactUs = pathname === "/contact";


  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const [_, setLogin] = useLogin();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
console.log(data);

  return (
    <Container className="flex justify-between items-center">
      <Image src={"/logo.svg"} alt="logo" width={86} height={86} />

      <div className="hidden md:flex items-center gap-6">
        <Link
          href={"/"}
          className={`${
            home ? "text-[#F82BA9]" : "text-[#160E4B] hover:text-[#F82BA9]"
          } font-medium`}
        >
          Home
        </Link>
        <Link
          href={"/all-category"}
          className={`${
            allCategory
              ? "text-[#F82BA9]"
              : "text-[#160E4B] hover:text-[#F82BA9]"
          } font-medium`}
        >
          All Category
        </Link>
        <Link
          href={"/about-us"}
          className={`${
            about ? "text-[#F82BA9]" : "text-[#160E4B] hover:text-[#F82BA9]"
          } font-medium`}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className={`${
            contactUs ? "text-[#F82BA9]" : "text-[#160E4B] hover:text-[#F82BA9]"
          } font-medium`}
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Image src={"/icons/search.svg"} alt="logo" width={40} height={36} />

        {data && !error ? (
          <>

          <Link
          href={"#"}
          className="text-[#F82BA9] flex items-center justify-center relative"
        >
          <span className="absolute -top-[70%] -right-1 bg-[#F82BA9] text-white rounded-full text-xs w-[18px] h-[18px] flex items-center justify-center">
            2
          </span>
          <IoMdHeartEmpty size={24} />
        </Link>

        <Link
          href={"/cart"}
          className="text-[#F82BA9] flex items-center justify-center relative"
        >
          {myCart && myCart?.numOfCartItems > 0 && (
            <span className="absolute -top-[90%] -right-1 bg-[#F82BA9] text-white rounded-full text-xs w-[18px] h-[18px] flex items-center justify-center">
              {myCart?.numOfCartItems}
            </span>
          )}
          <RiShoppingBagLine size={20} />
        </Link>
        <Link href={"/profile"} className="">
            <Image src={"/icons/user.svg"} alt="user" width={20} height={20} />
          </Link>
          </>
        ) : (
          <Button onClick={() => setLogin(true)}>Login</Button>
        )}



        <button onClick={() => setList(!list)} className="md:hidden">
          <Image
            src={"/icons/align-right.svg"}
            alt="list"
            width={24}
            height={24}
          />
        </button>
      </div>

      {list && (
        <div className="md:hidden absolute top-0 right-0 bg-[#00000080] w-full h-full font-[Roboto] z-50">
          <div className="bg-[#FFFFFF] w-[235px] h-[306px] py-6 px-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Image src={"/logo.svg"} alt="logo" width={49} height={37} />
              <button
                onClick={() => setList(!list)}
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#00000014]"
              >
                <IoMdClose size={20} className="text-[#160E4B]" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <Link
                href={"/"}
                className={`${
                  home
                    ? "text-[#F82BA9]"
                    : "text-[#160E4B] hover:text-[#F82BA9]"
                } font-medium`}
              >
                Home
              </Link>
              <Link
                href={"/all-category"}
                className={`${
                  allCategory
                    ? "text-[#F82BA9]"
                    : "text-[#160E4B] hover:text-[#F82BA9]"
                } font-medium`}
              >
                All Category
              </Link>
              <Link
                href={"/about-us"}
                className={`${
                  about
                    ? "text-[#F82BA9]"
                    : "text-[#160E4B] hover:text-[#F82BA9]"
                } font-medium`}
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className={`${
                  contactUs
                    ? "text-[#F82BA9]"
                    : "text-[#160E4B] hover:text-[#F82BA9]"
                } font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default NavBar;
