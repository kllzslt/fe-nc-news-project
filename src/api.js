import axios from "axios";

const baseURL = "https://back-end-nc-news-project.herokuapp.com/api";

// export const fetchItems = () => {
//   return axios.get(`${baseURL}/items`).then(({ data }) => {
//     return data.items;
//   });
// };

// export const fetchCategories = () => {
//   return axios.get(`${baseURL}/categories`).then(({ data }) => {
//     return data.categories;
//   });
// };

// export const fetchByCategory = (sortByCategory) => {
//   return axios
//     .get(`${baseURL}/items?category_name=${sortByCategory}`)
//     .then(({ data }) => {
//       return data.items;
//     });
// };

// export const postItemToSell = (itemToPost) => {
//   return axios.post(`${baseURL}/items`, itemToPost).then((res) => {
//     return res;
//   });
// };

// export const itemToDelete = (itemToDelete) => {
//   return axios.delete(`${baseURL}/items/${itemToDelete}`).then((res) => {
//     console.log(res, "RES delete in API");
//     return res;
//   });
// };

// export const fetchUsers = () => {
//   return axios.get(`${baseURL}/users`).then(({ data }) => {
//     return data.users;
//   });
// };