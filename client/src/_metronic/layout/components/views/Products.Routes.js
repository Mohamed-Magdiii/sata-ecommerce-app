import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { checkIsActive } from "../../../_helpers";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FormattedMessage } from "react-intl";

function Products() {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <li
      className={`menu-item menu-item-submenu ${getMenuItemActive(
        "/admin/products",
        true
      )}`}
      aria-haspopup="true"
      data-menu-toggle="hover"
    >
      <NavLink className="menu-link menu-toggle" to="/admin/products">
        <span className="svg-icon menu-icon">
          <MdOutlineProductionQuantityLimits className="fs-4" />
        </span>
        <span className="menu-text">
          <FormattedMessage id="MENU.PRODUCTS" />
        </span>
        <FiChevronRight
          className="text-muted mt-2"
          style={{ fontSize: "1.2rem" }}
        />
      </NavLink>
      <div className="menu-submenu">
        <i className="menu-arrow" />
        <ul className="menu-subnav">
          <li className="menu-item menu-item-parent" aria-haspopup="true">
            <span className="menu-link">
              <span className="menu-text">
                <FormattedMessage id="MENU.PRODUCTS" />
              </span>
            </span>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/products-page">
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.ALL" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/products-page/rates">
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">Rates </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/products-page/LowestProducts"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.PRODUCTS.LOWEST" />
              </span>
            </NavLink>
          </li>
          <li className={`menu-item`} aria-haspopup="true">
            <NavLink
              className="menu-link"
              to="/admin/products-page/most-bought"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.PRODUCTS.MOSTBOUGHT" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/products-page/new">
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.ADD" />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default Products;
