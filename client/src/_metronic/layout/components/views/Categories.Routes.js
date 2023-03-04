import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { checkIsActive } from "../../../_helpers";
import { FormattedMessage } from "react-intl";

function Categories() {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <li
      className={`menu-item menu-item-submenu ${getMenuItemActive("", true)}`}
      aria-haspopup="true"
      data-menu-toggle="hover"
    >
      <NavLink className="menu-link menu-toggle" to="/admin/categories" exact>
        <span className="svg-icon menu-icon">
          <BiCategoryAlt />
        </span>
        <span className="menu-text">
          <FormattedMessage id="MENU.CATEGORIES" />
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
                <FormattedMessage id="MENU.CATEGORIES" />
              </span>
            </span>
          </li>
          <li
            className={`menu-item ${getMenuItemActive("")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/categories">
              <i className="menu-bullet menu-bullet-dot">
                <span />
              </i>
              <span className="menu-text">
                <FormattedMessage id="MENU.ALL" />
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item ${getMenuItemActive(
              "/admin/categories/add"
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/admin/categories/add">
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

export default Categories;
