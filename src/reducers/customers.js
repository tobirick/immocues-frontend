import { createReducer } from '../utils/reducerUtil';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../constants/customers';

const customersReducerDefaultState = [
      {
            id: '1',
            firstName: 'Tobi',
            lastName: 'Rick'
      }
];

export const createCustomer = (state, payload) => {
      return [...state, Object.assign({}, payload.customer)]
}

export const updateCustomer = (state, payload) => {
      return [
          ...state.filter(customer => customer.id !== payload.customer.id),
          Object.assign({}, payload.customer)
      ]
}

export const deleteCustomer = (state, payload) => {
      return [...state.filter(customer => customer.id !== payload.customerId)]
}

export default createReducer(customersReducerDefaultState, {
      [CREATE_CUSTOMER]: createCustomer,
      [UPDATE_CUSTOMER]: updateCustomer,
      [DELETE_CUSTOMER]: deleteCustomer
})