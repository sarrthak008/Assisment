"use client";

import React, { useEffect, useState } from "react";
import { getProducts, searchProducts } from "@/services/productService";
import { useOpeartion } from "@/store/Operation";
import { toast } from "sonner";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 6;

  const { search } = useOpeartion();

  const fetchTableData = async (page) => {
    try {
      setLoading(true);

      // SEARCH API
      if (search.trim()) {
        const response = await searchProducts(search);

        setProducts(response.data.products);
        setTotalProducts(response.data.total);

        return;
      }

      // NORMAL PRODUCT API
      const skip = (page - 1) * limit;

      const response = await getProducts(limit, skip);

      setProducts(response.data.products);
      setTotalProducts(response.data.total);
    } catch (error) {
      toast.error("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Fetch data
  useEffect(() => {
    fetchTableData(currentPage);
  }, [currentPage, search]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 text-sm">
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Rating</th>
              <th className="px-5 py-4">Stock</th>
              <th className="px-5 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="h-[250px] text-center text-gray-500">
                  Loading Products...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={6} className="h-[250px] text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-12 h-12 rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {product.title}
                        </h3>

                        <p className="text-xs text-gray-500">
                          #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs capitalize">
                      {product.category}
                    </span>
                  </td>

                  <td className="px-5 py-4 font-semibold text-gray-900">
                    ${product.price}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <i className="ri-star-fill"></i>
                      {product.rating}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.stock > 20
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock} In Stock
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-3 text-lg">
                      <button className="text-blue-600 hover:text-blue-800">
                        <i className="ri-eye-line"></i>
                      </button>

                      <button className="text-amber-600 hover:text-amber-800">
                        <i className="ri-edit-line"></i>
                      </button>

                      <button className="text-red-600 hover:text-red-800">
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (Hide during search) */}
      {!search && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
          <span className="text-xs text-gray-500">
            Showing page{" "}
            <span className="font-semibold text-gray-800">
              {currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-800">
              {totalPages || 1}
            </span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1 || loading}
              className="px-3.5 py-1.5 text-xs font-medium bg-gray-100 rounded-lg disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-xs font-semibold">
              {currentPage} / {totalPages || 1}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages || loading}
              className="px-3.5 py-1.5 text-xs font-medium bg-black text-white rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;