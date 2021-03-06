import React from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const ForceSummary = ({ coords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

  const [data, isLoading, isError] = useData(

  const genderOptions = Array.from(new Set(data.map(({ gender }) => gender))).filter(Boolean);
  console.log(genderOptions);

  const offenceOptions = Array.from(
    new Set(data.map(({ object_of_search }) => object_of_search))
  );
  console.log(offenceOptions);

  let maleSearches = data.filter(function (search) {
    return search.gender === 'Male';
  });
  console.log(maleSearches);

  let femaleSearches = data.filter(function (search) {
    return search.gender === 'Female';
  });
  console.log(femaleSearches);

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
