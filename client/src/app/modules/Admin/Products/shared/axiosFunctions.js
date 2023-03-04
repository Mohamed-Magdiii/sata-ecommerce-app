import axios from "axios";
import { request } from "../../../utils/axios-utils";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";

const GET_ALL_PRODUCTS = `${process.env.REACT_APP_API_URL}/api/products`;
const GET_ALL_CATEGORIES = `${process.env.REACT_APP_API_URL}/api/categories`;
const HEADERS = {
  headers: {
    "x-auth-token": localStorage.getItem("authToken"),
  },
};

export const deleteProductById = (id) => {
  return axios.delete(`${GET_ALL_PRODUCTS}/${id}`, HEADERS);
};

const getAllProducts = async () => {
  return await request({ url: "/products" });
};

export const useGetAllProducts = () => {
  return useQuery("get-all-products", getAllProducts);
};

// repeated in category component and must deleted from here !!
const getAllCategories = async () => {
  return await axios.get(GET_ALL_CATEGORIES);
};

// repeated in category component and must deleted from here !!
export const useGetAllCategories = () => {
  return useQuery("get-all-categories", getAllCategories);
};

const getSubCategoryRelatedToCategory = async ({ queryKey }) => {
  return await request({ url: `/subcategories/category/${queryKey[1]}` });
};

export const useGetAllSubCategory = (categoryId) => {
  return useQuery(
    ["get-sub-category-related-to-category", categoryId],
    getSubCategoryRelatedToCategory,
    {
      enabled: !!categoryId && categoryId !== "Choose Category",
    }
  );
};

const getAllbrandsRelatedToCategory = async ({ queryKey }) => {
  return await request({ url: `brands/category/${queryKey[1]}` });
};

export const useGetAllBrands = (categoryId) => {
  return useQuery(
    ["get-all-brands-related-to-category", categoryId],
    getAllbrandsRelatedToCategory,
    {
      enabled: !!categoryId && categoryId !== "Choose Category",
    }
  );
};

export const getProdData = (newData) => {
  const formData = new FormData();
  formData.append("title_en", newData.title_en);
  formData.append("title_ar", newData.title_ar);
  formData.append("price", newData.price);
  newData.image.map((i) => formData.append("image", i));
  formData.append("categoryId", newData.categoryId);
  formData.append("description_en", newData.description_en);
  formData.append("description_ar", newData.description_ar);
  formData.append("subCategory", newData.subCategory);
  formData.append("brand", newData.brand);
  formData.append("color", newData.color);
  formData.append("size", newData.size);
  formData.append("store", newData.store);
  formData.append("onsale", newData.onsale.length > 0 ? "true" : "false");
  formData.append("sale", newData.sale);
  formData.append("low", newData.low);
  formData.append("vendor", newData.vendor);
  return formData;
};

const addNewProduct = async (newData) => {
  return await request({
    url: `/products`,
    method: "post",
    data: getProdData(newData),
  });
};

export const useAddNewProduct = () => {
  return useMutation(addNewProduct, {
    onSuccess: () =>
      toast.success(
        DispLang === "ar" ? "تم اضافه منتج جديد" : "Successfully Added"
      ),
    onError: () =>
      toast.error(
        DispLang ? "خطا اثناء ارسال البيانات" : "Error While Sending Data !"
      ),
  });
};

export const updProdId = async (newData) => {
  const formData = new FormData();
  formData.append("title_en", newData.title_en);
  formData.append("title_ar", newData.title_ar);
  formData.append("price", newData.price);
  newData.image.map((i) => formData.append("image", i.image));
  newData.image.map((i) => formData.append("imgId", i._id));
  formData.append("categoryId", newData.categoryId);
  formData.append("description_en", newData.description_en);
  formData.append("description_ar", newData.description_ar);
  formData.append("subCategory", newData.subCategory);
  formData.append("brand", newData.brand);
  formData.append("color", newData.color);
  formData.append("size", newData.size);
  formData.append("store", newData.store);
  formData.append("onsale", newData.onsale.length > 0 ? "true" : "false");
  formData.append("sale", newData.sale);
  formData.append("low", newData.low);
  formData.append("vendor", newData.vendor);
  return await request({
    url: `/products/${newData.id}`,
    method: "PUT",
    data: formData,
  });
};

export const useUpdateById = () => {
  return useMutation(updProdId, {
    onSuccess: () => toast.success("Updated !"),
    onError: () => toast.error("Error !"),
  });
};

const getProductsByCategoryOrSubCategory = ({ queryKey }) => {
  return axios.get(`${GET_ALL_PRODUCTS}/filterBy/${queryKey[1]}`);
};

export const useGetProductBy = (name, isFilterd) => {
  return useQuery(
    ["get-product-by-category-or-sub-category", name],
    getProductsByCategoryOrSubCategory,
    {
      enabled: isFilterd,
    }
  );
};

const getProductByDate = ({ queryKey }) => {
  return axios.get(
    `${GET_ALL_PRODUCTS}/filterByDate/${queryKey[1]}/${queryKey[2]}`
  );
};

export const useFilterProductByDate = (dateFrom, dateTo, isFilterdDate) => {
  return useQuery(
    ["filter-products-by-date", dateFrom, dateTo],
    getProductByDate,
    {
      enabled: isFilterdDate,
    }
  );
};

const getMostWatchedProduct = () => {
  return axios.get(`${GET_ALL_PRODUCTS}/mostWatched`);
};

export const useGetMostWatchedProducts = () => {
  return useQuery("get-most-watched", getMostWatchedProduct);
};

const getLowestProduct = () => {
  return axios.get(`${GET_ALL_PRODUCTS}/getLowestQuantity`);
};

export const useGetLowestProducts = () => {
  return useQuery("get-lowest-quantity", getLowestProduct);
};

const mostBought = async ({ queryKey }) => {
  return await request({ url: `/products/mostBought/${queryKey[1]}` });
};

export const useGetMostBought = (number) => {
  return useQuery(["most-bought", number], mostBought);
};

const getProductById = async ({ queryKey }) => {
  return request({ url: `/products/${queryKey[1]}` });
};

export const useGetProductById = (id) => {
  return useQuery(["get-product-by-id", id], getProductById);
};
