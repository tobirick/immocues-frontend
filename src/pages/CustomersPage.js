import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CustomerList from "../components/CustomerList/CustomerList";
import CustomerPreview from "../components/CustomerList/CustomerPreview";
import SubHeader from "../components/Layout/SubHeader";

const mapState = state => ({
  customers: state.customers
});

class CustomerPages extends Component {
  state = {
    selectedCustomer: {}
  };

  handleSetSelectedCustomer = customer => () => {
    this.setState({
      selectedCustomer: customer
    });
  };

  render() {
    const { selectedCustomer } = this.state;
    const { customers } = this.props;
    return (
      <div className="content-wrapper">
        <SubHeader
          title={`Customers (${customers.length})`}
          buttonText="New Customer"
          buttonLinkTo="/customers/new"
        />
        <div className="content pt-3">
          <CustomerList
            customers={customers}
            setCustomer={this.handleSetSelectedCustomer}
            selectedCustomer={selectedCustomer}
          />
          {Object.keys(selectedCustomer).length > 0 && (
            <CustomerPreview
              customer={selectedCustomer}
              setCustomer={this.handleSetSelectedCustomer}
            />
          )}
        </div>
      </div>
    );
  }
}

CustomerPages.propTypes = {
  customers: PropTypes.array.isRequired
};

export default connect(mapState)(CustomerPages);
