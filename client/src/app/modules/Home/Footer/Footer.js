import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSetting } from "../../actions/Settings/settings";
import { getCategory } from "../../../modules/actions/products/productsActions";
import { Link, useHistory } from "react-router-dom";
import "./footer.css";
import { getAllProductBySubCategoryByCategory } from "../../actions/category/categoryActions";

const Footer = ({
  getSetting,
  settings: { setting },
  getCategory,
  products: { categories },
  getAllProductBySubCategoryByCategory,
  auth:{isAuthenticated}
}) => {
  useEffect(() => {
    getSetting();
    getCategory();
  }, [getSetting, getCategory]);
  const history = useHistory()
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>{setting && setting.about_description.en}</p>
                <ul className="list-unstyled footer-links">
                  <li>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      {setting && setting.address.en}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-phone"></i>
                      {setting && setting.mobile}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="list-unstyled footer-links">
                  {categories &&
                    categories.map((c) => (
                      <li key={c._id}>
                        <span  onClick={() => {
                        history.push(`/Products/filter/${c._id}`);
                        getAllProductBySubCategoryByCategory(c._id);
                      }}>{c.title ? c.title.en : ""}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs"></div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to={isAuthenticated ? "/dash-my-orders" : "/login"}>Orders </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link to="/my-profile">My Account</Link>
                  </li>
                  <li>
                    <Link to="/cart">View Cart</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/contact">Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom-footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-unstyled footer-payments">
                <li>
                  <span>
                    <i className="fab fa-cc-visa"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-credit-card"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fab fa-cc-paypal"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fab fa-cc-mastercard"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fab fa-cc-discover"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fab fa-cc-amex"></i>
                  </span>
                </li>
              </ul>
              <span className="copyright">
                <span>CopyRight All right Reserved @sata mall</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const mapStateToProps = (state) => ({
  settings: state.settings,
  products: state.products,
  auth: state.authentication
});

export default connect(mapStateToProps, { getSetting, getCategory,getAllProductBySubCategoryByCategory
})(Footer);
