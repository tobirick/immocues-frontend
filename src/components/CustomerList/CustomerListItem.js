import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomerListItem extends Component {
  render() {
    const { customer, setCustomer, isSelected } = this.props;
    return (
      <div
        onClick={setCustomer(customer)}
        className={`list__item ${isSelected ? "selected" : ""}`}
      >
        <div className="list__item-col list__item-col--big list__item-col--name">
          <img
            src={customer.profileImageSrc}
            alt={`${customer.firstName} ${customer.lastName}`}
          />
          {customer.firstName} {customer.lastName}
        </div>
        <div className="list__item-col">{customer.title}</div>
        <div className="list__item-col">{customer.eMail}</div>
        <div className="list__item-col">{customer.phoneNumber}</div>
      </div>
    );
  }
}

CustomerListItem.propTypes = {
  customer: PropTypes.object.isRequired,
  setCustomer: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default CustomerListItem;
