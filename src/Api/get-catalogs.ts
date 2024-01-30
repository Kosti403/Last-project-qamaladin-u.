import axios from "axios";
export const GetProductMaine = async (pageNumber: number) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=${pageNumber}&limit=4`
  );
  return response.data;
};
