import axios from "axios";
export const baseUrl = "http://localhost:3001";
export const client = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
