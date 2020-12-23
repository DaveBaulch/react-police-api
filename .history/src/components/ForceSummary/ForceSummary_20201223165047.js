import React from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';

const ForceSummary = ({ force }) => {
  const [data: { name, url, }, isLoading, isError] = useData(`/forces/${force}`);
  console.log('data: ' + data + 'loading: ' + isLoading + 'error: ' + isError);



  return (
    <React.Fragment>
      {this.state.selectedForce && (
        <h3>Selected force: {this.state.selectedForce}</h3>
      )}
      {this.state.selectedForceName && (
        <h3>Selected force name: {this.state.selectedForceName}</h3>
      )}
      {this.state.selectedForceUrl && (
        <h3>
          Selected force URL:{' '}
          <a href={this.state.selectedForceUrl}>
            {this.state.selectedForceUrl}
          </a>
        </h3>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: this.state.selectedForceDescription
        }}
      ></div>

      <br />

      {this.state.selectedForce && (
        <Link
          to={{
            pathname: `/officers/${this.state.selectedForce}`,
            state: {
              selectedForceName: this.state.selectedForceName
            }
          }}
          className="ui button primary mb-10"
        >
          View officer data for this force
        </Link>
      )}

      {this.state.selectedForce && (
        <Link
          to={{
            pathname: `/searches/${this.state.selectedForce}`,
            state: {
              selectedForceName: this.state.selectedForceName
            }
          }}
          className="ui button primary"
        >
          View search data for this force
        </Link>
      )}
    </React.Fragment>
  );
};
export default ForceSummary;
