import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  const searchDetail = '<li>here</li>';

  // const searchDetail = Object.keys(selectedSearchItem).map((key) => (
  //   <li>key</li>
  // ));

  return <h2>here</h2>;
};

export default SearchesItemDetail;
