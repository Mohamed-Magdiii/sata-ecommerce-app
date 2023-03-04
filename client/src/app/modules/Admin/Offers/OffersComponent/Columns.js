export const Columns = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "PRODUCT",
    accessor: "products.length",
  },
  {
    Header: "FROM",
    accessor: "from",
  },
  {
    Header: "TO",
    accessor: "to",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "PRICE",
    accessor: "price",
  },
  {
    Header: "ACTION",
  },
];
