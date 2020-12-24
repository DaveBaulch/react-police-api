import React from 'react';
import { useState, useEffect } from 'react';
import Searches from '../Searches';
import SearchesItemDetail from '../SearchesItemDetail';
import FormSelect from '../FormSelect';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Modal from 'react-modal';
import { Doughnut } from 'react-chartjs-2';

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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const onFilterSelectChange = (event) => {
    console.log('Form filter changed');
    filterTerms[event.target.name] = event.target.value;
    setFilterTerms(filterTerms);
    filterSearchData();
  };

  const filterSearchData = () => {
    const filteredData = data.filter(
      (item) =>
        item.gender === filterTerms.genderFilterTerm &&
        item.object_of_search === filterTerms.offenceFilterTerm
    );
    setFilteredData(filteredData);
  };

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
          <div className="ui stackable grid">
            <div className="ui row">
              <div className="twelve wide column">
                <h2>Filter results</h2>
                <FormSelect
                  name={'genderFilterTerm'}
                  items={genderOptions}
                  onFilterSelectChange={onFilterSelectChange}
                  label={'Gender:'}
                />
                <FormSelect
                  name={'offenceFilterTerm'}
                  items={offenceOptions}
                  onFilterSelectChange={onFilterSelectChange}
                  label={'Offence:'}
                />
              </div>
            </div>

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
              <div className="ten wide column">
                <h3>
                  Searches by offence type -{' '}
                  {offenceFilterTerm}
                </h3>
                <Doughnut
                  data={{
                    labels: ['Male', 'Female'],
                    datasets: [
                      {
                        label: 'Searches by gender',
                        data: this.getOffenceData(),
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                      }
                    ]
                  }}
                />

                <h3>Overall searches by gender</h3>
                <Doughnut
                  data={{
                    labels: ['Male', 'Female'],
                    datasets: [
                      {
                        label: 'Crime by gender',
                        data: [
                          this.state.maleSearches,
                          this.state.femaleSearches
                        ],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                      }
                    ]
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LocationSummary;
