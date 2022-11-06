import * as React from "react";
import { removeCustomer } from "../../redux/actions/customerActions";
import { CustomerSearch, CustomerSort, CustomerSortOption, ICustomer } from "../../types/types";
import { Customer } from "../Customer/Customer";
import { StyledNoCustomersDiv } from "./StyledCustomerList";

type Props = {
  customers: readonly ICustomer[];
  customerSearch: CustomerSearch;
  customerSort: CustomerSort;
};

export const CustomerList: React.FC<Props> = ({ customers, customerSearch, customerSort }) => {
  const filteredCustomers = React.useMemo(() =>
    customerSearch.fullName || customerSearch.phoneNumber
      ? customers.filter((customer: ICustomer) => {
        const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
        const phoneNumber = customer.phoneNumber.toLowerCase();
        const fullNameSearch = customerSearch.fullName.toLowerCase();
        const phoneNumberSearch = customerSearch.phoneNumber.toLowerCase();
        return fullNameSearch.length > 0 && fullName.includes(fullNameSearch)
          || phoneNumberSearch.length > 0 && phoneNumber.includes(phoneNumberSearch);
      })
      : customers,
    [customers, customerSearch]
  );

  const sortedCustomers = React.useMemo(() => {
    switch (Number(customerSort.sortOption)) {
      case CustomerSortOption.None:
        return filteredCustomers;
      case CustomerSortOption.FirstName:
        return [...filteredCustomers].sort((a, b) => a.firstName.localeCompare(b.firstName));
      case CustomerSortOption.LastName:
        return [...filteredCustomers].sort((a, b) => a.lastName.localeCompare(b.lastName));
      case CustomerSortOption.PhoneNumber:
        return [...filteredCustomers].sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
      default:
        return filteredCustomers;
    };
  },
    [filteredCustomers, customerSort]
  );

  if (sortedCustomers.length === 0) {
    return (
      <StyledNoCustomersDiv>
        No customers found...
      </StyledNoCustomersDiv>
    );
  }
  return (
    <>
      {sortedCustomers.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={removeCustomer}
        />
      ))}
    </>
  );
};
