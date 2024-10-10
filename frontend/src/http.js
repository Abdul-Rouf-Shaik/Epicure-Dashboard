import axios from "axios";

const http = axios.create({
  baseURL: "https://epicure-dashboard.onrender.com",
  // baseURL: "https://localhost:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;