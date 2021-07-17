import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import { toHeaderCase } from "../../utils/formUtils";
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableRowItem,
  StyledCustomerDelete,
} from "./StyledCustomer";

type Props = {
  customers: readonly ICustomer[];
  removeCustomer: (customer: ICustomer) => void;
};

export const Customer: React.FC<Props> = ({ customers, removeCustomer }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch, removeCustomer]
  );

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <StyledTableRow>
            {Object.keys(customers[0]).map((key, index) => (
              <StyledTableHeader key={index}>
                {toHeaderCase(key)}
              </StyledTableHeader>
            ))}
            <StyledTableHeader>Action</StyledTableHeader>
          </StyledTableRow>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <StyledTableRow key={index}>
              {Object.values(customer).map((val, index) => (
                <StyledTableRowItem key={index}>{val}</StyledTableRowItem>
              ))}
              <StyledTableRowItem>
                <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
                  Delete
                </StyledCustomerDelete>
              </StyledTableRowItem>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};
