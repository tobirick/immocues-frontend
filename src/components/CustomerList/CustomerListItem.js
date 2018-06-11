import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CustomerListItem extends Component {
    render() {
      const { customer } = this.props;
      return (
        <div>
            <Link to={`/customers/${customer.id}`}>
                <h1>{customer.firstName} {customer.lastName}</h1>
          </Link>
        </div>
      );
    }
  }
  
  export default CustomerListItem;