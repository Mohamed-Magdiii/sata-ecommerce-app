import { useQuery } from "react-query";
import { request } from "../../../utils/axios-utils";

const getNewProduct = async () => {
  return await request({ url: "/products/newProduct" });
};

export const useGetNewProduct = () => {
  return useQuery("get-new-products", getNewProduct);
};

const mostWatched = async () => {
  return await request({ url: "/products/mostWatched" });
};
export const useGetMostWatched = () => {
  return useQuery("get-most-watched", mostWatched);
};
