import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MainNav = ({ navOpenClass }) => {
  return (
    <div className={`main-nav ${navOpenClass}`}>
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
        <li className="main-nav__item">
          <NavLink className="main-nav__item-link" to="/calendar">
            <i className="fal fa-calendar-alt" />
            Calendar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MainNav.propTypes = {
  navOpenClass: PropTypes.string.isRequired
};

export default MainNav;
