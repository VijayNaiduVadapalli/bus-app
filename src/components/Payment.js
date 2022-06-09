import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PassengerInfo from './PassengerInfo';

export default function Payment() {
  const details = useSelector((state) => state.details);
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  console.log(details.passengerInfo);
  const PreceedToPayment = () => {
    console.log('Payment Completed');
  };

  return (
    <div>
      <div className="avlResults">
        <h2 align="center"> Payment</h2>
        <div>
          <table id="tblPassenger" width="100%">
            <tr>
              <td>Payment Section</td>
            </tr>
            <tr>
              <td>
              <button className="actionButton alignLeft" onClick={(e) => navigate('/')}>
            Reset Search
           </button>
              </td>
              <td>
                <button
                  className="actionButton alignRight"
                //  onClick={(e)=>navigate('/bookmyseats')}
                  onClick={(e) => PreceedToPayment()}
                >
                 PayOnline
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
