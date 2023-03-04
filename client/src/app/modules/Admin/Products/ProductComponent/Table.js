import React, { useMemo } from "react";
import { COLUMNS } from "./COLUMNS";
import { useTable, useSortBy, usePagination } from "react-table";
import TableHeader from "./TableHeader";
import Pagination from "../../shared/Pagination";
import TableBody from "./TableBody";
const CardBody = ({ products }) => {
  const data = useMemo(() => products, [products]);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    headerGroups,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize,
    pageOptions,
    pageCount,
    prepareRow,
    page,
    getTableBodyProps,
    state,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <div
      id="kt_datatable_wrapper"
      className="dataTables_wrapper dt-bootstrap4 no-footer"
    >
      <div className="row">
        <div className="col-sm-12">
          <table
            {...getTableProps()}
            className="table table-checkable dataTable no-footer dtr-inline"
            id="kt_datatable"
            role="grid"
            aria-describedby="kt_datatable_info"
            style={{ width: "1236px" }}
          >
            <TableHeader headerGroups={headerGroups} />
            <TableBody
              prepareRow={prepareRow}
              page={page}
              getTableBodyProps={getTableBodyProps}
            />
          </table>
        </div>
      </div>
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        state={state}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
        data={data}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default CardBody;
