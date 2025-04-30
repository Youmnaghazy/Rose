"use client"
import QuantitySelector from '@/components/QuantitySelector';
import api from '@/lib/helpers/axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaCircle } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { IoMdHeartEmpty } from 'react-icons/io';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Skeleton } from "@/components/ui/skeleton";
import { useAppDispatch } from '@/store';
import { addToCart } from '@/lib/slices/cartSlice';



const ProductDetails = ({ id }: { id: string }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const getProductDetails = async () => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["productDetail"],
    queryFn: getProductDetails,
  });

  const getCategory = async () => {
    const response = await api.get(`/categories/${data.product.category}`);
    return response.data;
  };

  const { isPending: isPendingCategory, error: errorCategory, data: dataCategory } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });


  const getquantity = (qty: number) => {
    setQuantity(qty);
  }

  useEffect(() => {
    if (data?.product?.imgCover) {
      setSelectedImage(data.product.imgCover);
    }
  }, [data]);

  return (
    <div className="container mx-auto my-10 px-20 ">
      <div className='flex items-start  flex-col lg:flex-row gap-10'>
        <div className="w-full h-[647px] lg:w-1/2">
          <div className='w-[90%] h-[400px] border border-[#00000014] rounded-[10px]'>
            {isPending ? (
              <Skeleton className="w-full h-full rounded-lg" />
            ) : (
              <Image
                src={selectedImage}
                alt="Special Gift Box"
                width={500}
                height={300}
                className="rounded-lg h-full w-full"
              />
            )}
          </div>
          <div className="w-[90%] h-[134px] flex items-center justify-between flex-wrap mt-4">
            {isPending
              ? Array(4).fill(0).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full  md:w-[120px] h-[100px] rounded-lg border border-[#00000014]"
                />
              ))
              : Array(4).fill(0).map((_, index) => {
                const imageSrc = data?.product?.images?.[index] || data?.product?.imgCover;
                return (
                  <Image
                    key={index}
                    src={imageSrc}
                    alt={`Thumb ${index + 1}`}
                    width={120}
                    height={100}
                    className="rounded-lg border border-[#00000014] cursor-pointer"
                    onClick={() => setSelectedImage(imageSrc)}
                  />
                );
              })}
          </div>
        </div>

        <div className="w-full h-full lg:w-1/2">
          {isPending ? (
            <>
              <Skeleton className="w-3/4 h-8 mb-4" />
              <Skeleton className="w-1/2 h-6 mb-4" />
              <Skeleton className="w-full h-20 mb-4" />
              <Skeleton className="w-1/3 h-6 mb-4" />
              <Skeleton className="w-1/4 h-6 mb-4" />
              <Skeleton className="w-full h-32 mb-4" />
              <Skeleton className="w-1/2 h-10 mb-4" />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">{data.product.title}</h1>
              <p className="text-[#757F95] text-lg font-medium mt-2">
                <span className='line-through'>${data.product.price}</span>{" "}
                <span className="text-[#F82BA9] text-2xl ">${data.product.priceAfterDiscount} </span>{" "}
                <span className='text-[#F05454] text-sm'>${data.product.discount}% Off</span>
              </p>
              <p className="mt-4 text-[#757F95]">
                {data.product.description}
              </p>
              <div className='w-full flex items-center justify-between flex-wrap gap-4'>
                <div className="mt-4">
                  <label className="block mb-2 text-[#757F95] font-medium">
                    Quantity
                  </label>
                  <QuantitySelector
                    productId={data.product._id}
                    initialQuantity={quantity}
                    allQuantity={data.product.quantity}
                    getquantity={getquantity}
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-[#757F95] font-medium">Size</label>
                  <select className="border rounded w-full p-2 text-[#757F95] font-medium">
                    <option>Choose Size</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-[#757F95] font-medium ">
                    Color
                  </label>
                  <div className="flex items-center gap-2">
                    <button>
                      <FaCircle size={28} className="text-[#606DDD] cursor-pointer" />
                    </button>
                    <button>
                      <FaCircle size={28} className="text-[#4CAF50] cursor-pointer" />
                    </button>
                    <button>
                      <FaCircle size={28} className="text-[#17A2B8] cursor-pointer" />
                    </button>
                    <button>
                      <FaCircle size={28} className="text-[#FFC107] cursor-pointer" />
                    </button>
                    <button>
                      <FaCircle size={28} className="text-[#F44336]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 mt-4">
                <ul className="list-disc text-[#757F95]">
                  <li className="mb-2">
                    <strong>Stock:</strong> {data.product.quantity > 1 ? "Available" : "Not Available"}
                  </li>
                  <li className="mb-2">
                    <strong>SKU:</strong> 266TYFD
                  </li>
                  {dataCategory && (
                    <li className="mb-2">
                      <strong>Category:</strong> {dataCategory?.category.name}
                    </li>
                  )

                  }
                  <li className="mb-2">
                    <strong>Brand:</strong> Novak
                  </li>
                  <li className="mb-2">
                    <strong>Tags:</strong> Gifts, Watch, Modern, Shop
                  </li>
                </ul>
              </div>
              <div className='w-full flex items-center gap-4'>
                <button
                  onClick={() => dispatch(addToCart({ product: data.product._id, quantity: quantity }))}
                  className=" bg-[#F82BA9] cursor-pointer text-white capitalize px-4 py-2 rounded-[10px] flex items-center gap-2">
                  <RiShoppingBagLine size={20} />
                  Add to Cart
                </button>
                <button className="w-[45px] h-[45px] bg-[#F82BA9] text-white rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty size={24} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <div className='w-full mt-10'>
        <div className='flex items-center justify-between'>
        <p className="text-[#160E4B] font-bold text-3xl">Related Items</p>
        <Link href="/allCategory" className='text-[#757F95] font-medium flex items-center gap-2'>
        View All
          <GoArrowRight size={16} />
        </Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {products.map((product, idx) => (
            <div key={idx} className="relative p-4 w-full ">
              {product.label && (
                <span className="absolute top-6 right-6 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.label}
                </span>
              )}
              <div className="bg-[#FEEDF7] rounded-lg p-6 ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto h-40 object-contain"
                />
              </div>
              <div className="px-2 mt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <div className="text-yellow-500 my-1">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                  <div className="text-pink-600 font-bold text-lg">
                    ${product.price.toFixed(2)}
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <button className="mt-2 w-[42px] h-[42px] rounded-full bg-[#8C52FF] text-[#FFFF] flex justify-center items-center">
                  <RiShoppingBagLine size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
