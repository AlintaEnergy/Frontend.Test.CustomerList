import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import {
  StyledCustomer,
  StyledCustomerDelete,
  StyledCustomerInfo,
  StyledCustomerName,
} from "./StyledCustomer";
import { Toaster } from "react-hot-toast";

type Props = {
  customer: ICustomer;
  removeCustomer: (customer: ICustomer) => void;
};

export const Customer = ({ customer, removeCustomer }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => {
      dispatch(removeCustomer(customer));
    },
    [dispatch]
  );

  return (
    <>
      <StyledCustomer>
        <StyledCustomerName>
          {customer.firstName} {customer.lastName}
        </StyledCustomerName>
        <StyledCustomerInfo>Email: {customer.email}</StyledCustomerInfo>
        <StyledCustomerInfo>Birthday: {customer.birthDate}</StyledCustomerInfo>
        <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
          Delete
        </StyledCustomerDelete>
      </StyledCustomer>
      <Toaster />
    </>
  );
};
