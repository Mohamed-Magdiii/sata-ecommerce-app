import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { checkIsActive } from "../../../_helpers";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

function WorkerSideBar() {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  const { user } = useSelector((state) => state.auth);
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
          <FaUsersCog />
        </span>
        <span className="menu-text">
          <FormattedMessage id="MENU.WORKERS" />
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
                <FormattedMessage id="MENU.WORKERS" />
              </span>
            </span>
          </li>

          {user.roles[0] === 2 && (
            <>
              <li
                className={`menu-item ${getMenuItemActive("")}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/admin/customer-page/all/worker"
                >
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
                <NavLink
                  className="menu-link"
                  to="/admin/customer-page/add-new/worker"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ADD" />
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {user.roles[0] === 1 && (
            <>
              <li
                className={`menu-item ${getMenuItemActive("")}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/admin/customer-page/online/worker"
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
                  to="/admin/customer-page/newUsers/worker"
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
                  to="/admin/customer-page/lastWeek/worker"
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
                  to="/admin/customer-page/lastMonth/worker"
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
                  to="/admin/customer-page/not-signed-in/7/worker"
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
                  to="/admin/customer-page/not-signed-in/30/worker"
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
                  to="/admin/customer-page/blocked/worker"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.BLOCKED" />
                  </span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </li>
  );
}

export default WorkerSideBar;
