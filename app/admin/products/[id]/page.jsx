"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { getProductById } from "@/services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const response = await getProductById(id);
      setProduct(response.data);
    } catch (error) {
      toast.error("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center text-gray-500">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#F7F7F8] min-h-screen">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-5"
      >
        <i className="ri-arrow-left-line text-lg"></i>
        Back to Products
      </button>

      <div className="bg-white rounded-3xl p-6 shadow-sm grid lg:grid-cols-2 gap-10">

        {/* Left - Images */}
        <div>
          <div className="bg-gray-100 rounded-2xl p-8 h-[380px] flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          {/* Gallery */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 rounded-xl object-cover border cursor-pointer hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="space-y-5">

          <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs capitalize">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-500">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-black">
              ${product.price}
            </h2>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            <i className="ri-star-fill text-xl"></i>
            <span className="font-semibold text-black">
              {product.rating}
            </span>
            <span className="text-gray-400">(124 Reviews)</span>
          </div>

          {/* Stock */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500">Stock :</span>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                product.stock > 20
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock} Available
            </span>
          </div>

          {/* Brand */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Brand</p>
              <p className="font-semibold">{product.brand}</p>
            </div>

            <div>
              <p className="text-gray-400">SKU</p>
              <p className="font-semibold">{product.sku}</p>
            </div>

            <div>
              <p className="text-gray-400">Weight</p>
              <p className="font-semibold">{product.weight} g</p>
            </div>

            <div>
              <p className="text-gray-400">Warranty</p>
              <p className="font-semibold">{product.warrantyInformation}</p>
            </div>
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-4 pt-6">
            <button className="flex-1 py-3 rounded-xl bg-black text-white hover:bg-gray-800">
              <i className="ri-edit-line mr-2"></i>
              Edit Product
            </button>

            <button className="flex-1 py-3 rounded-xl border border-red-400 text-red-500 hover:bg-red-50">
              <i className="ri-delete-bin-6-line mr-2"></i>
              Delete
            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;