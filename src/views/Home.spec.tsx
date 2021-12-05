import userEvent from "@testing-library/user-event";
import { render, screen } from "../utils/testUtils";
import Home from "./Home";

describe("<Home />", () => {
  it("should render three customer's details as default", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading").length).toEqual(3);
  });

  it("should show customer Alan Turning only if Alan is inputted in search box", () => {
    render(<Home />);
    userEvent.type(screen.getByRole("searchbox"), "alan");
    expect(screen.getByRole("heading")).toHaveTextContent("Alan Turing");
  });
});
