import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../utils/testUtils";
import { AddCustomerForm } from "./AddCustomerForm";

describe("<AddCustomerForm />", () => {
  const saveCustomer = jest.fn();
  afterEach(() => {
    jest.clearAllMocks()
  });
  it("should render a <AddCustomerForm />", () => {
    const wrapper = render(<AddCustomerForm saveCustomer={saveCustomer} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  //@TODO Add tests for entering data and clicking submit
  it("should render 3 input fields", () => {
    render(<AddCustomerForm saveCustomer={saveCustomer} />);
    expect(screen.getAllByRole("textbox").length).toEqual(3);
  });

  it("should submit a form with input value when submit is clicked", async () => {
    render(<AddCustomerForm saveCustomer={saveCustomer} />);

    userEvent.type(screen.getByLabelText(/First Name/), 'Tom');
    userEvent.type(screen.getByLabelText(/Last Name/), 'Smith');
    userEvent.type(screen.getByLabelText(/Phone Number/), '0400 111 222');
    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(saveCustomer).toHaveBeenCalledWith({
        firstName: 'Tom',
        lastName: 'Smith',
        phoneNumber: '0400 111 222',
      });
    });
  });

});
