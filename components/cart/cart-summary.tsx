import { GoArrowRight } from "react-icons/go";

const CartSummary = () => {
  const cartItems = [
    {
      image: "/home/product1.png",
      name: "Special Gift Box",
      type: "Watch",
      color: "Orange",
      price: 1500,
      quantity: 1,
    },
    {
      image: "/home/product2.png",
      name: "Special Gift Box",
      type: "Watch",
      color: "Orange",
      price: 1500,
      quantity: 1,
    },

    {
      image: "/home/product3.png",
      name: "Special Gift Box",
      type: "Watch",
      color: "Orange",
      price: 1500,
      quantity: 1,
    },
  ];

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 0;
  const shipping = 0;
  const taxes = 25;
  const total = subTotal - discount + shipping + taxes;
  return (
    <div className="bg-[#FEEDF7] p-10 rounded-[20px]">
      <h2 className="text-[#160E4B] font-semibold text-2xl mb-10">
        Cart Summary
      </h2>
      <div className="flex justify-between mt-2">
        <span className="text-[#160E4B] font-bold">Sub Total:</span>
        <span className="text-[#757F95] ">${subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[#160E4B] font-bold">Discount:</span>
        <span className="text-[#757F95] ">${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[#160E4B] font-bold">Shipping:</span>
        <span className="text-[#757F95] ">${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[#160E4B] font-bold">Taxes:</span>
        <span className="text-[#757F95] ">${taxes.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 font-bold">
        <span className="text-[#160E4B] font-bold">Total:</span>
        <span className="text-[#757F95] ">${total.toFixed(2)}</span>
      </div>
      <button className="bg-[#F82BA9] text-white mx-auto mt-4 py-[10px] px-[20px] w-fit rounded-[10px] flex items-center justify-center gap-2">
        {" "}
        Checkout Now
        <GoArrowRight size={20} />
      </button>
    </div>
  );
};

export default CartSummary;
