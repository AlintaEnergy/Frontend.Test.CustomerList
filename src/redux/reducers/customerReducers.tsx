import { CustomerAction, CustomerState, ICustomer } from '../../types/types';
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from '../actions/customerTypes';
import { v4 as uuidv4 } from 'uuid';

export const initialState: CustomerState = {
    customers: {
        '1': {
            id: 1,
            firstName: 'Charles',
            lastName: 'Babbage',
            phoneNumber: '0412 123 123',
        },

        '2': {
            id: 2,
            firstName: 'Alan',
            lastName: 'Turing',
            phoneNumber: '(03) 9599 1234',
        },
        '3': {
            id: 3,
            firstName: 'Ada',
            lastName: 'Lovelace',
            phoneNumber: '+61 423 345 567',
        },
    },
};

export const customerReducer = (
    state: CustomerState = initialState,
    action: CustomerAction
): CustomerState => {
    switch (action.type) {
        case ADD_CUSTOMER:
            const newCustomer: ICustomer = {
                id: action.customer.id ?? uuidv4(), // not really unique but it's just an example
                firstName: action.customer.firstName,
                lastName: action.customer.lastName,
                phoneNumber: action.customer.phoneNumber,
                birthday: action.customer?.birthday,
            };
            return {
                ...state,
                customers: {
                    ...state.customers,
                    [newCustomer.id]: newCustomer,
                },
            };
        case REMOVE_CUSTOMER:
            const {
                [action.customer.id]: removedCustomer,
                ...remainingCustomers
            } = state.customers;
            return {
                ...state,
                customers: remainingCustomers,
            };
    }
    return state;
};
