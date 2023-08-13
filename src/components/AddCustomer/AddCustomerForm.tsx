import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledCancelButton,
} from "./StyledAddCustomerForm";
import { addCustomer } from "../../redux/actions/customerActions";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const AddCustomerForm: React.FC = () => {
  let history = useHistory();
  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer | any) => {
      dispatch(addCustomer(customer));
      history.push("/");
    },
    [dispatch]
  );

  const cancel = () => {
    history.push("/");
  }

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
      <StyledForm>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <Field
          as={StyledInput}
          id="firstName"
          name="firstName"
          placeholder="John"
        />

        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <Field
          as={StyledInput}
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />

        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <Field
          as={StyledInput}
          id="phoneNumber"
          name="phoneNumber"
          placeholder="john@acme.com"
          type="tel"
        />

        <StyledAddButton type="submit">Add Customer</StyledAddButton>
        <StyledCancelButton onClick={cancel}>Cancel</StyledCancelButton>
      </StyledForm>
    </Formik>
  );
};
