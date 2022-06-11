import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Payment1 from './Payment/Payment1';

export default function Payment() {

  const navigate = useNavigate();



  return (
    <div className='xyz'>
      <Payment1 />
     

    </div>
  );
}
