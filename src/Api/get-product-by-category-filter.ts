import axios from "axios";

export const getProductsByCategoryAndFilter = async (
  title: string,
  categoryId: string
) => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/
?title=${title}&price_min=0&price_max=9999&categoryId=${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
