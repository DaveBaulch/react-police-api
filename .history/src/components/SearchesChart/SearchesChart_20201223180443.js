import React from 'react';

const SearchesChart = ({ data }) => {


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

export default SearchesChart;
