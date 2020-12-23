import React from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';

const ForceSummary = ({ force }) => {
  const [data, isLoading, isError] = useData(`/forces/${force}`);
  console.log('data: ' + data + 'loading: ' + isLoading + 'error: ' + isError);

  return (
    <React.Fragment>
      {force && <h3>Selected force: {force}</h3>}
      {force && <h3>Selected force name: {data.name}</h3>}
      {data.url && (
        <h3>
          Selected force URL: <a href={data.url}>{data.url}</a>
        </h3>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: data.description
        }}
      ></div>

      <br />

      {force && (
        <Link
          to={{
            pathname: `/officers/${force}`,
            state: {
              selectedForceName: data.name
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
            pathname: `/searches/${force}`,
            state: {
              selectedForceName: data.name
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
