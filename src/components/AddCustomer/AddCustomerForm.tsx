import { Field, Formik, FormikHelpers} from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from "react-bootstrap";
import * as Yup from 'yup';

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
} from "./StyledAddCustomerForm";
import { date } from "yup";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};


const SignupSchema = Yup.object().shape({  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is Required'),  
  phoneNumber: Yup.string()   
  //.matches(/(01)(\d){8}\b/, 'Enter a valid phone number')           
    .required('Phone Number is Required'), 
  birthDate: Yup.string() 
    .required('Birth Date is Required'),  
});

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
  return (
    <div>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
         Add a Customer
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phoneNumber: "",
                birthDate: "03/06/2021",
              }}
            
              validationSchema={SignupSchema}

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
                />
                 {errors.firstName && touched.firstName ? (
                    <div><p style={{color: 'red'}}>{errors.firstName}</p></div>
                  ) : null}

                <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
                <Field
                  as={StyledInput}
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                />
                
                {errors.lastName && touched.lastName ? (
                  <div><p style={{color: 'red'}}>{errors.lastName}</p></div>
                ) : null}

                <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
                <Field
                  as={StyledInput}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="john@acme.com"
                  type="tel"
                />

                {errors.phoneNumber && touched.phoneNumber ? (
                  <div><p style={{color: 'red'}}>{errors.phoneNumber}</p></div>
                ) : null}

                <StyledLabel htmlFor="birthDate">Birth Date</StyledLabel>
                <Field
                  as={StyledInput}
                  id="birthDate"
                  name="birthDate"
                  placeholder=""
                  type="date"
                />

                {errors.birthDate && touched.birthDate ? (
                  <div><p style={{color: 'red'}}>{errors.birthDate}</p></div>
                ) : null}
                
                <StyledAddButton type="submit">Add Customer</StyledAddButton>
              </StyledForm>
            
            )}
            </Formik>
          </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
      </div>
 
  );
};
