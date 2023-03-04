import { useQuery } from "react-query";
import { request } from "../../../../app/modules/utils/axios-utils";

const getReports = async ({ queryKey }) => {
  return await request({
    url: `${
      queryKey[1] === "vendor" ? "/vendors/reports" : "/vendors/all-reports"
    }`,
  });
};

export const useGetReports = (role) => {
  return useQuery(["user-report", role], getReports);
};
