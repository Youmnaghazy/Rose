import ProductDetails from '../_compponent/ProductDetails';

const page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  return (
  <>
  <ProductDetails id={id} />
  </>

  );
};

export default page;
