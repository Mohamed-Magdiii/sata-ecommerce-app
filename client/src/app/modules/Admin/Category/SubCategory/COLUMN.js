import { format } from "date-fns";
export const COLUMN = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "TITLE",
    accessor:
      localStorage.getItem("i18nConfig") &&
      JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "ar"
        ? "title.ar"
        : "title.en",
  },
  {
    Header: "CATEGORYTITLE",
    accessor:
      localStorage.getItem("i18nConfig") &&
      JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "ar"
        ? "category.title.ar"
        : "category.title.en",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "ACTIONS",
  },
];
