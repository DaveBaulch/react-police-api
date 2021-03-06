import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

searchDetails = searches.map((search, index) => {
  return (
    <li
      key={index}
      className="ui segment search-item"
      style={{ listStyle: 'none' }}
      onClick={() => onSearchItemSelect(search)}
    >
      Gender: {search.gender}, <br />
      Age range: {search.age_range}, <br />
      Search type: {search.object_of_search}
    </li>
  );
});
  return (
    <ul>
      <li></li>
    </ul>
  )
};

export default SearchesItemDetail;
