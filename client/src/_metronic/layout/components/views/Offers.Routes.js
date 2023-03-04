import React from "react";
import { MdLocalOffer } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { checkIsActive } from "../../../_helpers";
import { FormattedMessage } from "react-intl";
function OffersSideBar() {
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
        "/admin/offers",
        true
      )}`}
      aria-haspopup="true"
      data-menu-toggle="hover"
    >
      <NavLink className="menu-link menu-toggle" to="/admin/offers">
        <span className="svg-icon menu-icon">
          <MdLocalOffer />
        </span>
        <span className="menu-text">
          <FormattedMessage id="MENU.OFFERS" />
        </span>
        <i
          className="menu-arrow text-muted"
          style={{ fontSize: "0.8rem", marginRight: "5px" }}
        />
      </NavLink>
      <div className="menu-submenu ">
        <ul className="menu-subnav">
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">
                  <FormattedMessage id="MENU.OFFERS" />
                </span>
              </span>
            </li>
            <li
              className={`menu-item ${getMenuItemActive("")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/admin/offers">
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
              <NavLink className="menu-link" to="/admin/offers/add-new">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">
                  <FormattedMessage id="MENU.ADD" />
                </span>
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </li>
  );
}

export default OffersSideBar;
