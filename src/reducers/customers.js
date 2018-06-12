import { createReducer } from '../helpers/utils/reducerUtil';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../constants/customers';

const customersReducerDefaultState = [
      {
            id: '1',
            firstName: 'Tobi',
            lastName: 'Rick',
            profileImageSrc: '/img/default-profile.png',
            title: 'Testtitle',
            eMail: 'tobirickmann@gmail.com',
            phoneNumber: '08251/52264',
            mobilePhoneNumber: '01637205965',
            addressCity: 'Aichach',
            addressZIPCode: '86551',
            addressCountry: 'Germany',
            addressState: 'Bavaria',
            addressStreet: 'Erlenweg',
            addressStreetNr: '1a'
      },
      {
        id: '2',
        firstName: 'Tobi2',
        lastName: 'Rick2',
        profileImageSrc: '/img/default-profile.png',
        title: 'Testtitle',
        eMail: 'tobirickmann@gmail.com',
        phoneNumber: '08251/52264',
        mobilePhoneNumber: '01637205965',
        addressCity: 'Aichach',
        addressZIPCode: '86551',
        addressCountry: 'Germany',
        addressState: 'Bavaria',
        addressStreet: 'Erlenweg',
        addressStreetNr: '1a'
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