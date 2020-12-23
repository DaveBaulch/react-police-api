import React from 'react';
// import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../components/Loading';
import SearchesItemDetail from '../components/SearchesItemDetail';
import Modal from 'react-modal';
import { Bar } from 'react-chartjs-2';
import Breakpoints from '../config/Breakpoints';
import useData from '../hooks/useData';

const SearchesPage = ({ match, location }) => {
  const [data, isLoading, isError] = useData(
    `/stops-force?force=${match.params.id}`
  );

  const [selectedSearchItem, setSelectedSearchItem] = useState(null);
  const [ethnicityOptions, setEthnicityOptions] = useState([]);
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

  // state = {
  //   selectedForceSearches: [],
  //   dataLoaded: false,
  //   ethnicityOptions: [],
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

  const renderedSearches = () => {
    if (!data.length) {
      return <div>No search details available for this force.</div>;
    }

    // console.log('state: ' + this.state.selectedForceSearches);
    return data.map((search, index) => {
      return (
        <li
          key={`searches-${index}`}
          className="ui segment search-item no-bullets"
          onClick={() => onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  };

  const getEthnicityOptions = () => {
    let ethnicityOptions = Array.from(
      new Set(data.map(({ self_defined_ethnicity }) => self_defined_ethnicity))
    );
    setEthnicityOptions(ethnicityOptions);
    getEthnicityData;
  };

  const getEthnicityData = () => {
    return data.ethnicityOptions.map((ethnicity) => {
      console.log(ethnicity);
      const size = data.filter(
        (item) => item.self_defined_ethnicity === ethnicity
      ).length;
      return size;
    });
  };

  const onSearchItemSelect = (search) => {
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

  // componentDidMount() {
  //   policeapi
  //     .get(`/stops-force?force=${this.props.match.params.id}`)
  //     .then((response) => {
  //       // console.log(response.data);
  //       this.setState({ selectedForceSearches: response.data });
  //       setTimeout(() => this.setState({ dataLoaded: true }), 500);

  //       let ethnicityOptions = Array.from(
  //         new Set(
  //           response.data.map(
  //             ({ self_defined_ethnicity }) => self_defined_ethnicity
  //           )
  //         )
  //       );
  //       this.setState({ ethnicityOptions: ethnicityOptions });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // showGraph() {
  //   if (window.innerWidth > Breakpoints.config.md) {
  //     return (
  //       <Bar
  //         options={{
  //           scales: {
  //             xAxes: [
  //               {
  //                 ticks: {
  //                   autoSkip: false
  //                 }
  //               }
  //             ]
  //           },
  //           responsive: true
  //         }}
  //         data={{
  //           labels: this.state.ethnicityOptions,
  //           datasets: [
  //             {
  //               label: 'Searchs by ethnicity',
  //               data: this.getEthnicityData(),
  //               backgroundColor: 'rgba(75,192,192,1)',
  //               borderColor: 'rgba(0,0,0,1)',
  //               borderWidth: 2
  //             }
  //           ]
  //         }}
  //       />
  //     );
  //   }
  // }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="ui container">
        <h1>{location.state.selectedForceName} searches for the last month</h1>
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>

        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="sixteen wide column">
                <h2>Self-defined ethnicity</h2>

                <h3>Click on an item for more detail</h3>
                <ul className="no-padding">{renderedSearches()}</ul>

                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <button onClick={closeModal}>close</button>
                  <h2>Search details</h2>
                  <SearchesItemDetail selectedSearchItem={selectedSearchItem} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchesPage;
