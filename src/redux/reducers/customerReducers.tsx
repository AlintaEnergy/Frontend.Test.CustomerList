import { CustomerAction, CustomerState, ICustomer } from "../../types/types";
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerTypes";
import toast from "react-hot-toast";

export const initialState: CustomerState = {
  customers: [
    {
      id: 1,
      firstName: "Charles",
      lastName: "Babbage",
      email: "cb@test.com",
      birthDate: "1791-12-26",
    },
    {
      id: 2,
      firstName: "Alan",
      lastName: "Turing",
      email: "at@test.com",
      birthDate: "1912-06-23",
    },
    {
      id: 3,
      firstName: "Ada",
      lastName: "Lovelace",
      email: "al@test.com",
      birthDate: "1815-12-10",
    },
  ],
};

const notifyExists = () =>
  toast("Customer already exists!", {
    icon: "🙅",
  });
const notifySuccess = () => toast.success("Customer added !");
const notifyDelete = () => toast.error("Customer Deleted!");

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
        email: action.customer.email,
        birthDate: action.customer.birthDate,
      };

      const customerExists = state.customers.find(
        (customer) => customer.firstName === newCustomer.firstName
      );

      if (customerExists) {
        notifyExists();
        return state;
      } else {
        notifySuccess();
        return {
          ...state,
          customers: state.customers.concat(newCustomer),
        };
      }
    case REMOVE_CUSTOMER:
      const updatedCustomers: ICustomer[] = state.customers.filter(
        (customer) => customer.id !== action.customer.id
      );
      notifyDelete();
      return {
        ...state,
        customers: updatedCustomers,
      };
  }
  return state;
};
