import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import {
  StyledCustomer,
  StyledCustomerDelete,
  StyledCustomerInfo,
  TableData,
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
    <tr>
          <TableData>
          {/* <StyledCustomer> */}
          <StyledCustomerInfo>
            {customer.firstName} {customer.lastName}
          </StyledCustomerInfo>
          </TableData>
          <TableData>
          <StyledCustomerInfo>
            {customer.phoneNumber}
          </StyledCustomerInfo>
          </TableData>
          <TableData>
          <StyledCustomerInfo>
            {customer.birthDate}
          </StyledCustomerInfo>
          </TableData>
          <TableData>
          <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
            Delete
          </StyledCustomerDelete>
          </TableData>
        {/* </StyledCustomer> */}
        </tr>
  );
};
