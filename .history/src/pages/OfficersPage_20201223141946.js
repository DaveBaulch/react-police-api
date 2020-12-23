import React from 'react';
import { useState } from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const OfficerPage = () => {
  const [selectedForceOfficers, setSelectedForceOfficers] = useState([]);
   const [dataLoaded, setDataLoaded] = useState(false);

  renderedOfficers() {
    if (!selectedForceOfficers.length) {
      return <div>No officer details available for this force.</div>;
    }

    // console.log('state' + this.state.selectedForceOfficers);
    return selectedForceOfficers.map((officer) => {
      return (
        <div key={officer.name}>
          <h2>{officer.name}</h2>

          {officer.rank && (
            <React.Fragment>
              <h3>Rank</h3>
              {officer.rank}
            </React.Fragment>
          )}

          {officer.bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: officer.bio
                }}
              ></div>
            </React.Fragment>
          )}

          {!(Object.keys(officer.contact_details).length === 0) && (
            <React.Fragment>
              <h3>Contact details</h3>
              <strong>{Object.keys(officer.contact_details)} : </strong>
              <a href={officer.contact_details}>
                {Object.values(officer.contact_details)}
              </a>
            </React.Fragment>
          )}

          <br />
          <br />
          <hr />
          <br />
          <br />
        </div>
      );
    });
  }

  componentDidMount() {
    policeapi
      .get(`/forces/${props.match.params.id}/people`)
      .then((response) => {
        // console.log(response.data);
        setSelectedForceOfficers(response.data );
        setTimeout(() => setDataLoaded(true), 500);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (dataLoaded) {
      return (
        <div className="ui container">
          <h1>
            Officer Details - {props.location.state.selectedForceName}
          </h1>

          <div className="ui segment">
            <Link to={'/'} className="ui button primary">
              Back to homepage
            </Link>
            <br />
            <br />
            {renderedOfficers()}
          </div>
        </div>
      );
    }

    return <Spinner message="Loading data..." />;
  }
}

export default OfficerPage;
