import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Login from "./Login";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("<Login> /", () => {

    test('input name', () => {
        render(<BrowserRouter><Login /></BrowserRouter>);

        const e = screen.getByTestId("userName-input");
        expect(e).toBeInTheDocument();
        expect(e).toHaveAttribute("type", "text");
    });

    test('input name', () => {
        render(<BrowserRouter><Login /></BrowserRouter>);

        const e= screen.getByTestId("userName-input");
        userEvent.type(e, "name");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

})