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
import { NavLink } from 'react-router-dom';

const AddCustomerSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phoneNumber: Yup.string()
        .matches(/^(?:\+61|0)[1-9](?:[0-9]?[0-9])?[0-9]{6}$/, {
            message: 'Invalid phone number',
            excludeEmptyString: true,
        })
        .required('Required'),
    birthday: Yup.date().max(new Date(), 'Invalid date'),
});

type Props = {
    saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
    const [message, setMessage] = React.useState('');

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
                setMessage('User added');
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
                        placeholder='0412345678'
                        type='tel'
                    />

                    {errors.phoneNumber && touched.phoneNumber ? (
                        <StyledErrorMessage>
                            {errors.phoneNumber}
                        </StyledErrorMessage>
                    ) : null}
                    <StyledLabel htmlFor='birthday'>Birthday</StyledLabel>
                    <Field
                        as={StyledInput}
                        id='birthday'
                        name='birthday'
                        placeholder='01/01/2000'
                        type='date'
                    />
                    {errors.birthday && touched.birthday ? (
                        <StyledErrorMessage>
                            {errors.birthday}
                        </StyledErrorMessage>
                    ) : null}

                    <span style={{ color: 'green' }}>{message}</span>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <NavLink to='/'>
                            <StyledAddButton type='button'>
                                Back
                            </StyledAddButton>
                        </NavLink>

                        <StyledAddButton type='submit'>
                            Add Customer
                        </StyledAddButton>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
