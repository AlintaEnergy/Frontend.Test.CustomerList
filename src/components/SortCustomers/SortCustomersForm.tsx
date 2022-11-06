import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { CustomerSort, CustomerSortOption } from "../../types/types";
import { StyledForm, StyledLabel, StyledAddButton } from "../AddCustomer/StyledAddCustomerForm";
import { StyledSelect } from "./StyledSortCustomersForm";

const customerSortOptions = new Map([
  [CustomerSortOption.None, "None"],
  [CustomerSortOption.FirstName, "First Name"],
  [CustomerSortOption.LastName, "Last Name"],
  [CustomerSortOption.PhoneNumber, "Phone Number"],
]);

type Props = {
  sortCustomers: (sortOption: CustomerSort) => void;
};

export const SortCustomers: React.FC<Props> = ({ sortCustomers }) => {
  return (
    <Formik
      initialValues={{
        sortOption: CustomerSortOption.None
      }}
      onSubmit={(
        values: CustomerSort,
        { setSubmitting }: FormikHelpers<CustomerSort>
      ) => {
        sortCustomers(values);
        setSubmitting(false);
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="sortOption">Sort By</StyledLabel>
        <Field name="sortOption" as={StyledSelect}>
          {Array.from(customerSortOptions.entries()).map(([key, value]) => (
            <option value={key} key={key}>{value}</option>
          ))}
        </Field>

        <StyledAddButton type="submit">Sort Customers</StyledAddButton>
      </StyledForm>
    </Formik>
  );
};
