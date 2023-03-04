/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { FaBloggerB, FaUsers } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { GoListOrdered } from "react-icons/go";
import {
  MdLocalOffer,
  MdDeliveryDining,
  MdNotificationsActive,
} from "react-icons/md";
import { checkIsActive } from "../../../../_helpers";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import CustomerSideBar from "../../views/CustomerSideBar.Routes";
import VendorSideBar from "../../views/VendorSideBar.Routes";
import Categories from "../../views/Categories.Routes";
import Products from "../../views/Products.Routes";
import WorkerSideBar from "../../views/WorkerSideBar.Routes";
// import OffersSideBar from "../../views/Offers.Routes";
import { FormattedMessage } from "react-intl";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/dashboard",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/dashboard">
            <span className="svg-icon menu-icon">
              <AiOutlineHome />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
          </NavLink>
        </li>
        {user.roles[0] === 1 && <CustomerSideBar />}
        {user.roles[0] === 1 && <VendorSideBar />}
        <WorkerSideBar />
        {user.roles[0] === 1 && <Categories />}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/admin/orders",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" exact to="/admin/orders">
            <span className="svg-icon menu-icon">
              <GoListOrdered />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.ORDERS" />
            </span>
            <FiChevronRight
              className="text-muted mt-2"
              style={{ fontSize: "1.2rem" }}
            />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent">
                <span className="menu-link">
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ORDERS" />
                  </span>
                </span>
              </li>
              <li className={`menu-item ${getMenuItemActive("")}`}>
                <NavLink className="menu-link" to="/admin/orders" exact>
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ALL" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        {/* offers */}
        {/* <OffersSideBar /> */}
        <Products />
        {user.roles[0] === 1 && (
          <>
            {/* <CountryRoutes /> */}
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/country-page",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/admin/shipping">
                <span className="svg-icon menu-icon">
                  <ImLocation className="fs-4" />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.SHIPPING" />
                </span>
                <FiChevronRight
                  className="text-muted mt-2"
                  style={{ fontSize: "1.2rem" }}
                />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SHIPPING" />
                      </span>
                    </span>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/shipping"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/admin/shipping/shipping-list"
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
                    className={`menu-item ${getMenuItemActive(
                      "/admin/shipping"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/admin/shipping/country-form"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SHIPPING.COUNTRY" />
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/shipping"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/admin/shipping/city-form"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SHIPPING.CITY" />
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/shipping"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/admin/shipping/shipping-new"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SHIPPING" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/brands",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/admin/brands">
                <span className="svg-icon menu-icon">
                  <MdLocalOffer />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.BRANDS" />
                </span>
                <i
                  className="menu-arrow text-muted"
                  style={{ fontSize: "0.8rem", marginRight: "5px" }}
                />
              </NavLink>
              <div className="menu-submenu ">
                <ul className="menu-subnav">
                  <ul className="menu-subnav">
                    <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">
                          <FormattedMessage id="MENU.BRANDS" />
                        </span>
                      </span>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/admin/brands"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/admin/brands">
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
                        "/admin/brands/add"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/admin/brands/add">
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
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/blogs",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/admin/blogs">
                <span className="svg-icon menu-icon">
                  <FaBloggerB className="fs-4" />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.BLOGS" />
                </span>
                <FiChevronRight
                  className="text-muted mt-2"
                  style={{ fontSize: "1.2rem" }}
                />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.BLOGS" />
                      </span>
                    </span>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/blogs-page"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/blogs-page">
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
                      "/admin/blogs-page/new"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/blogs-page/new">
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
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/company-shipping",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/admin/company-shipping"
              >
                <span className="svg-icon menu-icon">
                  <FaUsers />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.COMPANYSHIPPING" />
                </span>
                <i
                  className="menu-arrow text-muted"
                  style={{ fontSize: "0.8rem", marginRight: "5px" }}
                />
              </NavLink>
              <div className="menu-submenu ">
                <ul className="menu-subnav">
                  <ul className="menu-subnav">
                    <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">
                          <FormattedMessage id="MENU.COMPANYSHIPPING" />
                        </span>
                      </span>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/admin/company-shipping"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/admin/company-shipping"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">
                          <FormattedMessage id="MENU.ALL" />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/delivery-boys",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/admin/delivery-boys"
              >
                <span className="svg-icon menu-icon">
                  <MdDeliveryDining />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.DELIVERYBOYS" />
                </span>
                <i
                  className="menu-arrow text-muted"
                  style={{ fontSize: "0.8rem", marginRight: "5px" }}
                />
              </NavLink>
              <div className="menu-submenu ">
                <ul className="menu-subnav">
                  <ul className="menu-subnav">
                    <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">
                          <FormattedMessage id="MENU.DELIVERYBOYS" />
                        </span>
                      </span>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive("")}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        exact
                        to="/admin/delivery-boys"
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
                        exact
                        to="/admin/customer-page/newUsers/delivery"
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
                        exact
                        to="/admin/customer-page/blocked/delivery"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">
                          <FormattedMessage id="MENU.BLOCKED" />
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
                        to="/admin/customer-page/lastWeek/delivery"
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
                        exact
                        to="/admin/customer-page/lastMonth/delivery"
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
                        to="/admin/customer-page/not-signed-in/7/delivery"
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
                        to="/admin/customer-page/not-signed-in/30/delivery"
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
                        exact
                        to="/admin/delivery-boys/add"
                      >
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
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/coupons",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/admin/coupons">
                <span className="svg-icon menu-icon">
                  <MdLocalOffer />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.COUPONS" />
                </span>
                <FiChevronRight
                  className="text-muted mt-2"
                  style={{ fontSize: "1.2rem" }}
                />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.COUPONS" />
                      </span>
                    </span>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/coupons"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/coupons">
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
                      "/admin/coupons/add"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/coupons/add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/coupons/expire"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/coupons/expire">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.COUPONS.EXPIRESOON" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/Notifications",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/admin/Notifications"
              >
                <span className="svg-icon menu-icon">
                  <MdNotificationsActive />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.NOTIFICATIONS" />
                </span>
                <i
                  className="menu-arrow text-muted"
                  style={{ fontSize: "0.8rem", marginRight: "5px" }}
                />
              </NavLink>
              <div className="menu-submenu ">
                <ul className="menu-subnav">
                  <ul className="menu-subnav">
                    <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">
                          <FormattedMessage id="MENU.NOTIFICATIONS" />
                        </span>
                      </span>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive("")}`}
                      aria-haspopup="true"
                    >
                      <NavLink className="menu-link" to="/admin/Notifications">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">
                          <FormattedMessage id="MENU.NOTIFICATIONS.SEND" />
                        </span>
                      </NavLink>
                    </li>
                    <li
                      className={`menu-item ${getMenuItemActive("")}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/admin/Notifications/Contacts"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">
                          <FormattedMessage id="MENU.NOTIFICATIONS.ALL.CONTACTS" />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/admin/site-settings",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/admin/site-settings"
              >
                <span className="svg-icon menu-icon">
                  <IoSettingsSharp className="fs-4" />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.SETTINGS" />
                </span>
                <FiChevronRight
                  className="text-muted mt-2"
                  style={{ fontSize: "1.2rem" }}
                />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  <li
                    className="menu-item menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SETTINGS" />
                      </span>
                    </span>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/admin/site-settings"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/site-settings">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SETTINGS.SITE" />
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`menu-item ${getMenuItemActive(
                      ""
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/admin/site-settings/terms-conditions">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                      <FormattedMessage id="SETTINGS.TERMS.CONDITIONS" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
