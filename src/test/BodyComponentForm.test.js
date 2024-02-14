import BodyComponent from "../Components/BodyComponent"
import { render, screen ,fireEvent} from '@testing-library/react';

//Scenario: Check if form accepts input and changes state value
test('BodyComponent renders Form, accepts input and change state value', () => {
    render(<BodyComponent name="User" />);

    const inputElement = screen.getByTestId('nameInput');
    fireEvent.change(inputElement, { target: { value: 'NewName' } });
    const nameEnteredElement = screen.getByText(/Name Entered:/);
    expect(nameEnteredElement.textContent).toBe('Name Entered: NewName');

});