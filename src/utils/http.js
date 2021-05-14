import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const axiosGet = (path) => {
  return axios.get(BASE_URL + path);
};
