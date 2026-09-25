import api from "@/config/axios";


const getProducts = async (limit = 10, skip = 0) => {
  const response = await api.get(
    `/products?limit=${limit}&skip=${skip}`
  );
  return response;
};


const searchProducts = async (query) => {
   return await api.get(`/products/search?q=${query}`);
}

const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

export {
    getProducts,
    searchProducts,
    getProductById
}