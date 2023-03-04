import { request } from "../../../utils/axios-utils";
import { useQuery } from 'react-query';

const getAll = async () => {
  return await request({ url: "/rates" });
};

export const useGetAllRates = () => {
  return useQuery('get-all-rates', getAll)
}