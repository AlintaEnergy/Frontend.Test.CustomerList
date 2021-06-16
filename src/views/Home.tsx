import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { removeCustomer } from "../redux/actions/customerActions";
import { add_customer, remove_customer } from "../redux/reducers/customerReducers";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Home: React.FC = () => {
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(add_customer(customer)),
    [dispatch]
  );

  const test = Object.assign({ customers }, customers);
  console.log(test.customers);

  // const storetest = useSelector(state => state);
  // console.log(storetest)
  return (
    <>
      <AddCustomerForm saveCustomer={saveCustomer} />
      
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone Number&nbsp;(g)</TableCell>
              <TableCell align="right">DOB&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test.customers.map((customer: ICustomer) => (
              <TableRow key={customer.id}>
                <TableCell align="right">{customer.firstName}</TableCell>
                <TableCell align="right">{customer.lastName}</TableCell>
                <TableCell align="right">{customer.phoneNumber}</TableCell>
                <TableCell align="right">{customer.dob}</TableCell>
                <Customer
                  key={customer.id}
                  customer={customer}
                  removeCustomer={() => remove_customer(customer)}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </>
  );
};

export default Home;

{/* <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={()=>remove_customer(customer)}
        /> */}
