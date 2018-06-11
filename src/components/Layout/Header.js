import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <header className="main-header">
    <div className="main-header__logo">
      <Link to="/">
        <img src="/img/immocues-small-white.png" alt="Immocues" />
      </Link>
    </div>
    <nav className="main-header__nav">
      <ul>
        <li className="main-header__nav-item">
          <NavLink className="main-header__nav-item-link" to="/">
            <i className="fal fa-user" />
          </NavLink>
        </li>
        <li className="main-header__nav-item">
          <NavLink className="main-header__nav-item-link" to="/">
            <i className="fal fa-cog" />
          </NavLink>
        </li>
        <li className="main-header__nav-item">
          <NavLink className="main-header__nav-item-link" to="/">
            <i className="fal fa-sign-out-alt" />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
