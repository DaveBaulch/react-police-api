import React from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const ForceSummary = ({ coords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

let genderOptions = Array.from(new Set(data.map(({ gender }) => gender)));
//console.log(genderOptions);

let offenceOptions = Array.from(
  new Set(data.map(({ object_of_search }) => object_of_search))
);

//console.log(offenceOptions);

let maleSearches = selectedSearchData.filter(function (search) {
  return search.gender === 'Male';
});

let femaleSearches = selectedSearchData.filter(function (search) {
  return search.gender === 'Female';
});


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return <React.Fragment>gdgfd</React.Fragment>;
};
export default ForceSummary;
