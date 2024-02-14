import BodyComponent from "../Components/BodyComponent"
import { render, screen ,fireEvent } from '@testing-library/react';
//Scenario: Check if Name Entered field contains `Name Entered: Guest` when `button` is clicked
test('BodyComponent changes state value to default when clicked', () => {
    render(<BodyComponent name="User" />);
    const resetButton = screen.getByText('Reset Name');
    const nameEnteredElement = screen.getByText(/Name Entered:/);
    fireEvent.click(resetButton);

    expect(nameEnteredElement.textContent).toBe('Name Entered: Guest');
});