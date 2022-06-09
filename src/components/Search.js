import React, { useState, useEffect } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_BUS' });
    navigate('availability');
  };

  return (
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2 style={{marginBottom: '30px', marginTop: '20px'}}> Search Buses</h2>
      {showError ? (
        <p className="error-alert"> Please enter all values </p>
      ) : (
        ''
      )}
      <div class="form-group">
        <label>
          From:
          <input required type="text" name="from" class="form-control" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          To:
          <input required type="text" name="to" class="form-control" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          Date:
          <input required type="date" class="form-control" name="date" onChange={updateValue} />
        </label>
      </div>
      <button class="btn btn-primary" style={{width: '200px'}} onClick={searchForBuses}> Search </button>
    </div>
  );
};
