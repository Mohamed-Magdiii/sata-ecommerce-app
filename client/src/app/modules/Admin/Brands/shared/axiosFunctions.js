import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { HEADERS } from "../../../utils/HEADERS";
import { toast } from "react-toastify";
export const GET_ALL_BRANDS = `${process.env.REACT_APP_API_URL}/api/brands`;
export const GET_ALL_CATEGORIES = `${process.env.REACT_APP_API_URL}/api/categories`;

const getAllBrands = async () => {
  return await axios.get(GET_ALL_BRANDS);
};

export const useGetAllBrands = () => {
  return useQuery("get-all-brands", getAllBrands);
};

export const AddNewBrands = async (title, category, image) => {
  return await axios.post(GET_ALL_BRANDS, { title, category, image }, HEADERS);
};

export const deleteBrand = async (id) => {
  return await axios.delete(`${GET_ALL_BRANDS}/${id}`, HEADERS);
};

const getBrandById = async ({ queryKey }) => {
  return await axios.get(`${GET_ALL_BRANDS}/${queryKey[1]}`);
};

export const useGetBrandById = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["get-brand-by-id", id], getBrandById, {
    initialData: () => {
      const brand = queryClient
        .getQueryData("get-all-brands")
        ?.data?.find((b) => b._id === id);
      if (brand) {
        return {
          data: brand,
        };
      } else {
        return undefined;
      }
    },
  });
};

const updateBrand = async (updatedData) => {
  const { id, image, title, category } = updatedData;
  const formData = new FormData();
  formData.append("title", title);
    formData.append("category", category);
  if (image instanceof File) {
    formData.append("image", image);
  }
  return await axios.put(`${GET_ALL_BRANDS}/${id}`, formData, HEADERS);
};

export const useUpdateBrand = () => {
  return useMutation(updateBrand, {
    onSuccess: (response) => {
      console.log(response.data);
      toast.success("Success Operation Brand ID !!!");
    },
    onError: (error) => console.log(error.response)
  });
};
