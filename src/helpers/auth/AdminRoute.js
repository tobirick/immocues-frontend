import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapState = state => {
  return {
    isAdmin: state.auth.currentUser.isAdmin
  };
};

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdmin ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default connect(mapState)(AdminRoute);
