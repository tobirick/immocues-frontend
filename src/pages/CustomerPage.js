import React from "react";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";
import CustomerPageLeftSidebar from "../components/CustomerPage/CustomerPageSidebar/CustomerPageLeftSidebar";
import CustomerPageRightSidebar from "../components/CustomerPage/CustomerPageSidebar/CustomerPageRightSidebar";

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
        <div className="row">
          <div className="customer__left-sidebar col-3">
            <div className="content__box">
              <CustomerPageLeftSidebar customer={customer} />
            </div>
          </div>

          <div className="customer__content col-6">Content</div>

          <div className="customer__right-sidebar col-3">
            <div className="content__box">
              <CustomerPageRightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapState)(CustomerPage);
