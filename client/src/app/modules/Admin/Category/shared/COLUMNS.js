import { format } from "date-fns";
import DispLang from "../../../utils/HEADERS";
export const COLUMNS = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
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
    Header: "SHOWINMENU",
    accessor: "showInMenu",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "SHOWINHOMEPAGE",
    accessor: "showInHomepage",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "ACTIONS",
  },
];
