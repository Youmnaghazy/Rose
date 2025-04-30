import ProductForm from "@/components/products/ProductForm";
import ProductsGrid, {
  ProductsGridSkeleton,
} from "@/components/products/products-grid";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ProductFormPage = () => {
  return (
    <>
      <ProductForm />
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ProductsGrid />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default ProductFormPage;
