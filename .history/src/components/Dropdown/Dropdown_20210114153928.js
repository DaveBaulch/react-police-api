import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Dropdown = ({ forces, onSelectChange }) => {
  const [term, setTerm] = useState('');

  const onDropdownChange = (event) => {
    setTerm(event.target.value);
    onSelectChange(event);
  };

  return (
    <div>
      <label htmlFor="forces">Please select a force:</label>
      <br />
      <select
        name="forces"
        id="forces"
        value={term}
        onChange={onDropdownChange}
      >
        <option value="">Please select...</option>
        {forces.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
  message: PropTypes.string.isRequired
};


export default Dropdown;
