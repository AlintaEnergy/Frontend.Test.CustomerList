import styled from "styled-components";

export const StyledTableContainer = styled.div`
  overflow: auto;
  height: 428px;
  width: 100%;
  margin-top: 25px;
`;

export const StyledTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTableHeader = styled.th`
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  background-color: #0479cd;
  color: white;
  font-weight: bold;
`;

export const StyledTableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;

  :nth-child(even) {
    background-color: #f2f2f2;
  }

  :hover {
    background-color: #ddd;
  }
`;

export const StyledTableRowItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const StyledCustomerDelete = styled.button`
  padding: 0.7rem;
  background-color: #dc1616;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;
