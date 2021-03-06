import React from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const ForceSummary = ({ coords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

  const [genderOptions, setGenderOptions] = useData();

  const genderArray = Array.from(new Set(data.map(({ gender }) => gender))).filter(Boolean);
  console.log(genderArray);

  const offenceArray = Array.from(
    new Set(data.map(({ object_of_search }) => object_of_search))
  );
  console.log(offenceArray);

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
