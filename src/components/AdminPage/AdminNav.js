import React from "react";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="sidebar-nav">
      <ul>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__item-link" to="/admin/employees">
            Employees
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__item-link" to="/admin/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
