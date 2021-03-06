import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

class SearchesPage extends React.Component {
  state = {
    selectedForceSearches: [],
    dataLoaded: false
  };

  renderedSearches() {
    if (!this.state.selectedForceSearches.length) {
      return <div>No search details available for this force.</div>;
    }

    console.log('state: ' + this.state.selectedForceSearches);
    return this.state.selectedForceSearches.map((search, index) => {
      return (
        <li
          key={index}
          className="ui segment search-item"
          style={{ listStyle: 'none' }}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }

  componentDidMount() {
    policeapi
      .get(`/stops-force?force=${this.props.match.params.id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ selectedForceSearches: response.data });
        setTimeout(() => this.setState({ dataLoaded: true }), 500);

        let genderOptions = Array.from(
          new Set(
            selectedForceSearches.map(
              ({ object_of_search }) => object_of_search
            )
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <div className="ui container">
            <h1>
              Force Searches - {this.props.location.state.selectedForceName}
            </h1>
            <Link to={'/'} className="ui button primary">
              Back to homepage
            </Link>

            <div className="ui grid">
              <div className="ui row">
                <div className="eight wide column">
                  <div className="searches">
                    <ul style={{ padding: '0' }}>{this.renderedSearches()}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <Spinner message="Loading data..." />;
  }
}

export default SearchesPage;
