import { CustomerAction, CustomerState, ICustomer } from "../../types/types";
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerTypes";

// Added date of birth value to prevent errors from reducers

export const initialState: CustomerState = {
  customers: [
    {
      id: 1,
      firstName: "Charles",
      lastName: "Babbage",
      phoneNumber: "0412 123 123",
      dateOfBirth: "1999-03-25",
    },
    {
      id: 2,
      firstName: "Alan",
      lastName: "Turing",
      phoneNumber: "(03) 9599 1234",
      dateOfBirth: "1990-08-25",
    },
    {
      id: 3,
      firstName: "Ada",
      lastName: "Lovelace",
      phoneNumber: "+61 423 345 567",
      dateOfBirth: "1988-03-10",
    },
  ],
};

export const customerReducer = (
  state: CustomerState = initialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case ADD_CUSTOMER:
      const newCustomer: ICustomer = {
        id: action.customer.id ?? Math.random(), // not really unique but it's just an example
        firstName: action.customer.firstName,
        lastName: action.customer.lastName,
        phoneNumber: action.customer.phoneNumber,
        dateOfBirth: action.customer.dateOfBirth,
      };
      return {
        ...state,
        customers: state.customers.concat(newCustomer),
      };
    case REMOVE_CUSTOMER:
      const updatedCustomers: ICustomer[] = state.customers.filter(
        (customer) => customer.id !== action.customer.id
      );
      return {
        ...state,
        customers: updatedCustomers,
      };
  }
  return state;
};
