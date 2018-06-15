import React from "react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <div className="sidebar-nav">
      <ul>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__item-link" to="/settings/basic">
            Basic
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__item-link" to="/settings/about">
            About
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__item-link" to="/settings/account">
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SettingsNav;
