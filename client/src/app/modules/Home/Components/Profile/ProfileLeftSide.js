import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getWishlist } from "../../../../modules/actions/wishlist/wishlist";
import { connect } from "react-redux";
import { getOrderItems } from "../../../actions/orders/orderActions";

function ProfileLeftSide({
  wishlist: { wishlists },
  getOrderItems,
  orders: { items },
}) {
  useEffect(() => {
    getWishlist();
    getOrderItems();
    // eslint-disable-next-line
  }, [getWishlist, getOrderItems]);
  return (
    <div className="col-lg-3 col-md-12">
      <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
        <div className="dash__pad-1">
          <h2 className="dash__tex"><b>Profile</b></h2>
          <ul className="dash__f-list">
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li>
              <Link to="/dash-my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="/change-password">Change Password</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
        <div className="dash__pad-1">
          <ul className="dash__w-list">
            <li>
              <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-1">
                  <i className="fas fa-cart-arrow-down"></i>
                </span>

                <span className="dash__w-text">
                  {items !== null ? items.length : 0}
                </span>

                <span className="dash__w-name">Orders Placed</span>
              </div>
            </li>
            <li>
              <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-2">
                  <i className="fas fa-times"></i>
                </span>

                <span className="dash__w-text">0</span>

                <span className="dash__w-name">Cancel Orders</span>
              </div>
            </li>
            <li>
              <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-3">
                  <i className="far fa-heart"></i>
                </span>
                {wishlists !== null && (
                  <span className="dash__w-text">
                    {wishlists !== null ? wishlists.length : 0}
                  </span>
                )}

                <span className="dash__w-name">Wishlist</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  orders: state.orders,
  wishlist: state.wishlist,
});
export default connect(mapStateToProps, { getWishlist, getOrderItems })(
  ProfileLeftSide
);
