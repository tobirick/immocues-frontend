import React from "react";
import CustomerList from "../components/CustomerList/CustomerList";
import SubHeader from "../components/Layout/SubHeader";

const CustomerPages = () => (
  <div className="content-wrapper">
    <SubHeader
      title="Customers"
      buttonText="New Customer"
      buttonLinkTo="/customers/new"
    />
    <div className="content">
      <CustomerList />
    </div>
  </div>
);

export default CustomerPages;
