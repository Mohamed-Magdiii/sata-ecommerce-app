import { useQuery, useQueryClient, useMutation } from "react-query";
import request from "../../../utils/api-utils";

const getMessagesBetweenTwoPersons = async ({ queryKey }) => {
  return await request({ url: `/messages/myConversationWith/${queryKey[1]}` });
};

export const useGetMessageBetween = (id) => {
  return useQuery(
    ["get-messages-between-two-persons", id],
    getMessagesBetweenTwoPersons,
    {
      refetchInterval: 1,
    }
  );
};

const sendMessage = async (data) => {
  return await request({
    url: `/messages/${data.id}`,
    method: "post",
    data: { text: data.text },
  });
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation(sendMessage, {
    onSuccess: () =>
      queryClient.invalidateQueries("get-messages-between-two-persons"),
  });
};
