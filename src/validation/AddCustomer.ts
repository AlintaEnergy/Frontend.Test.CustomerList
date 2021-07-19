import { ICustomer, Customer } from "../types/types";

export const validateFirstName = (value: string): string | undefined => {
  let error;
  if (value === "") {
    error = "First Name cannot be Empty!";
  }
  return error;
};

export const validateLastName = (value: string): string | undefined => {
  let error;
  if (!value) {
    error = "Last Name cannot be Empty!";
  }
  return error;
};

export const validatePhone = (value: string): string | undefined => {
  let error;
  if (!value) {
    error = "Phone Number Field cannot be Empty!";
  } else if (
    !/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/i.test(
      value
    )
  ) {
    error = "Invalid Australian Phone number";
  }
  return error;
};

export const validateDateOfBirth = (value: string): string | undefined => {
  let error;
  if (!value) {
    error = "Select your Date of Birth!";
  }
  return error;
};

export const storeDuplicateCheck = (
  values: Customer,
  customers: ICustomer[]
) => {
  const valueName = values.firstName + " " + values.lastName;
  const valuePhoneNumber = values.phoneNumber.replace(/[^0-9.]+/g, "");
  let error = "";
  customers.forEach((item: ICustomer) => {
    let name = item.firstName + " " + item.lastName;
    let phoneNumber = item.phoneNumber.replace(/[^0-9.]+/g, "");

    if (name === valueName) {
      error = "Customer cannot have the same name";
      return;
    }

    if (phoneNumber === valuePhoneNumber) {
      error = "Customer cannot have the same Phone Number";
      return;
    }
  });
  return error;
};
