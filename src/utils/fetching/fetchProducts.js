import axios from "axios";

//function to fetch the products using axios
export const getProducts = async () => {
  try {
    const prods = await axios.get(
      "https://my-json-server.typicode.com/arka90/products/products"
    );
    return prods;
  } catch (err) {
    console.log("Error In fetching");
  }
};

