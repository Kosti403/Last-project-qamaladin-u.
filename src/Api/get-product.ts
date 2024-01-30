import axios from "axios";

const GetProduct = async (productId: string) => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default GetProduct;
