import React from "react";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";
import CustomerPageLeftSidebar from "../components/CustomerPage/CustomerPageSidebar/CustomerPageLeftSidebar";
import CustomerPageRightSidebar from "../components/CustomerPage/CustomerPageSidebar/CustomerPageRightSidebar";

const mapState = (state, ownProps) => {
  const customerId = ownProps.match.params.id;
  let customer = {};
  let index = 0;

  if (customerId && state.customers.length > 0) {
    customer = state.customers.filter(
      customer => customer.id === customerId
    )[0];
    index = state.customers.findIndex(customer => customer.id === customerId);
  }

  return {
    customer,
    numberOfEvents: state.customers.length,
    currentEventNumber: index + 1,
    prevEventId: state.customers[index - 1]
      ? state.customers[index - 1].id
      : false,
    nextEventId: state.customers[index + 1]
      ? state.customers[index + 1].id
      : false
  };
};

const CustomerPage = ({
  customer,
  numberOfEvents,
  currentEventNumber,
  prevEventId,
  nextEventId
}) => {
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
              <CustomerPageRightSidebar
                customer={customer}
                numberOfEvents={numberOfEvents}
                currentEventNumber={currentEventNumber}
                prevEventId={prevEventId}
                nextEventId={nextEventId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapState)(CustomerPage);
