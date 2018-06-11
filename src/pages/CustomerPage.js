import React from 'react';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
    const customerId = ownProps.match.params.id;
    let customer = {};
  
    if (customerId && state.customers.length > 0) {
        customer = state.customers.filter(customer => customer.id === customerId)[0];
    }
  
    return {
        customer
    }
  }

const CustomerPage = ({customer}) => {
    return (
        <h1>{customer.firstName} {customer.lastName}</h1>
    );
}

export default connect(mapState)(CustomerPage);