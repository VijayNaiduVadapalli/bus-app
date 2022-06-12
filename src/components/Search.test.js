import { render, screen } from "@testing-library/react";

import Search from './Search'
import { Provider } from 'react-redux';
import store from '../store/store'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe("<Search />", () => {

    test('search type', () => {
        render(<BrowserRouter><Provider store={store}><Search /></Provider></BrowserRouter>);

        const input= screen.getByTestId("From-Input");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });

});