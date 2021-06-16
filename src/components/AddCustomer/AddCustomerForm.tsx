import { Field, Formik, FormikHelpers } from "formik";
import { useField, useFormikContext } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import { StyledForm, StyledInput, StyledLabel, StyledAddButton, StyledError } from "./StyledAddCustomerForm";
import * as Yup from 'yup';
//import {DatePicker} from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

// import DatePicker from "react-modern-calendar-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {

  const [selectedDate, setselectedDate] = React.useState(new Date());

  const phoneRegExp = /^[+]?[(]?[0-9]?[0-9]{2}[0-9]?[)]?[\s]?[-\s.]?[0-9]?[0-9]{2}[-\s.]?[0-9]?[-\s.]?[0-9]?[0-9]{2}[[-\s.]?[0-9]?]*/
  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'The First Name must be atleast 2 charecters')
      .max(50, 'Too Long!')
      .required('This Field is required'),
    lastName: Yup.string()
      .min(2, 'The Last Name must be atleast 2 charecters')
      .max(50, 'Too Long!')
      .required('This Field is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required("This Field is required"),
    dob: Yup.date()
      //.required("This Field is required"),
  });

  // const DatePickerField = ({ ...props }) => {
  //   const { setFieldValue } = useFormikContext();
  //   const [field] = useField(props);

  // const DatePickerField = ( name: any ) => {
  //   const formik = useFormikContext();
  //   const field = formik.getFieldProps(name);

  //   return (
  //     <DatePicker
  //       value={field.value}
  //       onChange={value => formik.setFieldValue(name, value)}
  //     />
  //   );
  // }


  return (

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dob: "",
      }}
      validationSchema={validateSchema}
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
          {errors.firstName && touched.firstName ? (
            <StyledError> <div>{errors.firstName}</div> </StyledError>
          ) : null}
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
          />
          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          {errors.lastName && touched.lastName ? (
            <StyledError><div>{errors.lastName}</div></StyledError>

          ) : null}
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
          <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
          {errors.phoneNumber && touched.phoneNumber ? (
            <StyledError><div>{errors.phoneNumber}</div></StyledError>

          ) : null}
          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0123456789"
            type="tel"
          />

          {/* <StyledLabel htmlFor="dob">Date of Birth</StyledLabel>
          {errors.dob && touched.dob ? (
            <StyledError><div>{errors.dob}</div></StyledError>
          ) : null} */}
          {/* <Field
            as={DatePicker}
            id="dob"
            name="dob"
            selected = {selectedDate}
            onChange = {(date: any) => setselectedDate(date)}
            minDate={new Date()}
            placeholder="dd/mm/yyyy"
            format = "dd/mm/yyyy"
            type="tel"
          /> */}

          {/* <DatePickerField name="dob" /> */}

          {/* <DatePicker
          // {...field}
          // {...props}
            selected={selectedDate}
            onChange={(date: any) => setselectedDate(date)}
            dateFormat = "dd/MM/yyyy"
            //filterDate = {date => date.getMonth() >= 1 && date.getDate() <= 31}
            showYearDropdown
            scrollableMonthYearDropdown
          /> */}
          <StyledAddButton type="submit">Add Customer</StyledAddButton>
        </StyledForm>
      )}
    </Formik>
  );
};
//};
