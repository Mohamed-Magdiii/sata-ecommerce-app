import React from "react";
import { Link } from "react-router-dom";
import ProfileLeftSide from "./ProfileLeftSide";

function Profile() {
  return (
    <div className="u-s-p-b-60 mt-5">
      <div className="section__content">
        <div className="dash">
          <div className="container">
            <div className="row">
              {/*Left Side Bar */}
              <ProfileLeftSide />
              <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                  <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Manage My Account</h1>
                    <div className="row">
                      <div className="col-lg-4 u-s-m-b-30">
                        <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                          <div className="dash__pad-3">
                            <h2 className="dash__h2 u-s-m-b-8">
                              PERSONAL PROFILE
                            </h2>
                            <div className="dash__link dash__link--secondary u-s-m-b-8">
                              <Link to="dash-edit-profile.html">Edit</Link>
                            </div>

                            <span className="dash__text">Name</span>

                            <span className="dash__text">Email</span>
                            <div className="dash__link dash__link--secondary u-s-m-t-8">
                              <Link
                                data-modal="modal"
                                data-modal-id="#dash-newsletter"
                                to=""
                              >
                                Subscribe Newsletter
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 u-s-m-b-30">
                        <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                          <div className="dash__pad-3">
                            <h2 className="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>

                            <span className="dash__text-2 u-s-m-b-8">
                              Default Shipping Address
                            </span>
                            <div className="dash__link dash__link--secondary u-s-m-b-8">
                              <Link to="dash-address-book.html">Edit</Link>
                            </div>

                            <span className="dash__text">Address</span>

                            <span className="dash__text">01XXXXXXXX</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 u-s-m-b-30">
                        <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                          <div className="dash__pad-3">
                            <h2 className="dash__h2 u-s-m-b-8">
                              BILLING ADDRESS
                            </h2>

                            <span className="dash__text-2 u-s-m-b-8">
                              Default Billing Address
                            </span>

                            <span className="dash__text">ADddress</span>

                            <span className="dash__text">01XXXXXXXX</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
                  <h2 className="dash__h2 u-s-p-xy-20">RECENT ORDERS</h2>
                  <div className="dash__table-wrap gl-scroll">
                    <table className="dash__table">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Placed On</th>
                          <th>Items</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3054231326</td>
                          <td>26/13/2016</td>
                          <td>
                            <div className="dash__table-img-wrap">
                              <img
                                className="u-img-fluid"
                                src="images/product/electronic/product3.jpg"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="dash__table-total">
                              <span>$126.00</span>
                              <div className="dash__link dash__link--brand">
                                <Link to="dash-manage-order.html">MANAGE</Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3054231326</td>
                          <td>26/13/2016</td>
                          <td>
                            <div className="dash__table-img-wrap">
                              <img
                                className="u-img-fluid"
                                src="images/product/electronic/product14.jpg"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="dash__table-total">
                              <span>$126.00</span>
                              <div className="dash__link dash__link--brand">
                                <Link to="dash-manage-order.html">MANAGE</Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3054231326</td>
                          <td>26/13/2016</td>
                          <td>
                            <div className="dash__table-img-wrap">
                              <img
                                className="u-img-fluid"
                                src="images/product/men/product8.jpg"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="dash__table-total">
                              <span>$126.00</span>
                              <div className="dash__link dash__link--brand">
                                <Link to="dash-manage-order.html">MANAGE</Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3054231326</td>
                          <td>26/13/2016</td>
                          <td>
                            <div className="dash__table-img-wrap">
                              <img
                                className="u-img-fluid"
                                src="images/product/women/product10.jpg"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <div className="dash__table-total">
                              <span>$126.00</span>
                              <div className="dash__link dash__link--brand">
                                <Link to="dash-manage-order.html">MANAGE</Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
