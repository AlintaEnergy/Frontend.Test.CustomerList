import * as React from "react";
import { render } from "../../utils/testUtils";
import { Customer } from "./Customer";

const customer = {
  id: 1,
  firstName: "Test",
  lastName: "Tester",
  phoneNumber: "00000000",
  dateOfBirth: '1990/01/01'
};

describe("<Customer />", () => {
  it("should render a <Customer />", () => {
    const wrapper = render(
      <Customer customer={customer} removeCustomer={() => {}} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
