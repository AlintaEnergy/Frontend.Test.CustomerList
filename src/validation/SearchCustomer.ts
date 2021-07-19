import { ICustomer } from "../types/types";

// function that use to simplify searches by selected key name

export const filteredLaunches = function (
  customer: ICustomer[],
  search: string,
  keys: [string, string, string]
): ICustomer[] {
  var lowSearch = search.toLowerCase();
  return customer.filter(function (element: ICustomer) {
    return keys.some((key) => {
      if (key === "firstName")
        return String(element[key]).toLowerCase().includes(lowSearch);
      if (key === "lastName")
        return String(element[key]).toLowerCase().includes(lowSearch);
      if (key === "phoneNumber")
        return String(element[key]).toLowerCase().includes(lowSearch);
      return element;
    });
  });
};
