import React, { useState, useEffect } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { searchedBus } from '../store/action'

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const busData = useSelector(state => state.buses)



  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
//filter buses by board and drop points
    const busesList = busData.filter(bus => bus.boardingPoints.includes(from) && bus.droppingPoints.includes(to) && new Date(bus.date) >= new Date(bus.date))
    dispatch(searchedBus(busesList))  
    setIsValidated(true);

    navigate('/login');
  };

  return (
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2 style={{ marginBottom: '30px', marginTop: '20px' }}> Search Buses</h2>
      {showError ? (
        <p className="error-alert"> Please enter all values </p>
      ) : (
        ''
      )}
      <div class="form-group">
        <label>
          From:
          <input required type="text" name="from" class="form-control" onChange={e => setFrom(e.target.value)} data-testid="From-Input"/>
        </label>
      </div>

      <div class="form-group">
        <label>
          To:
          <input required type="text" name="to" class="form-control" onChange={e => setTo(e.target.value)} />
        </label>
      </div>

      <div class="form-group">
        <label>
          Date:
          <input required type="date" class="form-control" name="date" onChange={e => setDate(e.target.value)} />
        </label>
      </div>
      <button class="btn btn-primary" style={{ width: '200px' }} onClick={searchForBuses}> Search </button>
    </div>
  );
};
