import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledErrorMessage,
} from "./StyledAddCustomerForm";
import { validateEmptyField, validatePattern } from "../../utils/validator";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
  const PHONE_NUMBER_REGEX =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
            validate={(value: string) =>
              validateEmptyField(value, "First name is required")
            }
          />
          {errors.firstName && touched.firstName && (
            <StyledErrorMessage role="alert">
              {errors.firstName}
            </StyledErrorMessage>
          )}

          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
            validate={(value: string) =>
              validateEmptyField(value, "Last name is required")
            }
          />
          {errors.lastName && touched.lastName && (
            <StyledErrorMessage role="alert">
              {errors.lastName}
            </StyledErrorMessage>
          )}

          <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0411 222 333"
            type="tel"
            validate={(value: string) =>
              validateEmptyField(value, "Phone number is required") ||
              validatePattern(
                value,
                PHONE_NUMBER_REGEX,
                "Phone number is not valid"
              )
            }
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <StyledErrorMessage role="alert">
              {errors.phoneNumber}
            </StyledErrorMessage>
          )}

          <StyledAddButton type="submit">Add Customer</StyledAddButton>
        </StyledForm>
      )}
    </Formik>
  );
};
