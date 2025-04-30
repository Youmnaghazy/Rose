"use client";
import QuantitySelector from "@/components/QuantitySelector";
import { fetchCartItems, removeFromCart, updateCartItem } from "@/lib/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [quality,setQuantity]= useState(1)
  const myCart = useAppSelector((state) => state.cartReducer.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems()).finally(() => setLoading(false));
  }, [dispatch,quality]);

  const handleUpdate = (newQty: number) => {
    setQuantity(newQty);
  };
  const subTotal = myCart?.cart?.totalPrice;
  const discount = myCart?.cart?.discount;
  const total = myCart?.cart?.totalPriceAfterDiscount;
  return (
    <div className="container mx-auto flex items-center justify-between gap-14 p-8">
      <div className="w-3/4">
        <table className="w-full">
          <thead>
            <tr className="font-semibold">
              <th className="px-4">
                <p className="border-b border-[#DEE2E6] p-2 w-fit">IMAGE</p>
              </th>
              <th>
                <p className="border-b border-[#DEE2E6] p-2 w-fit">PRODUCT NAME</p>
              </th>
              <th>
                <p className="border-b border-[#DEE2E6] p-2 w-fit">PRICE</p>
              </th>
              <th>
                <p className="border-b border-[#DEE2E6] p-2 w-fit">QUANTITY</p>
              </th>
              <th>
                <p className="border-b border-[#DEE2E6] p-2 w-fit">SUB TOTAL</p>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr key={index}>
                    <td className="pt-4">
                      <Skeleton className="h-[100px] w-[100px] rounded-lg" />
                    </td>
                    <td className="text-[#160E4B] font-semibold p-2 pt-4">
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="text-[#160E4B] font-medium p-2 pt-4">
                      <Skeleton className="h-6 w-16" />
                    </td>
                    <td>
                      <Skeleton className="h-10 w-24" />
                    </td>
                    <td className="text-[#160E4B] font-medium p-2 pt-4">
                      <Skeleton className="h-6 w-16" />
                    </td>
                    <td>
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </td>
                  </tr>
                ))
              : myCart?.cart?.cartItems?.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="pt-4">
                      <img
                        src={item.product.imgCover}
                        alt={item.product.title}
                        className="h-[100px] border border-[#00000014] rounded-lg"
                      />
                    </td>
                    <td className="text-[#160E4B] font-semibold p-2 pt-4">
                      {item.product.title}
                      <div className="text-[#757F95] font-normal text-sm">
                        <span className="font-semibold">Type:</span>
                      </div>
                      <div className="text-[#757F95] font-normal text-sm">
                        <span className="font-semibold">Color:</span>
                      </div>
                    </td>
                    <td className="text-[#160E4B] font-medium p-2 pt-4">
                      ${item.product.price.toFixed(2)}
                    </td>
                    <td>
                      <QuantitySelector
                        productId={item.product._id}
                        initialQuantity={item.quantity}
                        allQuantity={item.product.quantity}
                        getquantity={handleUpdate}
                        cart={true}
                      />
                    </td>
                    <td className="text-[#160E4B] font-medium p-2 pt-4">
                      ${item.price * item.quantity}
                    </td>
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(item.product._id))}
                        className="w-[35px] h-[35px] rounded-full border border-[#00000014] flex items-center justify-center cursor-pointer"
                      >
                        <IoIosClose size={30} className="text-[#160E4B]" />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="w-full flex  justify-start items-center gap-5 mt-4">
          <div className="flex w-fit justify-center items-center relative  ">
            <input type="email" placeholder="Your Coupon Code" className="border border-[#757F95] rounded-4xl p-4 py-3  w-[400px] focus:outline-0" />
            <button type="submit" className="bg-[#F82BA9] px-5 py-3 rounded-4xl text-[#FFFFFF] font-medium -ml-32 flex items-center gap-2">Apply Coupon
              <GoArrowRight size={20} />
            </button>
          </div>
          <Link href="/all-category" className="bg-[#F82BA9]   whitespace-nowrap text-white px-10 py-4 rounded-[10px] flex items-center gap-2">
          <GoArrowLeft size={20} />
            Continue Shopping
            </Link>
        </div>
      </div>
      <div className="w-1/4 bg-[#FEEDF7] p-10 rounded-[20px]">
        <h2 className="text-[#160E4B] font-semibold text-2xl mb-10">Cart Summary</h2>
        {loading ? (
          <>
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-10 w-full" />
          </>
        ) : (
          <>
            <div className="flex justify-between mt-2">
              <span className="text-[#160E4B] font-bold">Sub Total:</span>
              <span className="text-[#757F95] ">${subTotal}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[#160E4B] font-bold">Discount:</span>
              <span className="text-[#757F95] ">${discount}</span>
            </div>
            {/* <div className="flex justify-between mt-2">
              <span className="text-[#160E4B] font-bold">Shipping:</span>
              <span className="text-[#757F95] ">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[#160E4B] font-bold">Taxes:</span>
              <span className="text-[#757F95] ">${taxes.toFixed(2)}</span>
            </div> */}
            <div className="flex justify-between mt-4 font-bold">
              <span className="text-[#160E4B] font-bold">Total:</span>
              <span className="text-[#757F95] ">${total}</span>
            </div>
            <Link href="/checkout" className="bg-[#F82BA9] text-white mx-auto mt-4 py-[10px] px-[20px] w-fit rounded-[10px] flex items-center justify-center gap-2">
              Checkout Now
              <GoArrowRight size={20} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
