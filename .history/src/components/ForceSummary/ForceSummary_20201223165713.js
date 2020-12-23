import React from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

const ForceSummary = ({ force }) => {
  const [data, isLoading, isError] = useData(`/forces/${force}`);
  // console.log('data: ' + data + 'loading: ' + isLoading + 'error: ' + isError);

  if (isLoading) {
    return <>;
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
      {force && <h3>Selected force: {force}</h3>}
      {data.name && <h3>Selected force name: {data.name}</h3>}
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

      {force && (
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
