import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../components/Layout/SubHeader";

const EmployeesPage = () => {
  return (
    <div className="space-h-flex center-v-flex">
      <h1>Employees Page</h1>
      <Link className="button-primary" to="/employees/new">
        New Employee
      </Link>
    </div>
  );
};

export default EmployeesPage;
