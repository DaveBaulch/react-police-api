import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import SearchesItemDetail from '../components/SearchesItemDetail';
import Modal from 'react-modal';
import { Bar } from 'react-chartjs-2';
import Breakpoints from '../config/Breakpoints';
import useData from '../hooks/useData';

const SearchesPage = () => {

  const [data, isLoading, isError] = useData(
    `/stops-force?force=${props.match.params.id}`
  );
  
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

  renderedSearches() {
    if (!this.state.selectedForceSearches.length) {
      return <div>No search details available for this force.</div>;
    }

    // console.log('state: ' + this.state.selectedForceSearches);
    return this.state.selectedForceSearches.map((search, index) => {
      return (
        <li
          key={`searches-${index}`}
          className="ui segment search-item no-bullets"
          onClick={() => this.onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }

  getEthnicityData = () => {
    //console.log(this.state.ethnicityOptions);
    return this.state.ethnicityOptions.map((ethnicity) => {
      console.log(ethnicity);
      const size = this.state.selectedForceSearches.filter(
        (item) => item.self_defined_ethnicity === ethnicity
      ).length;
      // console.log(ethnicity + ': ' + size);
      return size;
    });
  };

  onSearchItemSelect = (search) => {
    this.setState({ selectedSearchItem: search });
    this.openModal();
  };

  openModal = () => {
    //setIsOpen(true)
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  closeModal = () => {
    //setIsOpen(false);
    this.setState({ modalIsOpen: false });
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

  showGraph() {
    if (window.innerWidth > Breakpoints.config.md) {
      return (
        <Bar
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    autoSkip: false
                  }
                }
              ]
            },
            responsive: true
          }}
          data={{
            labels: this.state.ethnicityOptions,
            datasets: [
              {
                label: 'Searchs by ethnicity',
                data: this.getEthnicityData(),
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2
              }
            ]
          }}
        />
      );
    }
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <div className="ui container">
            <h1>
              {this.props.location.state.selectedForceName} searches for the
              last month
            </h1>
            <Link to={'/'} className="ui button primary">
              Back to homepage
            </Link>

            <div className="ui segment">
              <div className="ui grid">
                <div className="ui row">
                  <div className="sixteen wide column">
                    <h2>Self-defined ethnicity</h2>

                    <div className="mobile-hidden">{this.showGraph()}</div>

                    <h3>Click on an item for more detail</h3>

                    <ul className="no-padding">{this.renderedSearches()}</ul>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={this.state.customStyles}
                      contentLabel="Example Modal"
                    >
                      <button onClick={this.closeModal}>close</button>
                      <h2>Search details</h2>
                      <SearchesItemDetail
                        selectedSearchItem={this.state.selectedSearchItem}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <Loading message="Loading data..." />;
  }
}

export default SearchesPage;
