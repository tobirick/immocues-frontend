import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({ className }) => {
  return (
    <div className={`main-nav ${className}`}>
      <ul>
        <li className="main-nav__item">
          <NavLink exact className="main-nav__item-link" to="/">
            <i className="fal fa-tachometer" />
            Home
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__item-link" to="/customers">
            <i className="fal fa-users" />
            Customers
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__item-link" to="/objects">
            <i className="fal fa-home" />
            Objects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
