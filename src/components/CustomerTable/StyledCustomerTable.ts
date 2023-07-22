import styled from "styled-components";

export const StyledCustomerTableDelete = styled.button`
  padding: 0.8rem;
  background-color: #dc1616;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledCustomerTableContainer = styled.div`
    width: 100%;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
`;

export const StyledCustomerTable = styled.table`
    width: 100%;
    caption-side: bottom;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-collapse: collapse;
`;

export const StyledCustomerTableHeader = styled.thead`
    width: 100%;
    caption-side: bottom;
    font-size: 0.875rem;
    line-height: 1.25rem;
    & tr {
        border-bottom: 1px solid #ccc;
    }
`;

export const StyledCustomerTableBody = styled.tbody`
    & tr:last-child {
        border-width: 0px;
    }
`;

export const StyledCustomerTableRow = styled.tr`
    border-bottom: 1px solid #ccc;
    &:hover {
        background-color: rgb(226 232 240);
    }
`;

export const StyledCustomerTableHead = styled.th`
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    vertical-align: middle;
    font-weight: 500;
`;

export const StyledCustomerTableCell = styled.td`
    padding: 1rem;
    vertical-align: middle;
`;

export const StyledCustomerTablePaginationController = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const StyledCustomerTablePaginationButton = styled.button`
    height: 2.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.375rem;
`;

export const StyledCustomerTableAddButton = styled.button`
  padding: 1rem;
  background-color: rgb(4, 121, 205);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledCustomerTableInput = styled.input`
  margin: 0 0 1rem;
  padding: 0.5rem;
  font-size: 16px;
`;

export const StyledCustomerTableToolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 0;
`