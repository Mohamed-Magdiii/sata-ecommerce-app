import { request } from "../../modules/utils/axios-utils";
import { useMutation, useQueryClient } from "react-query";

const updateState = async (updatedData) => {
  return await request({
    url: `/users/${updatedData.id}`,
    method: "put",
    data: { online: updatedData.online },
  });
};

export const useUpdateState = () => {
  const queryClient = useQueryClient();
  return useMutation(updateState, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-all-customers");
    },
  });
};
