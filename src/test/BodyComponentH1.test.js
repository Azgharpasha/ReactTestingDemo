import BodyComponent from "../Components/BodyComponent"
import { render, screen} from '@testing-library/react';
//Scenario: Check if `h2` tag in BodyComponent contains text `Hello Charlie!!` when prop is sent as name="Charlie"
test("Checking h2 content in Body", () => {
    render(<BodyComponent name="User" />);

    const element = screen.getByText(/Hello/i);
    expect(element).toBeInTheDocument();
})