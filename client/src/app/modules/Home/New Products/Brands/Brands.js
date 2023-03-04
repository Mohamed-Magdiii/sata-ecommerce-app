import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Brand.css";

function Brands({ products: { home } }) {
  return (
    <div id="section5" className="section one-page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btHeading bt-md">
              <div className="bottomHeading text-primary">B</div>
              <div className="top-heading">BRANDS</div>
            </div>
          </div>
        </div>
        <div className="row pad-top-50 pad-bot-100">
          <div className="col-md-12">
            <ul className="clients-grid grid-4 clients-opacity clearfix">
              {home &&
                home.homePage.brands.map((brand) => (
                  <li key={brand._id}>
                    <Link to="#">
                      <img
                        className="img-responsive w-50"
                        src={`${process.env.REACT_APP_API_URL}/${brand.image}`}
                        alt="Pic"
                      />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, null)(Brands);
