import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  FETCH_ALL_CUSTOMERS,
  UNSET_CUSTOMERS
} from "../constants/customers";
import api from "../api/api";

const createCustomer = customer => {
  return {
    type: CREATE_CUSTOMER,
    payload: {
      customer
    }
  };
};

export const startCreateCustomer = customerData => {
  return dispatch => {
    return api.customers.create(customerData).then(customer => {
      dispatch(createCustomer(customer));
    });
  };
};

export const updateCustomer = customer => {
  return {
    type: UPDATE_CUSTOMER,
    payload: {
      customer
    }
  };
};

export const deleteCustomer = customerId => {
  return {
    type: DELETE_CUSTOMER,
    payload: {
      customerId
    }
  };
};

const fetchAllCustomers = customers => {
  return { type: FETCH_ALL_CUSTOMERS, payload: { customers } };
};

export const startFetchAllCustomers = () => {
  return dispatch => {
    return api.customers.fetchAll().then(customersData => {
      const customers = [];
      customersData.forEach(customer => {
        customers.push(customer);
      });
      dispatch(fetchAllCustomers(customers));
    });
  };
};

export const unsetCustomers = () => {
  return {
    type: UNSET_CUSTOMERS
  };
};
