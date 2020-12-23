import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import useData from '../hooks/useData';
import Dropdown from '../components/Dropdown';
// import Spinner from '../components/Spinner';

const IndexPage = () => {
  //   forces: [],
  //   selectedForce: null,
  //   selectedForceName: '',
  //   selectedForceUrl: '',
  //   selectedForceDescription: ''
  // };

  // const [forces, setForces] = useState([]);
  const [selectedForce, setSelectedForce] = useState(null);
  // const [selectedForceName, setSelectedForceName] = useState('');
  // const [selectedForceUrl, setSelectedForceUrl] = useState('');
  // const [selectedForceDescription, setSelectedForceDescription] = useState('');

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

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

  // const getSelectedData = (selectedForce) => {
  //   // const [data, isLoading, isError] = useData(`/forces/${selectedForce}`);
  //   setSelectedForceName(data.name);
  //   setSelectedForceUrl(data.url);
  //   setSelectedForceDescription(data.description);
  //   setIsLoading(isLoading);
  //   setIsError(isError);
  // };

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
    <div>
      <div className="ui container">
        <h1>UK force data API</h1>

        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="twelve wide column">
                <h2>Select a force:</h2>

                <Dropdown forces={forces} onSelectChange={onSelectChange} />

                {selectedForce && <h3>Selected force: {selectedForce}</h3>}
                {selectedForceName && (
                  <h3>Selected force name: {selectedForceName}</h3>
                )}
                {selectedForceUrl && (
                  <h3>
                    Selected force URL:{' '}
                    <a href={selectedForceUrl}>{selectedForceUrl}</a>
                  </h3>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedForceDescription
                  }}
                ></div>

                <br />

                {selectedForce && (
                  <Link
                    to={{
                      pathname: `/officers/${selectedForce}`,
                      state: {
                        selectedForceName: selectedForceName
                      }
                    }}
                    className="ui button primary mb-10"
                  >
                    View officer data for this force
                  </Link>
                )}

                {selectedForce && (
                  <Link
                    to={{
                      pathname: `/searches/${selectedForce}`,
                      state: {
                        selectedForceName: selectedForceName
                      }
                    }}
                    className="ui button primary"
                  >
                    View search data for this force
                  </Link>
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
