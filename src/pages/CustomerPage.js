import React from "react";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";

const mapState = (state, ownProps) => {
  const customerId = ownProps.match.params.id;
  let customer = {};

  if (customerId && state.customers.length > 0) {
    customer = state.customers.filter(
      customer => customer.id === customerId
    )[0];
  }

  return {
    customer
  };
};

const CustomerPage = ({ customer }) => {
  return (
    <div className="content-wrapper">
      <SubHeader
        title={`${customer.firstName} ${customer.lastName}`}
        buttonText="Go back"
        buttonLinkTo="/customers"
        buttonStyle="border"
      />
      <div className="content">
        
      </div>
    </div>
  );
};

export default connect(mapState)(CustomerPage);
