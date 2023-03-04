export const COLUMNS = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "FULLNAME",
    accessor: "user.fullname",
  },
  {
    Header: "COMPANY",
    accessor: "company.name",
  },
  {
    Header: "ORDERS",
    accessor: "numberOfDeliverdOrders",
  },
  {
    Header: "RATE",
    accessor: "rate.value",
  },
  {
    Header: "STATUS",
    accessor: "user.status",
  },
  {
    Header: "INORDER",
    accessor: "inOrder",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "ACTIONS",
  },
];
