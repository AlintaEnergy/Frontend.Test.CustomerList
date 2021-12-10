import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import { CustomerFormContainer } from "../components/accordion/CustomerFormContainer";

const Home: React.FC = () => {
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );

  return (
    <>
      <CustomerFormContainer onSave={saveCustomer} />
      {customers.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={removeCustomer}
        />
      ))}
    </>
  );
};

export default Home;
