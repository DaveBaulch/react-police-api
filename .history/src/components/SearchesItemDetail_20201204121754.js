import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const keys = Object.keys(selectedSearchItem);
  const searchDetail = Object.keys(selectedSearchItem).forEach(function ([
    key,
    value
  ]) {
    return key;
  });

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
