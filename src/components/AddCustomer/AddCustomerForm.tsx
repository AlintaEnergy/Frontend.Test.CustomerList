import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer, CustomerState } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledCancelButton,
  StyledError,
} from "./StyledAddCustomerForm";
import { addCustomer } from "../../redux/actions/customerActions";
import { Dispatch } from "redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const CustomerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(/^(\(0[1-9]\)|0[1-9])?( ?-?[0-9]){10,10}$/, "Invalid phone number")
    .required("Required"),
  birthday: Yup.date().required("Required"),
});

export const AddCustomerForm: React.FC = () => {
  let history = useHistory();
  const dispatch: Dispatch<any> = useDispatch();

  const customers: ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const saveCustomer = React.useCallback(
    (customer: ICustomer | any) => {
      let isCustomerFound = customers.find(cust => cust.firstName === customer.firstName && cust.lastName === customer.lastName && cust.phoneNumber === customer.phoneNumber)
      if(!isCustomerFound) {
        dispatch(addCustomer(customer));
        history.push("/");
      } else {
        alert('Customer already exist')
      }
      
      
    },
    [dispatch]
  );

  const cancel = () => {
    history.push("/");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthday: "",
      }}
      validationSchema={CustomerSchema}
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
          <StyledLabel htmlFor="firstName">
            First Name*{" "}
            {errors.firstName && touched.firstName ? (
              <StyledError>{errors.firstName}</StyledError>
            ) : null}
          </StyledLabel>
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
            aria-label={'First Name'}
            aria-required="true"
          />

          <StyledLabel htmlFor="lastName">
            Last Name*{" "}
            {errors.lastName && touched.lastName ? (
              <StyledError>{errors.lastName}</StyledError>
            ) : null}
          </StyledLabel>
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
            aria-label={'Last Name'}
            aria-required="true"
          />

          <StyledLabel htmlFor="phoneNumber">
            Phone Number*{" "}
            {errors.phoneNumber && touched.phoneNumber ? (
              <StyledError>{errors.phoneNumber}</StyledError>
            ) : null}
          </StyledLabel>

          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="03 333 333 333"
            type="tel"
            aria-label={'Phone'}
            aria-required="true"
          />

          <StyledLabel htmlFor="birthday">
            Birthday*{" "}
            {errors.birthday && touched.birthday ? (
              <StyledError>{errors.birthday}</StyledError>
            ) : null}
          </StyledLabel>

          <Field
            as={StyledInput}
            id="birthday"
            name="birthday"
            placeholder="DD/MM/YYYY"
            type="date"
            aria-label={'Birthday'}
            aria-required="true"
          />

          <StyledAddButton type="submit">Add Customer</StyledAddButton>
          <StyledCancelButton onClick={cancel}>Cancel</StyledCancelButton>
        </StyledForm>
      )}
    </Formik>
  );
};
