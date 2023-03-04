import { useQuery } from "react-query";
import { request } from "../../../../../app/modules/utils/axios-utils";

const getData = async ({ queryKey }) => {
  return await request({ url: `/users/getUserById/${queryKey[1]}` });
};

export const useAdminData = (id) => {
  return useQuery(["get-admin-data", id], getData);
};
