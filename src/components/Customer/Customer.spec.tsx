import * as React from "react";
import { render } from "../../utils/testUtils";
import { Customer } from "./Customer";

const customers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "0410000000",
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Smith",
    phoneNumber: "0410000000",
  },
];

describe("<Customer />", () => {
  test("should render a <Customer />", () => {
    const wrapper = render(
      <Customer customers={customers} removeCustomer={() => {}} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  test("should render all customers in table", async () => {
    const { getAllByRole } = render(
      <Customer customers={customers} removeCustomer={() => {}} />
    );
    expect(getAllByRole("row")).toHaveLength(3);
    expect(getAllByRole("row")[1]).toHaveTextContent(/John/);
  });
});
