import { useQuery } from "react-query";
import { request } from "../../../utils/axios-utils";

const getHome = async () => {
  return await request({ url: "/homePage" });
};

export const useGetHome = () => {
  return useQuery("get-all-home", getHome);
};