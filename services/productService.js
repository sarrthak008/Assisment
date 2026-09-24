import api from "@/config/axios";


const getProducts = async (limit = 10, skip = 0) => {
  const { data } = await api.get(
    `/products?limit=${limit}&skip=${skip}`
  );

  return data;
};

export {
    getProducts
}