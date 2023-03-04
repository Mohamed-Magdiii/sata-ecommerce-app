import { useQuery } from "react-query";
import { request } from "../../../../../app/modules/utils/axios-utils";

export const getUserNotification = async () => {
  return await request({
    url: "/notifications/NotificationByUser",
    method: "get",
  });
};

export const useGetUserNotification = () => {
  return useQuery("user-notifications", getUserNotification);
};
