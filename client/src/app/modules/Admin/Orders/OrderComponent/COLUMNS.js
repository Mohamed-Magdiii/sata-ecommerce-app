import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "CUSTOMERNAME",
    accessor: "customer.fullname",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "ADDRESS",
    accessor: "address",
  },
  {
    Header: "PAID",
    accessor: "is_paid",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "STATUS",
    accessor: "type",
  },
  {
    Header: "ACTIONS",
  },
];
