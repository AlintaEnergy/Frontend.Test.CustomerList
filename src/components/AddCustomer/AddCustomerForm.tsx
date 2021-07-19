import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  validateFirstName,
  validateLastName,
  validateDateOfBirth,
  validatePhone,
  storeDuplicateCheck,
} from "../../validation/AddCustomer";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledAddButton,
  StyledAccordionContainer,
} from "./StyledAddCustomerForm";

type Props = {
  customers: ICustomer[];
  saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({
  customers,
  saveCustomer,
}) => {
  // Move the Add new customer, form it takes up a lot of space on mobile. It could move to another page or be hidden in an accordion.
  const [hidden, setHidden] = React.useState<boolean>(true);
  const [submitError, setSubmitError] = React.useState<string>("");

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: "",
      }}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        const checkDuplicate = () => storeDuplicateCheck(values, customers);
        setSubmitError(checkDuplicate());
        if (!checkDuplicate()) {
          setSubmitError("");
          saveCustomer(values);
        }
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <>
          <StyledAccordionContainer>
            <h3>Show Add Customer Form</h3>
            <button onClick={() => setHidden(!hidden)}>
              {hidden ? "Show" : "Hide"}
            </button>
          </StyledAccordionContainer>
          <StyledForm hidden={hidden}>
            <StyledLabel aria-label="First Name" htmlFor="firstName">
              First Name
            </StyledLabel>
            <Field
              as={StyledInput}
              id="firstName"
              name="firstName"
              placeholder="John"
              aria-label="John"
              validate={validateFirstName}
            />
            {errors.firstName && touched.firstName && (
              <StyledError>{errors.firstName}</StyledError>
            )}
            <StyledLabel aria-label="Last Name" htmlFor="lastName">
              Last Name
            </StyledLabel>
            <Field
              as={StyledInput}
              id="lastName"
              name="lastName"
              placeholder="Doe"
              aria-label="Doe"
              validate={validateLastName}
            />
            {errors.lastName && touched.lastName && (
              <StyledError>{errors.lastName}</StyledError>
            )}
            <StyledLabel aria-label="Phone Number" htmlFor="phoneNumber">
              Phone Number
            </StyledLabel>
            <Field
              as={StyledInput}
              id="phoneNumber"
              name="phoneNumber"
              placeholder="0412345678"
              aria-label="0412345678"
              type="tel"
              validate={validatePhone}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <StyledError>{errors.phoneNumber}</StyledError>
            )}
            <StyledLabel aria-label="Date of Birth" htmlFor="dateOfBirth">
              Date of Birth
            </StyledLabel>
            <Field
              as={StyledInput}
              id="dateOfBirth"
              name="dateOfBirth"
              aria-label="date of birth"
              type="date"
              validate={validateDateOfBirth}
            />
            {errors.dateOfBirth && touched.dateOfBirth && (
              <StyledError>{errors.dateOfBirth}</StyledError>
            )}
            {submitError && <StyledError>{submitError}</StyledError>}
            <StyledAddButton type="submit">Add Customer</StyledAddButton>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
