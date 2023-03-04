import DispLang from "../../../utils/HEADERS";
export const COLUMNS = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    id: "index",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "NAME",
    accessor: DispLang ? "title.ar" : "title.en",
  },
  {
    Header: "VENDOR",
    accessor: "user.fullname",
  },
  {
    Header: "DESCRIPTION",
    accessor: DispLang ? "description.ar" : "description.en",
  },
  {
    Header: "CATEGORY",
    accessor: DispLang ? "categoryId.title.ar" : "categoryId.title.en",
  },
  {
    Header: "SUB.CATEGORY",
    accessor: DispLang ? "subCategory.title.ar" : "subCategory.title.en",
  },
  {
    Header: "BRAND",
    accessor: DispLang ? "brand.title.ar" : "brand.title.en",
  },
  {
    Header: "STATUS",
    accessor: "status",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "STORE",
    accessor: "store",
  },
  {
    Header: "SOLD",
    accessor: "bought",
  },
  {
    Header: "ACTIONS",
  },
];
