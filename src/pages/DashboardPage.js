import React, { Component } from "react";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";

const mapState = state => ({
  currentUser: state.auth.currentUser
});

class DashboardPage extends Component {
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

export default connect(mapState)(DashboardPage);
