import { useTable } from "react-table";

export const useGetAllTables = (columns, data) => {
  return useTable({ columns, data });
};
