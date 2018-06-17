import React, { Component } from "react";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";

import { startFetchAllCustomers } from "../actions/customers";

const mapState = state => ({
  currentUser: state.auth.currentUser
});

const mapActions = dispatch => ({
  startFetchAllCustomers: () => dispatch(startFetchAllCustomers())
});

class DashboardPage extends Component {
  componentWillMount = () => {
    this.props.startFetchAllCustomers();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className="content-wrapper">
        <SubHeader title={`Hey, nice to see you '${currentUser.email}'!`} />
        <div className="content" />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapActions
)(DashboardPage);
