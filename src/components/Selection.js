import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default Selection = () => {
  const details = useSelector((state) => state.details);
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  console.log('from BUSES reducer ' + buses.selectedBusBUSId);
  const selectedBus =
    buses.find((bus) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus);

  return (
    <div style={{width:'200%'}} className='text-white ms-4'>
      <div>
        <p className="avlHeader">
          Selected Bus FROM <i>{search.from}</i> TO <i>{search.to}</i> ON{' '}
          <i>{search.date}</i>
        </p>
      </div>
      <div className="avlResults">
        Bus name : <i> {selectedBus.name} </i> <br />
        Bus ID : <i>{selectedBus.id}</i> <br />
        Booking Date : <i>{search.date}</i>
      </div>
      <button
        className="btn btn-primary" style={{float: 'right'}}
        onClick={(e) => navigate('/passengerInfo')}
      >
        Passenger Details{' '}
      </button>
      <button className="btn btn-primary alignLeft" onClick={(e) => navigate('/')}>
        Reset Search
      </button>
    </div>
  );
};
