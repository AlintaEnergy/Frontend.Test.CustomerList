import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
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
import { useDispatch } from "react-redux";
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

  const saveCustomer = React.useCallback(
    (customer: ICustomer | any) => {
      dispatch(addCustomer(customer));
      history.push("/");
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
          />

          <StyledAddButton type="submit">Add Customer</StyledAddButton>
          <StyledCancelButton onClick={cancel}>Cancel</StyledCancelButton>
        </StyledForm>
      )}
    </Formik>
  );
};
