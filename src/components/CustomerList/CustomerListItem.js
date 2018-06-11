import React, { Component } from 'react';

class CustomerListItem extends Component {
    render() {
        const { customer, setCustomer, isSelected } = this.props;
        return (
            <div onClick={setCustomer(customer)} className={`list__item ${isSelected ? 'selected' : ''}`}>
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

export default CustomerListItem;
