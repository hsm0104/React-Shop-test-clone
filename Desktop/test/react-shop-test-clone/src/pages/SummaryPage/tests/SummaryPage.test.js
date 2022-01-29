// import components that are needed
import SummaryPage from '../SummaryPage';
import {render, screen} from '@testing-library/react';

// create test for checkbox and button
test("checkbox and button", ()=> {
    // render page that needs to be tested
    render(<SummaryPage />);
    // find the component by the role from screen
    const checkbox = screen.getByRole("checkbox", {
        name: "Are you sure to purchase?",
    });
    // write test sentence
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", { name: "Purchase" });
    // disable the button
    expect(confirmButton.disabled).toBeTruthy();
});


