import { useQuery } from "react-query";
import { request } from "../../../utils/axios-utils";

const getProductById = async ({ queryKey }) => {
  return await request({ url: `/products/${queryKey[1]}` });
};

export const useGetProductById = (id) => {
  return useQuery(["get-product-by-id", id], getProductById);
};

const getAlbums = async ({ queryKey }) => {
  return await request({ url: `/products/findAllAlbums/${queryKey[1]}` });
};

export const useGetAllAlbums = (id) => {
  return useQuery(["get-albums", id], getAlbums);
};
