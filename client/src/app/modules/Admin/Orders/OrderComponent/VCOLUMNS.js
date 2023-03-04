import { format } from "date-fns";
export const COLUMN = [
  {
    Header: " ",
  },
  {
    Header: "Order ID",
    accessor: "_id",
  },
  {
    Header: "Customer Name",
    accessor: "customer.fullname",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Address",
    accessor: "order.address",
  },
  {
    Header: "Paid",
    accessor: "order.is_paid",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Actions",
  },
];
