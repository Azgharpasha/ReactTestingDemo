import BodyComponent from "../Components/BodyComponent"
import { render, screen} from '@testing-library/react';
// Scenario: Check if state value is set to `John` by default
test('Initial value of state to be John', () => {

    render(<BodyComponent name="User" />);
    const nameEnteredElement = screen.getByText(/Name Entered:/);

    expect(nameEnteredElement.textContent).toBe('Name Entered: John');
});