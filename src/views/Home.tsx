import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerSearch, CustomerSort, CustomerSortOption, CustomerState, ICustomer } from "../types/types";
import { addCustomer } from "../redux/actions/customerActions";
import { SearchCustomersForm } from "../components/SearchCustomers/SearchCustomersForm";
import { SortCustomers as SortCustomersForm } from "../components/SortCustomers/SortCustomersForm";
import { CustomerList } from "../components/CustomerList/CustomerList";

const Home: React.FC = () => {
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );

  const [customerSearch, setCustomerSearch] = React.useState<CustomerSearch>({
    fullName: "",
    phoneNumber: "",
  });
  const [customerSort, setCustomerSort] = React.useState<CustomerSort>({
    sortOption: CustomerSortOption.None,
  });
  const searchIsIdle = customerSearch.fullName.length == 0 && customerSearch.phoneNumber.length === 0;

  return (
    <>
      <AddCustomerForm saveCustomer={saveCustomer} />
      <SearchCustomersForm searchCustomer={setCustomerSearch} clearBtnDisabled={searchIsIdle} />
      <SortCustomersForm sortCustomers={setCustomerSort} />
      <CustomerList
        customers={customers}
        customerSearch={customerSearch}
        customerSort={customerSort}
      />
    </>
  );
};

export default Home;
