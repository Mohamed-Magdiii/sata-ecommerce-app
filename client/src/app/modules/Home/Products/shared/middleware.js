import { request } from "../../../utils/axios-utils";
import { useQuery } from "react-query";

const getProductHavingCategoryId = async ({ queryKey }) => {
  return await request({ url: `/homePage/${queryKey[1]}` });
};

export const useGetProduct = (id) => {
  return useQuery(
    ["get-product-with-category-id", id],
    getProductHavingCategoryId
  );
};

const filterProductByCategory = async ({ queryKey }) => {
  return request({
    url: '/products/filter-by-many-categories',
    method: "get",
    data: queryKey[1],
  });
};

export const useFilterProductByCategory = (ids) => {
  return useQuery(["filter-by-category", ids], filterProductByCategory,{
    enabled: ids.length > 0
  });
};
