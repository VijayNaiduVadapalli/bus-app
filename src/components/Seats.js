import React from 'react';
import './BookMySeats.css';

const Seats = (props) => {

    return (
        <div className="section">
            {props.values.map(seat => {   //iterate through seats
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass;
                let marginLeft;
                if (!isAvailable) {       //disabled
                    seatClass = 'disabled';
                }
                if (isBooked) {         
                    seatClass = 'booked';
                }
                return <div className={seatClass + ' ' + (seat.charAt(seat.length - 1) == 'C' ? 'margin-left10' : '')} onClick={props.addSeat} key={seat}>
                    {seat}</div>;
            })}
        </div>
    );
}
export default Seats;