import React from "react";
import SubHeader from "../../components/Layout/SubHeader";

const NewEmployeesPage = () => {
  return (
    <div className="content-wrapper">
      <SubHeader
        title="New Employee"
        buttonText="Go back"
        buttonLinkTo="/admin/employees"
        buttonStyle="border"
      />
      <div className="content pt-3" />
    </div>
  );
};

export default NewEmployeesPage;
