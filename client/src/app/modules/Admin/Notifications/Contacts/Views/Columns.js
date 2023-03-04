export const Columns = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    id: "index",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
  },
  {
    Header: "Message",
    accessor: "message",
  },
  {
    Header: "Actions",
  },
];
