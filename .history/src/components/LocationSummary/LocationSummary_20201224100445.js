import React from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

const ForceSummary = ({ force }) => {
  const [data, isLoading, isError] = useData(`/forces/${force}`);

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

  return <React.Fragment>Location summary</React.Fragment>;
};
export default ForceSummary;
