import React from 'react';
import PropTypes from 'prop-types';
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

Spinner.propTypes = {
  message: PropTypes.string
};

export default Spinner;
