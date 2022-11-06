export interface Customer {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface CustomerSearch {
  fullName: string;
  phoneNumber: string;
}

export interface ICustomer extends Customer {
  id: number;
}

export type CustomerState = {
  customers: ICustomer[];
};

export type CustomerAction = {
  type: string;
  customer: ICustomer;
};

export type DispatchType = (args: CustomerAction) => CustomerAction;

export interface CustomerSort {
  sortOption: CustomerSortOption
}

export enum CustomerSortOption {
  None,
  FirstName,
  LastName,
  PhoneNumber,
}

