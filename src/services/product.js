import axios from "./axiosConfig";
// import axios from "axios";

export async function getAllProducts(category) {
  let data;
  try {
    data = await axios.get("/products", { params: { category: category } });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  let data;

  try {
    data = await axios.get(`/products/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilteredProduct() {}
