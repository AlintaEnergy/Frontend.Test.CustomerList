import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { CustomerSearch } from "../../types/types";
import { StyledForm, StyledLabel, StyledInput, StyledAddButton } from "../AddCustomer/StyledAddCustomerForm";
import { StyledClearButton } from "./StyledSearchCustomersForm";

type Props = {
  searchCustomer: (customer: CustomerSearch) => void;
  clearBtnDisabled: boolean;
};

export const SearchCustomersForm: React.FC<Props> = ({ searchCustomer, clearBtnDisabled }) => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
      }}
      onSubmit={(
        values: CustomerSearch,
        { setSubmitting }: FormikHelpers<CustomerSearch>
      ) => {
        searchCustomer(values);
        setSubmitting(false);
      }}
    >
      {({ resetForm }) => (
        <StyledForm>
          <StyledLabel htmlFor="fullName">Name</StyledLabel>
          <Field
            as={StyledInput}
            id="fullName"
            name="fullName"
            placeholder="Search by name"
          />

          <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Search By Phone Number"
            type="tel"
          />

          <StyledAddButton type="submit">Search Customers</StyledAddButton>
          <StyledClearButton disabled={clearBtnDisabled} onClick={() => resetForm()}>Clear</StyledClearButton>
        </StyledForm>
      )}
    </Formik>
  );
};
