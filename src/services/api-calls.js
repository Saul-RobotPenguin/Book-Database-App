import axios from "axios";

export const getAllBooks = () => {
  let response = axios.get(process.env.REACT_APP_BASE_URL + "/books");
  return response;
};
//test
export const getSingleBookInfo = (id) => {
  let response = axios.get(process.env.REACT_APP_BASE_URL + `/book/${id}`);
  return response;
};
