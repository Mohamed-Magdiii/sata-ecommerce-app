import { format } from "date-fns";
import DispLang from "../../shared/DispLang";
export const Columns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "LOGO",
    accessor: "image",
  },
  {
    Header: "TITLE",
    accessor: DispLang ? "title.ar" : "title.en",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "CATEGORY",
    accessor: DispLang ? "category.title.ar" : "category.title.en",
  },
  {
    Header: "ACTIONS",
  },
];
