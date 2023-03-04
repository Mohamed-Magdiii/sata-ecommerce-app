import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { checkIsActive } from "../../../_helpers";
import { FormattedMessage } from "react-intl";

function CustomerSideBar() {
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
        "/admin/customer-page",
        true
      )}`}
      aria-haspopup="true"
      data-menu-toggle="hover"
    >
      <NavLink className="menu-link menu-toggle" to="/admin/customer-page">
        <span className="svg-icon menu-icon">
          <FaUser />
        </span>
        <span className="menu-text">
          <FormattedMessage id="MENU.CUSTOMERS" />
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
                <FormattedMessage id="MENU.CUSTOMERS" />
              </span>
            </span>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/customer-page">
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
            <NavLink className="menu-link" to="/admin/customer-page/Vendors">
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.VENDORS" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/online/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.ONLINE" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/most-orderd"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.MOSTORDERED" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/newUsers/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.NEW" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/lastWeek/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.JOINED7DAY" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/lastMonth/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.JOINED1MONTH" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              exact
              to="/admin/customer-page/not-signed-in/7/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.NOTSIGNED7DAY" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              exact
              to="/admin/customer-page/not-signed-in/30/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.NOTSIGNED1MONTH" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink
              className="menu-link"
              to="/admin/customer-page/blocked/user"
            >
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.BLOCKED" />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default CustomerSideBar;
