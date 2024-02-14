import { render, screen } from '@testing-library/react';
import BodyComponent from '../Components/BodyComponent';

// Scenario: Check if Name entered field contains text as `Name Entered: John` by default
test('Initial value of Name entered field to be John', () => {
    render(<BodyComponent name="User" />);
    const nameEnteredElement = screen.getByText(/Name Entered:/);
    expect(nameEnteredElement.textContent).toBe('Name Entered: John');

});