import React from "react";

const EmployeesListItem = ({ employee }) => {
  return (
    <div className="list__item">
      <div className="list__item-col list__item-col--big list__item-col--name">
        <img
          src={employee.profileImageSrc}
          alt={`${employee.firstName} ${employee.lastName}`}
        />
        {employee.firstName} {employee.lastName}
      </div>
      <div className="list__item-col">{employee.title}</div>
      <div className="list__item-col">{employee.eMail}</div>
      <div className="list__item-col">{employee.phoneNumber}</div>
    </div>
  );
};

export default EmployeesListItem;
