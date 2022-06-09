import React from 'react';
import './BookMySeats.css';

const Seats = (props) => {

    return (
        <div className="section">
            {props.values.map(seat => {
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass;
                let marginLeft;
                if (!isAvailable) {
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