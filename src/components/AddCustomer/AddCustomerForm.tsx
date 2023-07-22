import { Field, Formik, FormikHelpers } from 'formik';
import * as React from 'react';
import { ICustomer, Customer } from '../../types/types';
import * as Yup from 'yup';
import {
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledAddButton,
    StyledErrorMessage,
} from './StyledAddCustomerForm';

const AddCustomerSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phoneNumber: Yup.string()
        .matches(/^(?:\+61|0)[1-9](?:[0-9]?[0-9])?[0-9]{6}$/, {
            message: 'Invalid phone number',
            excludeEmptyString: true,
        })
        .required('Required'),
});

type Props = {
    saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
            }}
            validationSchema={AddCustomerSchema}
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
                    <StyledLabel htmlFor='firstName'>First Name</StyledLabel>
                    <Field
                        as={StyledInput}
                        id='firstName'
                        name='firstName'
                        placeholder='John'
                    />

                    {errors.firstName && touched.firstName ? (
                        <StyledErrorMessage>
                            {errors.firstName}
                        </StyledErrorMessage>
                    ) : null}

                    <StyledLabel htmlFor='lastName'>Last Name</StyledLabel>
                    <Field
                        as={StyledInput}
                        id='lastName'
                        name='lastName'
                        placeholder='Doe'
                    />

                    {errors.lastName && touched.lastName ? (
                        <StyledErrorMessage>
                            {errors.lastName}
                        </StyledErrorMessage>
                    ) : null}

                    <StyledLabel htmlFor='phoneNumber'>
                        Phone Number
                    </StyledLabel>
                    <Field
                        as={StyledInput}
                        id='phoneNumber'
                        name='phoneNumber'
                        placeholder='john@acme.com'
                        type='tel'
                    />

                    {errors.phoneNumber && touched.phoneNumber ? (
                        <StyledErrorMessage>
                            {errors.phoneNumber}
                        </StyledErrorMessage>
                    ) : null}

                    <StyledAddButton type='submit'>
                        Add Customer
                    </StyledAddButton>
                </StyledForm>
            )}
        </Formik>
    );
};
