import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import {
  StyledCustomer,
  StyledCustomerDelete,
  StyledCustomerInfo,
  StyledCustomerName,
  StyledCustomerdob
} from "./StyledCustomer";


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
      <StyledCustomer>
        <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
          Delete
        </StyledCustomerDelete>
      </StyledCustomer>
  );
};



{/* <StyledCustomerName>
          {customer.firstName} {customer.lastName}
        </StyledCustomerName>
        <StyledCustomerInfo>
          Phone number: {customer.phoneNumber}
        </StyledCustomerInfo>
        <StyledCustomerdob>
          Date of Birth: {customer.dob}
        </StyledCustomerdob> */}
