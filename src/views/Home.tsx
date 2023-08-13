import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { CustomerState, ICustomer } from "../types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { ButtonCellRenderer } from "../components/Grid/ButtonCellRenderer"

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

const StyledAddCustomerButton = styled(Link)`
  padding: 1rem;
  background-color: rgb(4, 121, 205);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  text-align: center;
  text-decoration: auto;
  margin-bottom: 5px;
`;

const filterConfig = {
  filter: true,
  floatingFilter: true,
};
const Home: React.FC = () => {
  const gridRef = React.useRef<AgGridReact<ICustomer>>(null);

  const customers: ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const colDefs: ColDef<ICustomer | any>[] = [
    { field: "firstName", ...filterConfig, sortable: true },
    { field: "lastName", ...filterConfig, sortable: true },
    { field: "phoneNumber", ...filterConfig, sortable: true },
    { field: "birthday", ...filterConfig, sortable: true },
    { field: "", cellRenderer: ButtonCellRenderer}
  ];

  const onFirstDataRendered = React.useCallback((params) => {
    gridRef?.current?.api.sizeColumnsToFit();
  }, []);

  return (
    <>
      <h3>Customer List</h3>
      <StyledAddCustomerButton
        to="/addCustomer"
        aria-label="Add New Customer button"
      >
        New Customer
      </StyledAddCustomerButton>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact<ICustomer>
          ref={gridRef}
          rowData={customers}
          columnDefs={colDefs}
          onFirstDataRendered={onFirstDataRendered}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Home;
