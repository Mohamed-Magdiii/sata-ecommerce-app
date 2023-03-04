import React from "react";

const CardFooter = () => {
  return (
    <div className="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0 mx-0">
      <div className="col-md-10">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="font-weight-bold text-muted text-uppercase">
                  PAYMENT TYPE
                </th>
                <th className="font-weight-bold text-muted text-uppercase">
                  PAYMENT STATUS
                </th>
                <th className="font-weight-bold text-muted text-uppercase">
                  PAYMENT DATE
                </th>
                <th className="font-weight-bold text-muted text-uppercase text-right">
                  TOTAL PAID
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-weight-bolder">
                <td>Credit Card</td>
                <td>Success</td>
                <td>Jan 07, 2020</td>
                <td className="text-primary font-size-h3 font-weight-boldest text-right">
                  $789.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
