import { createReducer } from '../helpers/utils/reducerUtil';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../constants/customers';

const customersReducerDefaultState = [
      {
            id: '1',
            firstName: 'Tobi',
            lastName: 'Rick',
            profileImageSrc: '/img/default-profile.png',
            title: 'Testtitle',
            company: 'Testcompany',
            eMail: 'tobirickmann@gmail.com',
            phoneNumber: '08251/52264',
            mobilePhoneNumber: '01637205965',
            websiteUrl: 'testurl.de',
            addressCity: 'Aichach',
            addressStreet: 'Erlenweg 1',
            addressLatLng: {
                  lat: 40.7484405,
                  lng: -73.98566440000002
            },
            notes: ''
      },
      {
        id: '2',
        firstName: 'Tobi2',
        lastName: 'Rick2',
        profileImageSrc: '/img/default-profile.png',
        title: 'Testtitle',
        company: 'Testcompany',
        eMail: 'tobirickmann@gmail.com',
        phoneNumber: '08251/52264',
        mobilePhoneNumber: '01637205965',
        websiteUrl: 'testurl.de',
        addressCity: 'Aichach',
        addressStreet: 'Erlenweg 1',
        addressLatLng: {
              lat: 40.7484405,
              lng: -73.98566440000002
        },
        notes: ''
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