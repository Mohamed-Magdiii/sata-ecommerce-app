import request from "../../../../utils/api-utils";
import { toast } from "react-toastify";

export const sendNotification = async (data) => {
  try {
    request
      .post("/notifications", data)
      .then((newNotification) => toast.success(newNotification.data.msg));
  } catch (error) {
    toast.error("Error sending Notification");
  }
};
