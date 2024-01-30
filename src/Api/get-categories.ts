import axios from "axios";

async function getCategories() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getCategories;
