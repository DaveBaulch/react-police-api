import React from 'react';

const map = () => {
  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onChange={onSelectChange}>
        {forces.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Map;
