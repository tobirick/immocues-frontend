import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { startSignOut } from "../../actions/auth";

const actions = {
  startSignOut
};

const mapState = state => ({
  isAuthenticated: state.auth.authenticated,
  isAdmin: state.auth.currentUser.isAdmin
});

const Header = ({ startSignOut, isAuthenticated, isAdmin }) => (
  <header className="main-header">
    <div className="main-header__logo">
      <Link to="/dashboard">
        <img src="/img/immocues-small-white.png" alt="Immocues" />
      </Link>
    </div>
    <nav className="main-header__nav">
      {isAuthenticated && (
        <ul>
          <li className="main-header__nav-item">
            <a className="main-header__nav-item-link">
              <i className="fal fa-bell" />
            </a>
          </li>
          {isAdmin && (
            <li className="main-header__nav-item">
              <NavLink className="main-header__nav-item-link" to="/admin">
                <i className="fal fa-lock" />
              </NavLink>
            </li>
          )}
          <li className="main-header__nav-item">
            <NavLink className="main-header__nav-item-link" to="/settings">
              <i className="fal fa-cog" />
            </NavLink>
          </li>
          <li className="main-header__nav-item">
            <a
              onClick={startSignOut}
              className="main-header__nav-item-link"
              to="/logout"
            >
              <i className="fal fa-sign-out-alt" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  </header>
);

export default connect(
  mapState,
  actions
)(Header);
