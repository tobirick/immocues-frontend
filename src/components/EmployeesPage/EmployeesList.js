import React from "react";
import PropTypes from "prop-types";
import EmployeesListItem from "./EmployeesListItem";

const EmployeesList = ({ employees }) => {
  return (
    <div className="list-box">
      <div className="list">
        <div className="list__header">
          <div className="list__header-item list__header-item--big">Name</div>
          <div className="list__header-item">Title</div>
          <div className="list__header-item">E-Mail</div>
          <div className="list__header-item">Phone Number</div>
        </div>
        {employees &&
          employees.map(employee => (
            <EmployeesListItem key={employee._id} employee={employee} />
          ))}
      </div>
    </div>
  );
};

export default EmployeesList;
