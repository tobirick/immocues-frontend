import { createReducer } from "../helpers/utils/reducerUtil";
import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  FETCH_ALL_CUSTOMERS
} from "../constants/customers";

const customersReducerDefaultState = [];

export const createCustomer = (state, payload) => {
  return [...state, Object.assign({}, payload.customer)];
};

export const updateCustomer = (state, payload) => {
  return [
    ...state.filter(customer => customer.id !== payload.customer.id),
    Object.assign({}, payload.customer)
  ];
};

export const deleteCustomer = (state, payload) => {
  return [...state.filter(customer => customer.id !== payload.customerId)];
};

export const fetchAllCustomers = (state, payload) => {
  return payload.customers;
};

export default createReducer(customersReducerDefaultState, {
  [CREATE_CUSTOMER]: createCustomer,
  [UPDATE_CUSTOMER]: updateCustomer,
  [DELETE_CUSTOMER]: deleteCustomer,
  [FETCH_ALL_CUSTOMERS]: fetchAllCustomers
});
