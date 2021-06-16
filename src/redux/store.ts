//import { customerReducer } from './reducers/customerReducers';
// import { createStore, Store } from "redux";
// import { CustomerAction, CustomerState } from "../types/types";
// import { customerReducer } from "./reducers/customerReducers";

// export type DispatchType = (args: CustomerAction) => CustomerAction;

// export const store: Store<CustomerState, CustomerAction> & {
//   dispatch: DispatchType;
// } = createStore(customerReducer);


import { configureStore } from '@reduxjs/toolkit'

import customerReducer from "./reducers/customerReducers";
//import customerReducer from "./reducers/customerReducers"

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    customers: customerReducer,
  }
})

export default store