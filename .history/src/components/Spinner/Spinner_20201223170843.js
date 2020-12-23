import React from 'react';
import './Spinner.scss';
import SpinnerIcon from '../SpinnerIcon';

const Spinner = ({ message = 'Loading...' }) => (
  <div className="spinner-background">
    <div className="spinner">
      <SpinnerIcon />
      <p>{message}</p>
    </div>
  </div>
);

export default Spinner;
