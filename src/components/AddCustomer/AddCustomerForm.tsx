import { Field, Formik, FormikHelpers, ErrorMessage } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import { nameRegex, phoneRegex } from "../../utils/formUtils";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledInvalidDiv,
} from "./StyledAddCustomerForm";
import * as Yup from "yup";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

const initialValues: Customer = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      nameRegex,
      "Please only use alphabet letters, apostrophes, spaces and dashes."
    )
    .required("This field is required."),
  lastName: Yup.string()
    .matches(
      nameRegex,
      "Please only use alphabet letters, apostrophes, spaces and dashes."
    )
    .required("This field is required."),
  phoneNumber: Yup.string()
    .matches(phoneRegex, "Please enter a valid phone number.")
    .required("This field is required."),
});

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(
        values: Customer,
        { setSubmitting, resetForm }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        setSubmitting(false);
        resetForm({
          values: initialValues,
        });
      }}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm>
          <StyledLabel htmlFor="firstName">First Name *</StyledLabel>
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
          />
          <ErrorMessage
            name="firstName"
            render={(msg) => (
              <StyledInvalidDiv data-testid="firstName-error">
                {msg}
              </StyledInvalidDiv>
            )}
          />
          <StyledLabel htmlFor="lastName">Last Name *</StyledLabel>
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
          <ErrorMessage
            name="lastName"
            render={(msg) => (
              <StyledInvalidDiv data-testid="lastName-error">
                {msg}
              </StyledInvalidDiv>
            )}
          />
          <StyledLabel htmlFor="phoneNumber">Phone Number *</StyledLabel>
          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0400000000"
            type="tel"
          />
          <ErrorMessage
            name="phoneNumber"
            render={(msg) => (
              <StyledInvalidDiv data-testid="phoneNumber-error">
                {msg}
              </StyledInvalidDiv>
            )}
          />
          <StyledAddButton type="submit" disabled={isSubmitting || !isValid}>
            Add Customer
          </StyledAddButton>
        </StyledForm>
      )}
    </Formik>
  );
};
