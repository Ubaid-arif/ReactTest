import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../constant/utils";
import API_ENDPOINTS from "./endPoint";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

export const handleApi = async (axiosPromise) => {
  try {
    return (await axiosPromise).data;
  } catch (err) {
    console.log(err);

    if (err instanceof AxiosError) {
      throw err;
    }

    if (err instanceof Error) {
      throw err;
    }

    throw err;
  }
};
console.log("API_ENDPOINTS.GET_ALL_PRODUCT");

export const getAllProduct = (payload) =>
  handleApi(Axios.get(API_ENDPOINTS.GET_ALL_PRODUCT, { params: payload }));
