import * as React from 'react';
import { AddCustomerForm } from '../components/AddCustomer/AddCustomerForm';
import { addCustomer } from '../redux/actions/customerActions';
import { ICustomer } from '../types/types';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const AddCustomer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const saveCustomer = React.useCallback(
        (customer: ICustomer) => dispatch(addCustomer(customer)),
        [dispatch]
    );
    return <AddCustomerForm saveCustomer={saveCustomer} />;
};

export default AddCustomer;
