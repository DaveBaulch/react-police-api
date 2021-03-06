import React from 'react';
import { useState } from 'react';
// class Dropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { term: '' };
//   }

const Dropdown = ({ forces, onSelectChange }) => {
  const [term, setTerm] = useState('');

  const onChange = (event) => {
    setTerm(event.target.value);
    onSelectChange(event);
  };

  return (
    <div>
      <label htmlFor="forces">Please select a force:</label>
      <br />
      <select name="forces" id="forces" value={term} onChange={onSelectChange}>
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
export default Dropdown;
