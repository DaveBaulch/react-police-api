import React from 'react';
import { useState } from 'react';
import useData from '../hooks/useData';
import ForceSummary from '../components/ForceSummary';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';

const IndexPage = () => {
  const [data, isLoading, isError] = useData(`/forces`);
  const [selectedForce, setSelectedForce] = useState('');

  const onSelectChange = (event) => {
    const selectedForce =
      event.target.options[event.target.selectedIndex].value;

    if (selectedForce === '') {
      setSelectedForce(null);
      return;
    }
    setSelectedForce(selectedForce);
  };

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

  return (
    <div>
      <div className="ui container">
        <h1>UK force data API</h1>

        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="twelve wide column">
                <h2>Select a force:</h2>
                <Dropdown forces={data} onSelectChange={onSelectChange} />
                {selectedForce && (
                  <ForceSummary force={selectedForce} />
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
