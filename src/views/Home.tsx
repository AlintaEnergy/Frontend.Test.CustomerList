import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { SearchCustomer } from "../components/SearchCustomer/SearchCustomer";
import { TableCustomer } from "../components/TableCustomer/TableCustomer";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import { filteredLaunches } from "../validation/SearchCustomer";
import { StyledCustomerTable, StyledTableContainer } from "../StyledApp";
import { useSortableData } from "../validation/FilterCustomer";

const Home: React.FC = () => {
  const customers: ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );

  const [searchValue, setSearchValue] = React.useState<string>("");
  const [newCustomer, setNewCustomer] = React.useState<ICustomer[]>(customers);

  const { items, requestSort, sortConfig } = useSortableData(newCustomer, null);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  React.useEffect(() => {
    setNewCustomer(customers);
  }, [customers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    let searchValue = event.target.value;

    setSearchValue(searchValue);
    let searchFilter = filteredLaunches(customers, searchValue, [
      "firstName",
      "lastName",
      "phoneNumber",
    ]);

    setNewCustomer(searchFilter);
  };

  let sortFilter = items ? items : newCustomer;

  return (
    <>
      <AddCustomerForm customers={newCustomer} saveCustomer={saveCustomer} />
      <SearchCustomer
        update={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={searchValue}
      />
      <StyledTableContainer>
        <StyledCustomerTable>
          <TableCustomer
            requestSort={(value: string) => requestSort(value)}
            getClassNamesFor={(value: string) => getClassNamesFor(value)}
          />
          <tbody>
            {sortFilter.map((customer: ICustomer) => (
              <Customer
                key={customer.id}
                customer={customer}
                removeCustomer={removeCustomer}
              />
            ))}
          </tbody>
        </StyledCustomerTable>
      </StyledTableContainer>
    </>
  );
};

export default Home;
