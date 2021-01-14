import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FormSelect = ({ name, label, items, onFilterSelectChange }) => {
  const [term, setTerm] = useState('');

  const onSelectChange = (event) => {
    setTerm(event.target.value);
    onFilterSelectChange(event);
  };

  return (
    <React.Fragment>
      <label htmlFor={name} className="mr-10">
        {label}
      </label>
      <select
        value={term}
        name={name}
        id={name}
        onChange={onSelectChange}
        className="mr-20"
      >
        {items.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

FormSelect.propTypes = {
  forces: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default FormSelect;
