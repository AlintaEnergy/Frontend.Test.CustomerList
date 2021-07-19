import styled from "styled-components";

export const StyledMain = styled.main`
  box-sizing: border-box;
  max-width: 100vw;
  margin: 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  box-sizing: border-box;
  min-width: 100vw;
  background: rgb(4, 121, 205);
  color: white;
  padding: 1rem 2rem;
  margin: 0 0 1rem;
`;

export const StyledHeaderText = styled.h1`
  margin: 0;
  padding: 0;
`;

export const StyledTableContainer = styled.div`
  min-width: 100%;
  overflow-x: auto;
`;

export const StyledCustomerTable = styled.table`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  thead th {
    text-align: left;
    border-bottom: 2px solid black;
  }

  thead button {
    border: 0;
    border-radius: none;
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    padding: 0.5em;
    margin-bottom: 1px;
  }

  thead button.ascending::after {
    content: "🔽";
    display: inline-block;
    margin-left: 1em;
  }

  thead button.descending::after {
    content: "🔼";
    display: inline-block;
    margin-left: 1em;
  }

  tbody td {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
  }

  tbody tr:hover {
    background-color: #eee;
  }
`;
