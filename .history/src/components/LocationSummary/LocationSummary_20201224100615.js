import React from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const ForceSummary = ({ cooords }) => {
  const [data, isLoading, isError] = useData(
    `/stops-street?lat=${coords.latitude}&lng=${coords.longitude}`
  );

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

  return <React.Fragment>{ }}</React.Fragment>;
};
export default ForceSummary;
