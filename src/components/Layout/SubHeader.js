import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";

class SubHeader extends Component {
  state = {
    navOpen: false
  };

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    const { title, buttonText, buttonLinkTo, buttonStyle = "" } = this.props;
    const { navOpen } = this.state;
    return (
      <div className="sub-header">
        <div onClick={this.toggleNav} className="sub-header__nav-toggle">
          <i className="fas fa-th-large" />
        </div>
        {<MainNav navOpenClass={navOpen ? "open" : ""} />}
        <h2 className="sub-header__title">{title}</h2>
        {buttonText && (
          <Link
            className={
              buttonStyle ? `button-primary-${buttonStyle}` : "button-primary"
            }
            to={buttonLinkTo}
          >
            {buttonText}
          </Link>
        )}
      </div>
    );
  }
}

SubHeader.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLinkTo: PropTypes.string,
  buttonStyle: PropTypes.string
};

export default SubHeader;
