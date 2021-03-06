import React from 'react';

const Dropdown = ({ forces, onSelectChange }) => {
  onSelectChange = (event) => {
    event.preventDefault();
    console.log()
    ///this.props.onChange();
  };

  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onChange={this.onSelectChange}>
        {forces.map((item) => {
          return (
            <option value={item.id} key="item.id">
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Dropdown;
