import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import {
  // StyledCustomer,
  StyledCustomerDelete,
  // StyledCustomerInfo,
  // StyledCustomerName,
} from "./StyledCustomer";

// Converting to table view

type Props = {
  customer: ICustomer;
  removeCustomer: (customer: ICustomer) => void;
};

export const Customer: React.FC<Props> = ({ customer, removeCustomer }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch, removeCustomer]
  );

  return (
    <tr key={customer.id}>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.dateOfBirth}</td>
      <td>
        {" "}
        <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
          Delete
        </StyledCustomerDelete>
      </td>
    </tr>
    // <StyledCustomer>
    //   <StyledCustomerName>
    //     {customer.firstName} {customer.lastName}
    //   </StyledCustomerName>
    //   <StyledCustomerInfo>
    //     Phone number: {customer.phoneNumber}
    //   </StyledCustomerInfo>
    //   <StyledCustomerInfo>
    //     Date of Birth: {customer.dateOfBirth}
    //   </StyledCustomerInfo>
    //   <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
    //     Delete
    //   </StyledCustomerDelete>
    // </StyledCustomer>
  );
};
