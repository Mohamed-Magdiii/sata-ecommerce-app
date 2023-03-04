import DispLang from "../../../utils/HEADERS";
export const Column = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "PRODUCT",
    accessor: DispLang ? "product.title.ar" : "product.title.en",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "CUSTOMER",
    accessor: "customer.fullname",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
  },
  {
    Header: "ACTIONS",
  },
];
