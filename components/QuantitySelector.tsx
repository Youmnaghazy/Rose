"use client";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store";
import { updateCartItem } from "@/lib/slices/cartSlice";

interface QuantitySelectorProps {
  productId: string;
  initialQuantity: number;
  allQuantity:number
  cart?:boolean
  getquantity?: (quantity: number) => void;
}

export default function QuantitySelector({ productId, initialQuantity ,allQuantity,cart=false ,getquantity}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useAppDispatch();

  const handleUpdate = (newQty: number) => {
    setQuantity(newQty);
    if(cart){

      dispatch(updateCartItem({ product: productId, quantity: newQty }));
    }
  };

  useEffect(() => {
  if(getquantity){
    getquantity(quantity)
  }
  }
  , [quantity, getquantity]);

  const increment = () => handleUpdate(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      handleUpdate(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        disabled={quantity===allQuantity}
        className="w-8 h-8 flex items-center cursor-pointer justify-center bg-pink-100 text-pink-500 rounded-full"
      >
        -
      </button>
      <span className="text-pink-500">{quantity}</span>
      <button
        onClick={increment}
        className="w-8 h-8 flex items-center cursor-pointer justify-center bg-pink-100 text-pink-500 rounded-full"
      >
        +
      </button>
    </div>
  );
}
