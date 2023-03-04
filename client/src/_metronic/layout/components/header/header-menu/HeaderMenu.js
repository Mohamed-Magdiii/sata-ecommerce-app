/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";
import { useSelector, shallowEqual } from "react-redux";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  const { user } = useSelector((state) => state.auth, shallowEqual);
  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/admin/dashboard">
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        {user.roles[0] === 1 && (
          <>
            <li
              className={`menu-item menu-item-rel ${getMenuItemActive(
                "/customer-page"
              )}`}
            >
              <NavLink className="menu-link" to="/admin/customer-page">
                <span className="menu-text">Customers</span>
                {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
              </NavLink>
            </li>

            <li
              className={`menu-item menu-item-rel ${getMenuItemActive(
                "/categories"
              )}`}
            >
              <NavLink className="menu-link" to="/admin/categories">
                <span className="menu-text">Category</span>
                {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
              </NavLink>
            </li>
          </>
        )}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive("/orders")}`}
        >
          <NavLink className="menu-link" to="/admin/orders">
            <span className="menu-text">Orders</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/products-page"
          )}`}
        >
          <NavLink className="menu-link" to="/admin/products-page">
            <span className="menu-text">Products</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
