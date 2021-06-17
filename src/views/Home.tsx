import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import {
  Table,TableHead,TableHeadData
} from "../StyledApp";

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
      <AddCustomerForm saveCustomer={saveCustomer} />
      <Table id="leaderboard_view" >
    {/* <TableHead >Customers</TableHead>*/}
    <p></p>
    <tbody>
      <tr>
        <TableHeadData>Name</TableHeadData>
        <TableHeadData>Phone Number</TableHeadData>
        <TableHeadData>Date of Birth</TableHeadData>
        <TableHeadData> </TableHeadData>
      </tr >
      {customers.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={removeCustomer}
        />
      ))}
        
    </tbody>
  </Table>
      
    </>
  );

};

export default Home;
