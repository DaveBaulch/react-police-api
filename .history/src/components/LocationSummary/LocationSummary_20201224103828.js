import React from 'react';
import { useState, useEffect } from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const ForceSummary = ({ coords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

  const [genderOptions, setGenderOptions] = useState([]);
  const [offenceOptions, setOffenceOptions] = useState([]);
  const [maleSearches, setMaleSearches] = useState([]);
  const [femaleSearches, setFemaleSearches] = useState([]);
  const [filterTerms, setFilterTerms] = useState({});
  const [filteredSearchData, setFilteredSearchData] = useState([]);

  const filterSearchData = () => {
    const filteredSearchData = data.filter(
      (item) =>
        item.gender === filterTerms.genderFilterTerm &&
        item.object_of_search === filterTerms.offenceFilterTerm
    );
    setFilteredSearchData(filteredSearchData);
  };

  useEffect(() => {
    const genderArray = Array.from(
      new Set(data.map(({ gender }) => gender))
    ).filter(Boolean);
    setGenderOptions(genderArray.filter(Boolean));

    const offenceArray = Array.from(
      new Set(data.map(({ object_of_search }) => object_of_search))
    );
    setOffenceOptions(offenceArray.filter(Boolean));

    let maleSearches = data.filter(function (search) {
      return search.gender === 'Male';
    });
    setMaleSearches(maleSearches);

    let femaleSearches = data.filter(function (search) {
      return search.gender === 'Female';
    });
    setFemaleSearches(femaleSearches);

    setFilterTerms({
      genderFilterTerm: genderArray.filter(Boolean),
      offenceFilterTerm: offenceArray.filter(Boolean)
    });

    filterSearchData();
  }, [data]);

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
