import axios from "axios";

const http = axios.create({
  baseURL: "https://epicure-dashboard.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;