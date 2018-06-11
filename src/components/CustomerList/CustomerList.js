import React, { Component } from 'react';
import CustomerListItem from './CustomerListItem';


class CustomerList extends Component {
    render() {
        const { customers, setCustomer, selectedCustomer } = this.props;
        return (
            <div className="list-box">
                <div className="list">
                    <div className="list__header">
                        <div className="list__header-item list__header-item--big">Name</div>
                        <div className="list__header-item">Title</div>
                        <div className="list__header-item">E-Mail</div>
                        <div className="list__header-item">Phone Number</div>
                    </div>
                    {customers &&
                        customers.map(customer => (
                            <CustomerListItem
                                key={customer.id}
                                customer={customer}
                                setCustomer={setCustomer}
                                isSelected={selectedCustomer && selectedCustomer.id === customer.id}
                            />
                        ))}
                </div>
            </div>
        );
    }
}

export default CustomerList;
