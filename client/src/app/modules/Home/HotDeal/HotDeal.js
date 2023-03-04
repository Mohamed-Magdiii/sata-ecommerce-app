import React from "react";
import './hotdeal.css' ;
const HotDeal = () => {
  return (
    <div id="hot-deal" className="section" >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
            <h1 className="section__heading u-c-secondary u-s-m-b-12">
                HOT DEALS
                  </h1>
              <h2 className="text-uppercase">hot deal this week</h2>
              <p>New Collection Up to 50% OFF</p>
              <span className="btn btn-primary btn-lg font-weight-bolder">
                SHOP NOW
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
