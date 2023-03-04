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
    Header: "FULLNAME",
    accessor: "fullname",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "ROLE",
    accessor: "role",
  },
  {
    Header: "ACTIONS",
  },
];
