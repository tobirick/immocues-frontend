import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SubHeader from "../../components/Layout/SubHeader";
import EmployeesList from "../../components/EmployeesPage/EmployeesList";

const mapState = state => ({
  employees: state.auth.users
});

const EmployeesPage = ({ employees }) => {
  return (
    <div>
      <div className="space-h-flex center-v-flex mb-2">
        <h1>Employees Page</h1>
        <Link className="button-primary" to="/employees/new">
          New Employee
        </Link>
      </div>
      <EmployeesList employees={employees} />
    </div>
  );
};

export default connect(mapState)(EmployeesPage);
