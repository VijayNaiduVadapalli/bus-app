import { render, screen } from '@testing-library/react'
import Availability from './Availability'
import { Provider } from 'react-redux';
import store from '../store/store'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('availabity component', () => {
    test('checking title', () => {
        render(<Provider store={store}><BrowserRouter><Availability /></BrowserRouter></Provider>)

        const text = screen.getByText('Bus Availability')
        expect(text).toBeInTheDocument();
    })
})  