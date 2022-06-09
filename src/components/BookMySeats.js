import React, {useState} from 'react';
import Seats from './Seats';
import { useNavigate } from 'react-router-dom';
import './BookMySeats.css';

const createSeats = (rows, startIndex) => {
    let i = 0;
    let j = startIndex;
    let k = 'A';
    const section = [];
    while(i < 4 && j <= rows) {
        if(k > 'D') {
            k = 'A';
            j++;
        }
        if(j < rows + 1) {
            section.push(j + k);
            k = String.fromCharCode(k.charCodeAt(0) + 1);
        }
    }
    return section;

}


const BookMySeats = () => {
  const navigate = useNavigate();
  const premiumSeats = createSeats(2, '1');
  const normalSeats = createSeats(10, '3');
  const [availableSeats, setAvailableSeats] = useState(['1A', '1B', '2A', '2B', '10A', '10B']);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [bookedStatus, setBookedStatus] = useState('');
  const addSeat = (ev) => {
      if(numberOfSeats && !ev.target.className.includes('disabled')) {
          const seatsToBook = parseInt(numberOfSeats, 10);
        if(bookedSeats.length <= seatsToBook) {
            if (bookedSeats.includes(ev.target.innerText)) {
                const newAvailable = bookedSeats.filter(seat => seat !== ev.target.innerText);
                setBookedSeats(newAvailable);
            } else if(bookedSeats.length < numberOfSeats) {
                setBookedSeats([...bookedSeats, ev.target.innerText]);

            } else if (bookedSeats.length === seatsToBook) {
                bookedSeats.shift();
                setBookedSeats([...bookedSeats, ev.target.innerText]);
            }
        }
      }
    };

  const confirmBooking = () => {
      setBookedStatus('You have successfully booked the following seats:');
      bookedSeats.forEach(seat => {
           setBookedStatus(prevState => {
               return prevState + seat + ' ';
           })
      });
 const newAvailableSeats = availableSeats.filter(seat => !bookedSeats.includes(seat));
      setAvailableSeats(newAvailableSeats);
      setBookedSeats([]);
      setNumberOfSeats(0);
  };
  const [numberOfSeats, setNumberOfSeats] = useState(0);

  return (
        <React.Fragment>
            <div className="bookMySeat">

            <p className='card-text' style={{marginLeft: '10px', color: 'white', paddingTop: '10px', fontFamily: 'inherit'}}>How many seats would you like to book?</p>
            <input value={numberOfSeats} type="text" class="form-control w-25" style={{marginLeft: '10px'}} onChange={(ev) => setNumberOfSeats(ev.target.value)}/>
            <Seats values={premiumSeats}
                   availableSeats={availableSeats}
                   bookedSeats={bookedSeats}
                   addSeat={addSeat}/>
            <Seats values={normalSeats}
                   availableSeats={availableSeats}
                   bookedSeats={bookedSeats}
                   addSeat={addSeat}/>
                <button type="button" class="btn btn-primary" style={{marginLeft: '10px'}} onClick={confirmBooking}>Book seats</button>
            <p style={{fontFamily:'cursive', color: 'white'}}>{bookedStatus}</p>

            <button  type="button" class="btn btn-primary" style={{marginLeft: '10px', marginBottom: '50px'}} onClick={(e)=>navigate('/payment')}>Proceed for Payment</button>
   
            </div>
        </React.Fragment>
  );  
}

export default BookMySeats;