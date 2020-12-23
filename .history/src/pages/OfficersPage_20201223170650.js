import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import Loading from '../components/Loading';

const OfficerPage = (props) => {
  const [data, isLoading, isError] = useData(
    `/forces/${props.match.params.id}/people`
  );

  const renderedOfficers = () => {
    if (!data.length) {
      return <div>No officer details available for this force.</div>;
    }

    // console.log('state' + this.state.selectedForceOfficers);
    return data.map((officer) => {
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
  };

  if (isLoading) {
    return <Spinner message="Loading data..." />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <div className="ui container">
      <h1>Officer Details - {props.location.state.selectedForceName}</h1>

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
};

export default OfficerPage;
