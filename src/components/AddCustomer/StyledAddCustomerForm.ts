import { Form } from "formik";
import styled from "styled-components";

interface StyledFormProps {
  hidden: boolean;
}

export const StyledForm = styled(Form)`
  box-sizing: border-box;
  min-width: 100%;
  border: 1px solid #ccc;
  margin: 0 1rem;
  padding: 1rem;
  display: ${(props: StyledFormProps) => (props.hidden ? "none" : "flex")};
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
`;

export const StyledAccordionContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 0.9rem;
  margin-bottom: 0.5em;
  min-width: 100%;

  h3 {
    margin: auto 0;
    color: black;
    font-weight: 600;
  }

  button {
    margin: auto 0 auto auto;
    padding: 1em;
    background: none;
    color: blue;
    text-transform: capitalize;
    border: none;
    outline: none;
    font-size: 1rem;
  }
`;

export const StyledError = styled.p`
  color: red;
  margin: auto 0 auto auto;
`;
