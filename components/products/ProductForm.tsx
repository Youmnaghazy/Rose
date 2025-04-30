"use client";

import { AddProductSchemaType, editProductSchema } from "@/schemas";
import ImageInput from "../shared/ImageInput";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { addProductSchema } from "@/schemas";
import { useEffect } from "react";
import {
  useAddProduct,
  useGetProductByID,
  useUpdateProduct,
} from "@/lib/api/hooks/product";
import { toast } from "sonner";
import { CheckCircleIcon, XCircleIcon, Loader2 } from "lucide-react";
import FormMessage from "../shared/FormMessage";
import { Skeleton } from "../ui/skeleton";

const ProductFormSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Skeleton className="h-[300px] w-full rounded-xl" />
        <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[70px] w-[70px] rounded-xl" />
          ))}
        </div>
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

const ProductForm = ({ id }: { id?: string }) => {
  const { data: productResponse, isPending: isPendingGetProduct } =
    useGetProductByID(id as string);

  const product = productResponse?.product;

  const formSchema = id ? editProductSchema : addProductSchema;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddProductSchemaType>({
    resolver: zodResolver(addProductSchema),
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

  const { mutate: addProduct, isPending: isAddProductPending } =
    useAddProduct();

  const { mutate: updateProduct, isPending: isUpdateProductPending } =
    useUpdateProduct();

  const isFormPending = isAddProductPending || isUpdateProductPending;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  if (isPendingGetProduct) {
    return <ProductFormSkeleton />;
  }

  const onSubmit = (data: AddProductSchemaType) => {
    console.log(data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("discount", data.discount.toString());
    formData.append("priceAfterDiscount", data.priceAfterDiscount.toString());
    formData.append("description", data.description);
    formData.append("quantity", data.quantity.toString());
    formData.append("images", data.img1);
    formData.append("images", data.img2);
    formData.append("images", data.img3);
    formData.append("images", data.img4);
    formData.append("imgCover", data.imgCover);

    addProduct(formData, {
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
    });
  };

  return (
    <form className="p-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        <Controller
          control={control}
          name="imgCover"
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <ImageInput
                defaultImage={
                  field.value
                    ? URL.createObjectURL(field.value)
                    : product?.imgCover
                }
                onChange={(file) => field.onChange(file)}
              />
              {fieldState.error && (
                <FormMessage message={fieldState.error?.message} />
              )}
            </div>
          )}
        />
        <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
          <Input placeholder="Product Name" {...register("title")} />
          {errors.title && <FormMessage message={errors.title?.message} />}
          <Input placeholder="Price" {...register("price")} />
          {errors.price && <FormMessage message={errors.price?.message} />}
          <Input placeholder="Discount" {...register("discount")} />
          {errors.discount && (
            <FormMessage message={errors.discount?.message} />
          )}
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
          {errors.quantity && (
            <FormMessage message={errors.quantity?.message} />
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Controller
            control={control}
            name="img1"
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <ImageInput
                  btn="out"
                  id="image-input-1"
                  maxWidth="70px"
                  onChange={(file) => field.onChange(file)}
                  defaultImage={
                    field.value
                      ? URL.createObjectURL(field.value)
                      : product?.images[0]
                  }
                />
                {fieldState.error && (
                  <FormMessage message={fieldState.error?.message} />
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name="img2"
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <ImageInput
                  btn="out"
                  id="image-input-2"
                  maxWidth="70px"
                  onChange={(file) => field.onChange(file)}
                  defaultImage={
                    field.value
                      ? URL.createObjectURL(field.value)
                      : product?.images[1]
                  }
                />
                {fieldState.error && (
                  <FormMessage message={fieldState.error?.message} />
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name="img3"
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <ImageInput
                  btn="out"
                  id="image-input-3"
                  maxWidth="70px"
                  onChange={(file) => field.onChange(file)}
                  defaultImage={
                    field.value
                      ? URL.createObjectURL(field.value)
                      : product?.images[2]
                  }
                />
                {fieldState.error && (
                  <FormMessage message={fieldState.error?.message} />
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name="img4"
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <ImageInput
                  btn="out"
                  id="image-input-4"
                  maxWidth="70px"
                  onChange={(file) => field.onChange(file)}
                  defaultImage={
                    field.value
                      ? URL.createObjectURL(field.value)
                      : product?.images[3]
                  }
                />
                {fieldState.error && (
                  <FormMessage message={fieldState.error?.message} />
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-4 shadow-card-2 p-4 rounded-xl">
          <h2 className="text-lg font-medium">Sizes</h2>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="size"
                id="size-0"
                className="accent-rose-100"
              />
              <label htmlFor="size-0">extra Small</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="size"
                id="size-1"
                className="accent-rose-100"
              />
              <label htmlFor="size-1">Small</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="size"
                id="size-2"
                className="accent-rose-100"
              />
              <label htmlFor="size-2">Medium</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="size"
                id="size-3"
                className="accent-rose-100"
              />
              <label htmlFor="size-3">Large</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="size"
                id="size-4"
                className="accent-rose-100"
              />
              <label htmlFor="size-4">Extra Large</label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left flex justify-end">
        <Button disabled={isFormPending}>
          {isFormPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {id ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  );
};
export default ProductForm;
