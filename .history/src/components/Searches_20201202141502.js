import './Searches.css';
import React from 'react';

const Searches = ({ searches, onSearchItemSelect }) => {
  console.log('Props:' + searches);
  let searchList = null;

  if (searches) {
    searchList = searches.map((search, index) => {
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
  }
  return (
    <div>
      Searches: <ul style={{ padding: 0 }}>{searchList}</ul>
    </div>
  );
};
export default Searches;
