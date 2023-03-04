import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../../../utils/axios-utils";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";

const getAllCategories = async () => {
  return await request({ url: "/categories" });
};

export const useGetAllcategories = () => {
  return useQuery("get-all-categories", getAllCategories);
};

const addNewCategory = async (data) => {
  const formData = new FormData();
  formData.append("title_en", data.title_en);
  formData.append("title_ar", data.title_ar);
  formData.append("showInMenu", data.showInMenu);
  formData.append("showInHomePage", data.showInHomepage);
  formData.append("image", data.image);
  return await request({ url: "/categories", method: "post", data: formData });
};

export const useAddNewCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewCategory, {
    onSuccess: () => {
      toast.success(
        DispLang ? "تم اضافه منتج جديد" : "New Category has been Added !"
      );
      queryClient.invalidateQueries("get-all-categories");
    },
    onError: () =>
      toast.error(
        DispLang ? "خطأ فى اراسال البيانات " : "Error while Adding !"
      ),
  });
};
