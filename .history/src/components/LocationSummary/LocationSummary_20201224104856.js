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
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const genderArray = Array.from(
      new Set(data.map(({ gender }) => gender))
    ).filter(Boolean);
    setGenderOptions(genderArray.filter(Boolean));

    const offenceArray = Array.from(
      new Set(data.map(({ object_of_search }) => object_of_search))
    );
    setOffenceOptions(offenceArray.filter(Boolean));

    const maleSearches = data.filter(function (search) {
      return search.gender === 'Male';
    });
    setMaleSearches(maleSearches);

    const femaleSearches = data.filter(function (search) {
      return search.gender === 'Female';
    });
    setFemaleSearches(femaleSearches);

    setFilterTerms({
      genderFilterTerm: genderArray.filter(Boolean)[0],
      offenceFilterTerm: offenceArray.filter(Boolean)[0]
    });

    const filterData = () => {
      const filteredData = data.filter(
        (item) =>
          item.gender === genderArray.filter(Boolean)[0] &&
          item.object_of_search === offenceArray.filter(Boolean)[0]
      );
      setFilteredData(filteredData);
    };

    filterData();
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

  return (
    <React.Fragment>
      <div className="ui container">
        <div className="ui segment">
        
          <div className="ui row">
                  <div className="six wide column">
                    {this.state.searchDataLoaded && (
                      <Searches
                        searches={this.state.filteredSearchData}
                        onSearchItemSelect={this.onSearchItemSelect}
                      />
                    )}
                  </div>
        
        </div>
      </div>
    </React.Fragment>
  );
};
export default ForceSummary;
