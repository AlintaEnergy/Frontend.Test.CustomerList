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

export const Table = styled.table`
width: 100%;
margin: 0;
border-spacing: 0;
border-collapse: collapse;
`;

export const TableHead = styled.thead`
font-size: 40px;
font-weight: bold;
text-align: left;
padding 2;
`;
export const TableHeadData = styled.td`
font-size: 30px;
font-weight:800;
border: 1px solid LightGrey;
height: 100%;
text-align: center;
vertical-align: middle;
`;