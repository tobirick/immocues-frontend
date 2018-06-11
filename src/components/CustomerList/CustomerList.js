import React, { Component } from 'react';
import {connect} from 'react-redux';
import CustomerListItem from './CustomerListItem';

const mapState = (state) => ({
    customers: state.customers
})

class CustomerList extends Component {
    render() {
      const { customers } = this.props;
      return (
        <div>
          {customers&& customers.map(customer => (
            <CustomerListItem
              key={customer.id}
              customer={customer}
            />
          ))}
        </div>
      );
    }
  }
  
  export default connect(mapState)(CustomerList);