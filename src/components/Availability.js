import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function () {
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectBus = (bus) => {
    dispatch({ id: bus.id, type: 'BUS_SELECTION' });
    navigate('/selection');
    //history.push('/selection');
  };

  return (
    <div style={{width: '150%'}}>
      <h1 class="text-center text-white">Bus Availability </h1>
      <h4 className='text-white ms-3'>
        Buses for {search.from} to {search.to} on {search.date}
      </h4>
      <div class="buses-avail-container ms-3">
        {buses.map((bus) => {
          return (
              <div class="card mt-3 text-white" style={{backgroundColor:'rgba(0,0,0, 0.4)'}} >
                <h5 class="card-header">{bus.name}</h5>
                <div class="card-body">
                  <h5 class="card-title">Fare: {bus.fare}</h5>
                  <p class="card-text"><b>Arrl Time: </b> {bus.arrivalTime} <b className='ms-5'>Dept Time: </b> {bus.depatureTime}</p>
                  <a href="#" class="btn btn-primary" onClick={() => selectBus(bus)}>Book Now</a>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
