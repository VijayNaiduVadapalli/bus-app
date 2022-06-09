import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Availability from './components/Availability';
import PassengerInfo from './components/PassengerInfo';
import Selection from './components/Selection';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BookingHistory from './components/BookingHistory';
import BookMySeats from './components/BookMySeats';

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/bookmyseats" element={<BookMySeats/>}/>
          <Route path="/payment" element={<Payment />} />
         
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/**" element={<Availability />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
