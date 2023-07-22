import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { removeCustomer } from "../redux/actions/customerActions";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import { Columns } from "../components/CustomerTable/Columns";

const Home: React.FC = () => {
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch]
);

  return (
    <>
      <CustomerTable columns={Columns(deleteCustomer)} data={customers.slice()}/>
    </>
  );
};

export default Home;
