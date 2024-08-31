import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://example.ir",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Berare token"
  },
});

export default apiRequests;