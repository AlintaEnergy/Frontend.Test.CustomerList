import { CustomerAction, CustomerState, ICustomer } from "../../types/types";
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerTypes";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  customers:[
  {
    id: 1,
    firstName: "Charles",
    lastName: "Babbage",
    phoneNumber: "0412 123 123",
    dob: "12/11/1983",
  },
  {
    id: 2,
    firstName: "Alan",
    lastName: "Turing",
    phoneNumber: "(03) 9599 1234",
    dob: "15/10/1983",
  },
  {
    id: 3,
    firstName: "Ada",
    lastName: "Lovelace",
    phoneNumber: "+61 423 345 567",
    dob: "14/11/1996",
  },
]};

const customerReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add_customer(state, action) {
      console.log(action);

      const newCustomer: ICustomer = {
        id: action.payload.id ?? Math.random(), // not really unique but it's just an example
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        dob: action.payload.dob,
      };

      state.customers.push(newCustomer);
    },
    remove_customer(state, action) {
      // console.log(action);
      
      const updatedCustomers: ICustomer[] = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
      return{
        ...state,
        customers:updatedCustomers
      }
    },
  },
});

export const { add_customer, remove_customer } = customerReducer.actions;

export default customerReducer.reducer;






// export const customerReducer = (
//   state: CustomerState = initialState,
//   action: CustomerAction
// ): CustomerState => {
//   switch (action.type) {
//     case ADD_CUSTOMER:
//       const newCustomer: ICustomer = {
//         id: action.customer.id ?? Math.random(), // not really unique but it's just an example
//         firstName: action.customer.firstName,
//         lastName: action.customer.lastName,
//         phoneNumber: action.customer.phoneNumber,
//         dob:action.customer.dob,
//       };
//       return {
//         ...state,
//         customers: state.customers.concat(newCustomer),
//       };
//     case REMOVE_CUSTOMER:
//       const updatedCustomers: ICustomer[] = state.customers.filter(
//         (customer) => customer.id !== action.customer.id
//       );
//       return {
//         ...state,
//         customers: updatedCustomers,
//       };
//   }
//   return state;
// };
