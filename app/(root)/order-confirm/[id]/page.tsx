import { CheckCircle2 } from "lucide-react";
import { Suspense } from "react";
import OrderConfirmationSkeleton from "./skeleton";

export default function OrderConfirmation() {
  return (
    <Suspense fallback={<OrderConfirmationSkeleton />}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4">
        {/* Order Confirmation */}
        <div className="w-full max-w-2xl border border-[#f82ba9] rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="text-green-500 w-6 h-6" />
            <h1 className="text-[#160e4b] text-2xl font-semibold">
              Your Order Is Confirmed
            </h1>
          </div>
          <p className="text-[#797979]">
            An Email Been Sent To Your Mail Address @Gmail.Com
          </p>
        </div>

        {/* Cart Summary */}
        <div className="w-full max-w-2xl border border-[#f82ba9] rounded-2xl overflow-hidden">
          <div className="bg-[#feedf7] p-8">
            <h2 className="text-[#160e4b] text-xl font-semibold mb-6">
              Cart Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#160e4b] font-medium">Sub Total:</span>
                <span className="text-[#160e4b]">$4,500.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#160e4b] font-medium">Discount:</span>
                <span className="text-[#160e4b]">$5.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#160e4b] font-medium">Shipping:</span>
                <span className="text-[#160e4b]">Free</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#160e4b] font-medium">Taxes:</span>
                <span className="text-[#160e4b]">$25.00</span>
              </div>

              <div className="flex justify-between pt-4 border-t border-[#f82ba9]/20">
                <span className="text-[#160e4b] font-semibold">Total:</span>
                <span className="text-[#f82ba9] font-semibold">$4,520.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
