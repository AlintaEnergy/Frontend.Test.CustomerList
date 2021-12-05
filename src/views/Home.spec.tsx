import { render, screen } from "../utils/testUtils";
import  Home  from "./Home";

describe("<Home />", () => {
    it("should render three customer's details as default", () => {
        render(<Home />);
        expect(screen.getAllByRole("heading").length).toEqual(3);
    });
});