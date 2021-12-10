import React from "react";
import styled from "styled-components";
import { AddCustomerForm } from "../AddCustomer/AddCustomerForm";
import { Accordion } from "./Accordion";

export const CustomerFormContainer = (props: {
  onSave: (Customer: any) => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (
    e: React.MouseEvent,
    buttonClicked: "expand" | "collapse"
  ) => {
    if (buttonClicked === "expand") {
      setIsOpen(true);
    }
    if (buttonClicked === "collapse") {
      setIsOpen(false);
    }
  };
  return (
    <StyledAccordianContainer>
      <Accordion
        isOpen={isOpen}
        onClick={(e: React.MouseEvent, buttonClicked: "expand" | "collapse") =>
          handleClick(e, buttonClicked)
        }
        headerTitle="add new customer"
        content={<AddCustomerForm saveCustomer={props.onSave} />}
      />
    </StyledAccordianContainer>
  );
};

const StyledAccordianContainer = styled.section`
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;
