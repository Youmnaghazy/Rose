import { Skeleton } from "@/components/ui/skeleton";

export default function OrderConfirmationSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4">
      {/* Order Confirmation Skeleton */}
      <div className="w-full max-w-2xl border border-[#f82ba9] rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-8 w-64" />
        </div>
        <Skeleton className="h-5 w-72" />
      </div>

      {/* Cart Summary Skeleton */}
      <div className="w-full max-w-2xl border border-[#f82ba9] rounded-2xl overflow-hidden">
        <div className="bg-[#feedf7] p-8">
          <Skeleton className="h-8 w-32 mb-6" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="flex justify-between pt-4 border-t border-[#f82ba9]/20">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
