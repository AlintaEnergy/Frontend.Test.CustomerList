import React from "react";
import { StyledCustomerDelete } from "../Customer/StyledCustomer";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import { removeCustomer } from "../../redux/actions/customerActions";

export const ButtonCellRenderer: React.FC<any> = (params) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteCustomer = React.useCallback(
      (customer: ICustomer) => dispatch(removeCustomer(customer)),
      [dispatch, removeCustomer]
    );

  return (
    <StyledCustomerDelete onClick={() => deleteCustomer(params.data)}>
      Delete
    </StyledCustomerDelete>
  );
};
