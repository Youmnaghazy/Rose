import EditProductForm from "@/components/products/EditProductForm";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <EditProductForm id={id} />;
};

export default UpdateProductPage;
