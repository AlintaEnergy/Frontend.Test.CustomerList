import { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import { StyledInput } from "./StyledHome";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const [customersForDisplay, setCustomersForDisplay] = useState<ICustomer[]>(
    []
  );
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );
  const memoedCustomers = useMemo(() => customers, [customers]);

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );

  const deleteCustomer = useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch]
  );

  const filterCustomers = (customers: readonly ICustomer[], input: string) =>
    customers.filter(
      (customer) =>
        customer.firstName.toLowerCase().includes(input.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(input.toLowerCase()) ||
        customer.phoneNumber.toLowerCase().includes(input.toLowerCase())
    );

  useEffect(() => {
    setCustomersForDisplay(filterCustomers(memoedCustomers, input));
  }, [memoedCustomers, input]);

  return (
    <>
      <AddCustomerForm saveCustomer={saveCustomer} />
      <StyledInput
        type="search"
        placeholder="search name or phone number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {customersForDisplay.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          deleteCustomer={deleteCustomer}
        />
      ))}
    </>
  );
};

export default Home;
