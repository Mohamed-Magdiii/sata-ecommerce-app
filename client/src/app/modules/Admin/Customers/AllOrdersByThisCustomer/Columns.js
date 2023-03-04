export const Columns = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "PRICE",
    accessor: "price",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
  },
  {
    Header: "ADDRESS",
    accessor: "address",
  },
  {
    Header: "STATUS",
    accessor: "type",
  },
  {
    Header: "PAID",
    accessor: "is_paid",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "ACTIONS",
  },
];
