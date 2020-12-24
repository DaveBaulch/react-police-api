import React from 'react';
import { useEffect, useState } from 'react';
// import Searches from '../components/Searches';
// import SearchesItemDetail from '../components/SearchesItemDetail';
import MapContainer from '../components/MapContainer';
import LocationSummary from '../components/LocationSummary';
// import FormSelect from '../components/FormSelect';
// import policeapi from '../apis/policeapi';
// import Modal from 'react-modal';
// import { Doughnut } from 'react-chartjs-2';
// import useData from '../hooks/useData';

const LocationPage = () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // state = {
  //   latitude: null,
  //   longitude: null,
  //   errorMessage: '',
  //   selectedSearchData: [],
  //   genderOptions: [],
  //   offenceOptions: [],
  //   filterTerms: {
  //     genderFilterTerm: '',
  //     offenceFilterTerm: ''
  //   },
  //   filteredSearchData: [],
  //   searchDataLoaded: false,
  //   selectedSearchItem: null,
  //   modalIsOpen: false,
  //   customStyles: {
  //     content: {
  //       top: '50%',
  //       left: '50%',
  //       right: 'auto',
  //       bottom: 'auto',
  //       marginRight: '-50%',
  //       transform: 'translate(-50%, -50%)'
  //     }
  //   }
  // };

  // openModal = () => {
  //   //setIsOpen(true)
  //   this.setState({ modalIsOpen: true });
  // };

  // afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  // };

  // closeModal = () => {
  //   //setIsOpen(false);
  //   this.setState({ modalIsOpen: false });
  // };

  // onFilterSelectChange = (event) => {
  //   const filterTerms = this.state.filterTerms;
  //   console.log('Form filter changed');
  //   filterTerms[event.target.name] = event.target.value;
  //   this.setState({ filterTerms: filterTerms });
  //   this.filterSearchData();
  // };

  // filterSearchData = () => {
  //   const filteredSearchData = this.state.selectedSearchData.filter(
  //     (item) =>
  //       item.gender === this.state.filterTerms.genderFilterTerm &&
  //       item.object_of_search === this.state.filterTerms.offenceFilterTerm
  //   );
  //   this.setState({ filteredSearchData: filteredSearchData });
  // };

  // getOffenceData = () => {
  //   const maleSearches = this.state.selectedSearchData.filter((search) => {
  //     return (
  //       search.gender === 'Male' &&
  //       search.object_of_search === this.state.filterTerms.offenceFilterTerm
  //     );
  //   });

  //   const femaleSearches = this.state.selectedSearchData.filter((search) => {
  //     return (
  //       search.gender === 'Female' &&
  //       search.object_of_search === this.state.filterTerms.offenceFilterTerm
  //     );
  //   });

  //   return [maleSearches.length, femaleSearches.length];
  // };

  // getSearches = () => {
  //   console.log('Clicked');

  //   policeapi
  //     .get(
  //       `/stops-street?lat=${this.state.latitude}&lng=${this.state.longitude}`
  //     )
  //     .then((response) => {
  //       console.log('Data: ' + response.data);

  //       const selectedSearchData = response.data;

  //       let genderOptions = Array.from(
  //         new Set(selectedSearchData.map(({ gender }) => gender))
  //       );
  //       //console.log(genderOptions);

  //       let offenceOptions = Array.from(
  //         new Set(
  //           selectedSearchData.map(({ object_of_search }) => object_of_search)
  //         )
  //       );

  //       //console.log(offenceOptions);

  //       let maleSearches = selectedSearchData.filter(function (search) {
  //         return search.gender === 'Male';
  //       });

  //       let femaleSearches = selectedSearchData.filter(function (search) {
  //         return search.gender === 'Female';
  //       });

  //       this.setState({
  //         selectedSearchData: selectedSearchData,
  //         searchDataLoaded: true,
  //         genderOptions: genderOptions.filter(Boolean), // remove null values
  //         offenceOptions: offenceOptions.filter(Boolean), // remove null values
  //         filterTerms: {
  //           genderFilterTerm: genderOptions[0],
  //           offenceFilterTerm: offenceOptions[0]
  //         },
  //         maleSearches: maleSearches.length,
  //         femaleSearches: femaleSearches.length
  //       });

  //       this.filterSearchData();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // onSearchItemSelect = (search) => {
  //   console.log('From the list!', search);
  //   this.setState({ selectedSearchItem: search });
  //   this.openModal();
  // };

  useEffect(() => {
    console.log(window.navigator.geolocation.getCurrentPosition);
    window.navigator.geolocation.getCurrentPosition(
      (position) => setCoords(position.coords),
      (err) => setErrorMessage(err.message)
    );
  }, [setCoords]);

  return (
    <div>
      <div className="ui container">
        <h1>UK force data API</h1>

        <div className="ui segment">
          {coords && (
            <React.Fragment>
              <h2>
                Your current coordinates: {coords.latitude}, {coords.longitude}
              </h2>

              <MapContainer
                errorMessage={errorMessage}
                lat={coords.latitude}
                lng={coords.longitude}
              />
            </React.Fragment>

            <LocationSummary coords={coords} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
