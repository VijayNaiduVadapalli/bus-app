import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PassengerInfo() {
  const details = useSelector((state) => state.details); 
  const buses = useSelector((state) => state.buses); //current state returns new data
  const search = useSelector((state) => state.search); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedBus =                  //getting selected buses
    buses.find((bus) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus.date);

  const [passengerInfo, setPassenger] = useState({
    BusName: selectedBus.name,
    BusID: selectedBus.id,
    BusBookingDate: selectedBus.date,
    PassengerName: '',
    PassengerAge: '',
    PassengerSex: '',
    PassengerMobile: '',
  });

  const updateVaue = (e) => {
    console.log('called');
    setPassenger({ ...passengerInfo, [e.target.name]: e.target.value });

  };

  /*const PreceedToPayment = () => {
    console.log(' from : passengerInfo => ' + passengerInfo);
    dispatch({ passengerInfo: passengerInfo, type: 'PASSENGERINFO' });
    navigate('/payment');
  };*/

  return (
    <div style={{ width: '150%' }} className='ms-3 text-white'>
      <div className="avlResults">
        <div className='row'>
          <div className='col-md-6'>
            <label for="basic-url" class="form-label">Bus Name</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" value={selectedBus.name} disabled />
            </div>
          </div>
          <div className='col-md-6'>
            <label for="BusID" class="form-label"> Bus ID</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" value={selectedBus.id} disabled />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label for="BusBookingDate" class="form-label"> Booking Date</label>
            <div class="input-group mb-3">
              <input type="date" class="form-control" value={selectedBus.date} disabled />
            </div>
          </div>
          <div className='col-md-6'>
            <label for="BusBookingDate" class="form-label"> Name</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" onChange={(e) => updateVaue(e)} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label for="BusBookingDate" class="form-label"> Age </label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" onChange={(e) => updateVaue(e)} />
            </div>
          </div>
          <div className='col-md-6'>
            <label for="BusBookingDate" class="form-label"> Sex </label>
            <div class="input-group mb-3">
              <select name="sex" onChange={(e) => updateVaue(e)} className='form-control'>
                <option vaue="M">Male</option>
                <option vaue="F">Female</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label for="BusBookingDate" class="form-label"> Mobile </label>
              <div class="input-group mb-3">
                <input className='form-control'
                  type="text"
                  name="PassengerMobile"
                  onChange={(e) => updateVaue(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <button className="btn btn-primary w-100" onClick={(e) => navigate('/')}>
            Reset Search
          </button>
        </div>
        <div className='col-md-6'>
          <button className="btn btn-primary w-100" onClick={(e) => navigate('/bookmyseats')}>
            Select seats
          </button>
        </div>

      </div>


    </div>
  );
}
