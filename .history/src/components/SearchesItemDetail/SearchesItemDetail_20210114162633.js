import React from 'react';
import PropTypes from 'prop-types';

const SearchesItemDetail = ({
  selectedSearchItem,
  selectedSearchItem: {
    age_range,
    datetime,
    gender,
    involved_person,
    legislation,
    object_of_search,
    outcome,
    officer_defined_ethnicity,
    self_defined_ethnicity
  }
}) => {
  if (!selectedSearchItem) {
    return <div>No details available</div>;
  }

  return (
    <div>
      <ul>
        <li>Age range: {age_range}</li>
        <li>Date: {datetime}</li>
        <li>Gender: {gender}</li>
        <li>Person involved: {involved_person}</li>
        <li>Legislation: {legislation}</li>
        <li>Object of search: {object_of_search}</li>
        <li>Outcome: {outcome}</li>
        <li>Officer defined ethnicity: {officer_defined_ethnicity}</li>
        <li>Self defined ethnicity: {self_defined_ethnicity}</li>
      </ul>
    </div>
  );
};

SearchesItemDetail.propTypes = {
  selectedSearchItem: PropTypes.string.isRequired
};
  selectedSearchItem,
  selectedSearchItem: {
    age_range,
    datetime,
    gender,
    involved_person,
    legislation,
    object_of_search,
    outcome,
    officer_defined_ethnicity,
    self_defined_ethnicity
}
  
export default SearchesItemDetail;
