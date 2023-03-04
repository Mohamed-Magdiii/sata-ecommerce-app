import { format } from "date-fns";
export const Columns = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "User",
    accessor: "user.fullname",
  },
  {
    Header: "Rate",
    accessor: "rate",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Product",
    accessor: "product.title_en",
  },
  {
    Header: "Vendor",
    accessor: "product.user.fullname",
  },
  {
    Header: "Comment",
    accessor: "comment",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Action",
  },
];
