import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return (
    <div>
      <ul>
        <li>Age range: {selectedSearchItem.age_range}</li>
        <li>Date: {selectedSearchItem.age_range}</li>
        <li>Age range: {selectedSearchItem.age_range}</li>
        <li>Age range: {selectedSearchItem.age_range}</li>
        <li>Age range: {selectedSearchItem.age_range}</li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
