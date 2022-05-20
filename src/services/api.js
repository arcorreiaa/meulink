import axios from "axios";

export const key = "fafa0d20565e073e4c0d8c317918f56f396cc228";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
