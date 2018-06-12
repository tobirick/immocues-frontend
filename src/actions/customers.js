import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../constants/customers';

export const createCustomer = (customer) => {
	return {
		type: CREATE_CUSTOMER,
		payload: {
			customer
		}
	}
}

export const updateCustomer = (customer) => {
	return {
		type: UPDATE_CUSTOMER,
		payload: {
			customer
		}
	}
}

export const deleteCustomer = (customerId) => {
	return {
		type: DELETE_CUSTOMER,
		payload: {
			customerId
		}
	}
}