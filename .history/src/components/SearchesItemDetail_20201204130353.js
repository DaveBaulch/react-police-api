import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  //const searchItemArray = <li>test</li>;

  const searchItemArray = Object.keys(selectedSearchItem).map((key) => (
    <option key={key} value={key}>
      {selectedSearchItem[key]}
    </option>
  ));

  return (
    <div>
      <select>{searchItemArray}</select>
    </div>
  );
};

export default SearchesItemDetail;
