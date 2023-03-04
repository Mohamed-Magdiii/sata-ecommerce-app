import React from "react";

function ProductDescription({ isActive,description }) {
  return (
    <div className={`tab-pane ${isActive && 'active show'}`} id="pd-desc">
      <div className="pd-tab__desc">
        <div className="u-s-m-b-15">
          <p>
          {description}
          </p>
        </div>
        <div className="u-s-m-b-30">
          <ul>
            <li>
              <i className="fas fa-check u-s-m-r-8"></i>

              <span>Buyer Protection.</span>
            </li>
            <li>
              <i className="fas fa-check u-s-m-r-8"></i>

              <span>Full Refund if you don't receive your order.</span>
            </li>
            <li>
              <i className="fas fa-check u-s-m-r-8"></i>

              <span>Returns accepted if product not as described.</span>
            </li>
          </ul>
        </div>
        {/* <div className="u-s-m-b-15">
          <h4>PRODUCT INFORMATION</h4>
        </div>
        <div className="u-s-m-b-15">
          <div className="pd-table gl-scroll">
            <table>
              <tbody>
                <tr>
                  <td>Main Material</td>
                  <td>Cotton</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Green, Blue, Red</td>
                </tr>
                <tr>
                  <td>Sleeves</td>
                  <td>Long Sleeve</td>
                </tr>
                <tr>
                  <td>Top Fit</td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>Print</td>
                  <td>Not Printed</td>
                </tr>
                <tr>
                  <td>Neck</td>
                  <td>Round Neck</td>
                </tr>
                <tr>
                  <td>Pieces Count</td>
                  <td>1 Piece</td>
                </tr>
                <tr>
                  <td>Occasion</td>
                  <td>Casual</td>
                </tr>
                <tr>
                  <td>Shipping Weight (kg)</td>
                  <td>0.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProductDescription;
