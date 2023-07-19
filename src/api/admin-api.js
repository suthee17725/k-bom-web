import axios from "./axios";

export const getAllProduct = () => axios.get("/admin/products");
export const addProduct = (input) => axios.post("/admin/products", input);
export const updateProduct = (input) =>
  axios.patch("/admin/update-products", input);
export const deleteProduct = (id) =>
  axios.delete(`/admin/delete-products/${id}`);

export const getProductById = (id) => axios.get(`/admin/products/${id}`);
