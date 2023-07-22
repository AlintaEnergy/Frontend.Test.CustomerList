import * as React from 'react';
import { render } from '../../utils/testUtils';
import { AddCustomerForm } from './AddCustomerForm';
import { BrowserRouter } from 'react-router-dom';

describe('<AddCustomerForm />', () => {
    it('should render a <AddCustomerForm />', () => {
        const wrapper = render(
            <BrowserRouter>
                <AddCustomerForm saveCustomer={() => {}} />
            </BrowserRouter>
        );
        expect(wrapper.container).toMatchSnapshot();
    });

    //@TODO Add tests for entering data and clicking submit
});
