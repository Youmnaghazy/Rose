import CartSummary from "@/components/cart/cart-summary";
import CheckoutForm from "@/components/checkout/checkout-form";

const CheckoutPage = () => {
  return (
    <div className="grid gap-4 container max-md:px-4 mx-auto lg:grid-cols-[80%_20%] my-5">
      <CheckoutForm />
      <CartSummary />
    </div>
  );
};

export default CheckoutPage;
