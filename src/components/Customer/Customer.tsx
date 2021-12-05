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

type Props = {
  customer: ICustomer;
  deleteCustomer: (customer: ICustomer) => void;
};

export const Customer: React.FC<Props> = ({ customer, deleteCustomer }) => {
  return (
    <StyledCustomer>
      <StyledCustomerName>
        {customer.firstName} {customer.lastName}
      </StyledCustomerName>
      <StyledCustomerInfo>
        Phone number: {customer.phoneNumber}
      </StyledCustomerInfo>
      <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
        Delete
      </StyledCustomerDelete>
    </StyledCustomer>
  );
};
