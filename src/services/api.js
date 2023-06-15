import axios from "axios";

const BASE_URL = 'http://localhost:9000';

export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/products`);
}
export const getTypeOfProducts = () => {
  return axios.get(`${BASE_URL}/type?_embed=products`);

}
export const getCategoryOfProducts = () => {
  return axios.get(`${BASE_URL}/type?_embed=products`);

}

// get single product
export const getSingleProduct = (id) => {
  return axios.get(`${BASE_URL}/products/${id}`);
}
// http://localhost:9000/category?_embed=products
export const getSingleCategory = () => {
  return axios.get(`${BASE_URL}/category?_embed=products`);
}

// http://localhost:9000/subCategory?_embed=products
export const getSingleSubCategory = () => {
  return axios.get(`${BASE_URL}/subCategory?_embed=products`);
}

//http://localhost:9000/products?_sort=price&_order=desc
export const sortProduct = (order) => {
  return axios.get(`${BASE_URL}/products?_sort=price&_order=${order}`);
}

// ?views_gte=10&views_lte=20
// http://localhost:9000/products?price_lte=200
// /products?price_lte=348
export const maxPriceRangeProduct = (val) => {
  return axios.get(`${BASE_URL}/products?price_lte=${val}`);
}



// register
export const validateUser = (email) => {
  return axios.get(`${BASE_URL}/users?Email=${email}`);
}

export const addUser = (user) => {
  return axios.post(`${BASE_URL}/users`, user);
}
// login
export const getUser = (email, password) => {
  return axios.get(`${BASE_URL}/users?Email=${email}&Password=${password}`);
}




// export const deleteBook = (id) => {
//     return axios.delete(`${ BASE_URL } / books / ${ id }`);
// }

// export const editBook = (book) => {
//     return axios.put(`${ BASE_URL } / books / ${ book.id }`, book);
// }