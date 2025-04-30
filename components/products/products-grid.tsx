"use client";

import { useGetProducts } from "@/lib/api/hooks/product";
import ProductCard, { ProductCardSkeleton } from "../dashboard/ProductCard";

const ProductsGrid = () => {
  const {
    data: { products },
  } = useGetProducts(true);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductsGrid;

export const ProductsGridSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
