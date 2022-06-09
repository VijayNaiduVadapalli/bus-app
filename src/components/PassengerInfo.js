import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PassengerInfo() {
  const details = useSelector((state) => state.details);
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedBus =
    buses.find((bus) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus);
  const [passengerInfo, setPassenger] = useState({
    BusName: selectedBus.name,
    BusID: selectedBus.id,
    BusBookingDate: search.date,
    PassengerName: '',
    PassengerAge: '',
    PassengerSex: '',
    PassengerMobile: '',
  });

  const updateVaue = (e) => {
    console.log('called');
    setPassenger({ ...passengerInfo, [e.target.name]: e.target.value });
    console.log(passengerInfo);
  };

  const PreceedToPayment = () => {
    console.log(' from : passengerInfo => ' + passengerInfo);
    dispatch({ passengerInfo: passengerInfo, type: 'PASSENGERINFO' });
    navigate('/payment');
  };

  return (
    <div>
      <div className="avlResults">
        <div>
          <table id="tblPassenger">
            <tr>
              <td width="35%"> Bus Name </td>
              <td>
                <input
                  type="text"
                  name="BusName"
                  value={selectedBus.name}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td width="35%"> Bus ID </td>
              <td>
                <input
                  type="text"
                  name="BusID"
                  value={selectedBus.id}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td width="35%"> Booking Date </td>
              <td>
                <input
                  type="text"
                  name="BusBookingDate"
                  value={search.date}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td width="35%"> Name </td>
              <td>
                <input
                  type="text"
                  name="PassengerName"
                  onChange={(e) => updateVaue(e)}
                />
              </td>
            </tr>
            <tr>
              <td width="35%"> Age </td>
              <td>
                <input
                  type="number"
                  name="PassengerAge"
                  onChange={(e) => updateVaue(e)}
                />
              </td>
            </tr>
            <tr>
              <td width="35%"> Sex </td>
              <td>
                <select name="PassengerSex" onChange={(e) => updateVaue(e)}>
                  <option vaue="M">Male</option>
                  <option vaue="F">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td width="35%"> Mobile </td>
              <td>
                <input
                  type="text"
                  name="PassengerMobile"
                  onChange={(e) => updateVaue(e)}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <button className="actionButton" onClick={(e) => navigate('/bookmyseats')}>
        Select seats
      </button>
      <button className="actionButton alignLeft" onClick={(e) => navigate('/')}>
        Reset Search
      </button>
    </div>
  );
}
