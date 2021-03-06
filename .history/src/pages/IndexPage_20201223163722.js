import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import Dropdown from '../components/Dropdown';
// import Spinner from '../components/Spinner';

const IndexPage = () => {
  const [data, isLoading, isError] = useData(`/forces`);

  const [forces, setForces] = useState([]);
  const [selectedForce, setSelectedForce] = useState('');
  const [selectedForceName, setSelectedForceName] = useState('');
  const [selectedForceUrl, setSelectedForceUrl] = useState('');
  const [selectedForceDescription, setSelectedForceDescription] = useState('');

  if (!isLoading && !isError) {
    setForces(data)
  }

  const onSelectChange = (event) => {
    const selectedForce =
      event.target.options[event.target.selectedIndex].value;

    if (selectedForce === '') {
      setSelectedForce(null);
      setSelectedForceName('');
      setSelectedForceUrl('');
      setSelectedForceDescription('');
      return;
    }
    setSelectedForce(selectedForce);
  };

  return (
    <div>
      <div className="ui container">
        <h1>UK force data API</h1>

        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="twelve wide column">
                <h2>Select a force:</h2>
                <Dropdown forces={forces} onSelectChange={onSelectChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
