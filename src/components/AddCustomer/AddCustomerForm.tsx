import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledErrorDiv,
} from "./StyledAddCustomerForm";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateFirstName(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[a-zA-Z0-9]{2,50}$/i.test(value)) {
    error = "Please enter a valid name";
  }
  return error;
}

function validateLastName(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[a-zA-Z0-9]{2,50}$/i.test(value)) {
    error = "Please enter a valid Last Name";
  }
  return error;
}

function validateBirthDate(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/i.test(value)) {
    error = "Please enter a valid date";
  } else {
    const inputDate = new Date(value);
    const currentDate = new Date();
    if (inputDate.getTime() >= currentDate.getTime()) {
      error = "Please enter a date before today's date";
    }
  }
  return error;
}

export const AddCustomerForm = ({ saveCustomer }: Props) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
      }}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, validateForm }) => (
        <StyledForm>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
            validate={validateFirstName}
          />
          {errors.firstName && touched.firstName && (
            <StyledErrorDiv>{errors.firstName}</StyledErrorDiv>
          )}

          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
            validate={validateLastName}
          />
          {errors.lastName && touched.lastName && (
            <StyledErrorDiv>{errors.lastName}</StyledErrorDiv>
          )}

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Field
            as={StyledInput}
            id="email"
            name="email"
            validate={validateEmail}
            placeholder="john@acme.com"
            type="email"
          />
          {errors.email && touched.email && (
            <StyledErrorDiv>{errors.email}</StyledErrorDiv>
          )}

          <StyledLabel htmlFor="birthDate">Birthday</StyledLabel>
          <Field
            as={StyledInput}
            id="birthDate"
            name="birthDate"
            placeholder="MM/DD/YYYY"
            type="date"
            validate={validateBirthDate}
          />
          {errors.birthDate && touched.birthDate && (
            <StyledErrorDiv>{errors.birthDate}</StyledErrorDiv>
          )}

          <StyledAddButton type="submit" onClick={() => validateForm()}>
            Add Customer
          </StyledAddButton>
        </StyledForm>
      )}
    </Formik>
  );
};
