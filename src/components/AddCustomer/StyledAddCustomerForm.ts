import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  box-sizing: border-box;
  min-width: 100%;
  border: 1px solid #ccc;
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: 0 0 0.5rem;
  padding: 0;
`;

export const StyledInput = styled.input`
  margin: 0 0 1rem;
  padding: 0.5rem;
  font-size: 16px;
`;

export const StyledAddButton = styled.button`
  padding: 1rem;
  background-color: rgb(4, 121, 205);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
  background: #bbc0c4;
`}
`;

export const StyledInvalidDiv = styled.div`
  color: red;
  font-size: 12px;
  margin: -13px 0 12px 0;
`;
