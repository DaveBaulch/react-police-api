import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const searchDetail = Object.keys(selectedSearchItem).forEach(function ([
    key,
    value
  ]) {
    return <li>key: value</li>;
  });

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
