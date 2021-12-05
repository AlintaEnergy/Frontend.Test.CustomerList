import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../utils/testUtils";
import { Customer } from "./Customer";
import { v4 as uuidv4 } from 'uuid';

const customer = {
  id: uuidv4(),
  firstName: "Test",
  lastName: "Tester",
  phoneNumber: "00000000",
};

describe("<Customer />", () => {
  const deleteCustomer = jest.fn();
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a <Customer />", () => {
    const wrapper = render(
      <Customer customer={customer} deleteCustomer={deleteCustomer} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should render the customer details that matches mock customer's details", () => {
    render(<Customer customer={customer} deleteCustomer={deleteCustomer} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Tester');
    expect(screen.getByText(/Phone number: /)).toHaveTextContent("Phone number: 00000000");
  });

  it("should render a delete button", () => {
    render(<Customer customer={customer} deleteCustomer={deleteCustomer} />);
    expect(screen.getByRole("button", {
      name:"Delete"
    })).toBeVisible();
  });

  it("should call deleteCustomer when delete is clicked", async () => {
    render(<Customer customer={customer} deleteCustomer={deleteCustomer} />);
    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(deleteCustomer).toHaveBeenCalledWith(customer);
    });
  })
});
