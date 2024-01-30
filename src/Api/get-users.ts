import axios from "axios";

async function GetUsers() {
  try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default GetUsers;
