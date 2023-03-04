import { toast } from "react-toastify";
import DispLang from "../../utils/HEADERS";

export const CancelRequest = () =>
  toast.success(DispLang ? "لقد تم الغاء الطلب" : "Request has been Canceled");
