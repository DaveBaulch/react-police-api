import React from 'react';
import { useState, useEffect } from 'react';
import Searches from '../Searches';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Modal from 'react-modal';
import SearchesItemDetail from '../components/SearchesItemDetail';

const LocationSummary = ({ coords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

  const [genderOptions, setGenderOptions] = useState([]);
  const [offenceOptions, setOffenceOptions] = useState([]);
  const [maleSearches, setMaleSearches] = useState([]);
  const [femaleSearches, setFemaleSearches] = useState([]);
  const [filterTerms, setFilterTerms] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSearchItem, setSelectedSearchItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSearchItemSelect = (search) => {
    console.log('From the list!', search);
    setSelectedSearchItem(search);
    openModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
              {data.length && (
                <React.Fragment>
                  <Searches
                    searches={filteredData}
                    onSearchItemSelect={onSearchItemSelect}
                  />
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button onClick={closeModal}>close</button>
                    <h2>Search details</h2>
                    <SearchesItemDetail
                      selectedSearchItem={selectedSearchItem}
                    />
                  </Modal>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LocationSummary;
