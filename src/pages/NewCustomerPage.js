import React from "react";
import SubHeader from "../components/Layout/SubHeader";

const NewCustomerPage = () => (
  <div className="content-wrapper">
    <SubHeader
      title="New Customer"
      buttonText="Go back"
      buttonLinkTo="/customers"
      buttonStyle="border"
    />
    <div className="content">
      
    </div>
  </div>
);

export default NewCustomerPage;
