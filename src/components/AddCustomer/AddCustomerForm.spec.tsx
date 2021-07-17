import * as React from "react";
import { render, waitFor } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { AddCustomerForm } from "./AddCustomerForm";

describe("<AddCustomerForm />", () => {
  test("should render a <AddCustomerForm />", () => {
    const wrapper = render(<AddCustomerForm saveCustomer={() => {}} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  test("should show validation on empty input", async () => {
    const { getAllByText, getByTestId, getByRole } = render(
      <AddCustomerForm saveCustomer={() => {}} />
    );

    userEvent.click(getByRole("button", { name: /add customer/i }));
    
    await waitFor(() => {
      expect(getByTestId("firstName-error")).not.toBe(null);
      expect(getByTestId("lastName-error")).not.toBe(null);
      expect(getByTestId("phoneNumber-error")).not.toBe(null);
      expect(getAllByText("This field is required.")).toHaveLength(3);
    });
  });

  test("should show validation on invalid inputs", async () => {
    const saveCustomer = jest.fn();
    const { getByLabelText, getByRole, getByTestId, getAllByText } = render(
      <AddCustomerForm saveCustomer={saveCustomer} />
    );

    userEvent.type(getByLabelText("First Name *"), "123!");
    userEvent.type(getByLabelText("Last Name *"), "123!");
    userEvent.type(getByLabelText("Phone Number *"), "abcdefg");
    userEvent.click(getByRole("button", { name: /add customer/i }));

    await waitFor(() => {
      expect(getByTestId("firstName-error")).not.toBe(null);
      expect(getByTestId("lastName-error")).not.toBe(null);
      expect(getByTestId("phoneNumber-error")).not.toBe(null);
      expect(
        getAllByText(
          "Please only use alphabet letters, apostrophes, spaces and dashes."
        )
      ).toHaveLength(2);
      expect(getAllByText("Please enter a valid phone number.")).toHaveLength(
        1
      );
    });
  });

  test("Should submit the form on valid inputs", async () => {
    const saveCustomer = jest.fn();
    const { getByLabelText, getByRole } = render(
      <AddCustomerForm saveCustomer={saveCustomer} />
    );

    userEvent.type(getByLabelText("First Name *"), "John");
    userEvent.type(getByLabelText("Last Name *"), "Doe");
    userEvent.type(getByLabelText("Phone Number *"), "0400000000");
    userEvent.click(getByRole("button", { name: /add customer/i }));

    await waitFor(() =>
      expect(saveCustomer).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "0400000000",
      })
    );
  });
});
