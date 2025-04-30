"use client";

import { useGetProductByID, useUpdateProduct } from "@/lib/api/hooks/product";
import { editProductSchema, EditProductSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircleIcon, Loader2, XCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import FormMessage from "../shared/FormMessage";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";

const EditProductFormSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
          <Skeleton className="h-6 w-24" />
          <div className="grid gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-left flex justify-end">
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
};

const EditProductForm = ({ id }: { id: string }) => {
  const { data: productResponse, isPending: isPendingGetProduct } =
    useGetProductByID(id);

  const product = productResponse?.product;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditProductSchemaType>({
    resolver: zodResolver(editProductSchema),
  });

  useEffect(() => {
    if (!product) return;

    setValue("title", product.title);
    setValue("price", product.price);
    setValue("discount", product.discount);
    setValue("priceAfterDiscount", product.priceAfterDiscount);
    setValue("description", product.description);
    setValue("quantity", product.quantity);
  }, [product]);

  const { mutate: updateProduct, isPending: isUpdateProductPending } =
    useUpdateProduct();


  if (isPendingGetProduct) {
    return <EditProductFormSkeleton />;
  }

  const onSubmit = (data: EditProductSchemaType) => {
    console.log(data);

    const productData = {
      title: data.title,
      price: data.price,
      description: data.description,
      quantity: data.quantity,
      discount: data.discount,
      priceAfterDiscount: data.priceAfterDiscount,
    };

    updateProduct(
      { data: productData, id },
      {
        onSuccess: () => {
          toast.success("Product added successfully", {
            icon: <CheckCircleIcon className="w-4 h-4" />,
          });
        },
        onError: (data) => {
          console.log(data);
          toast.error("Failed to add product", {
            icon: <XCircleIcon className="w-4 h-4" />,
            description: "Please try again",
          });
        },
      }
    );
  };

  return (
    <form className="p-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
        <Input placeholder="Product Name" {...register("title")} />
        {errors.title && <FormMessage message={errors.title?.message} />}
        <Input placeholder="Price" {...register("price")} />
        {errors.price && <FormMessage message={errors.price?.message} />}
        <Input placeholder="Discount" {...register("discount")} />
        {errors.discount && <FormMessage message={errors.discount?.message} />}
        <Input
          placeholder="Price After Discount"
          {...register("priceAfterDiscount")}
        />
        {errors.priceAfterDiscount && (
          <FormMessage message={errors.priceAfterDiscount?.message} />
        )}
        <Input placeholder="Description" {...register("description")} />
        {errors.description && (
          <FormMessage message={errors.description?.message} />
        )}
        <Input placeholder="Quantity" {...register("quantity")} />
        {errors.quantity && <FormMessage message={errors.quantity?.message} />}
      </div>

      <div className="text-left flex justify-end">
        <Button disabled={isUpdateProductPending}>
          {isUpdateProductPending && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          Update Product
        </Button>
      </div>
    </form>
  );
};
export default EditProductForm;
