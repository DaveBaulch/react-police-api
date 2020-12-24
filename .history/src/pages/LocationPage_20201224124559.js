import React from 'react';
import { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import LocationSummary from '../components/LocationSummary';
// import FormSelect from '../components/FormSelect';
// import policeapi from '../apis/policeapi';
// import Modal from 'react-modal';
// import { Doughnut } from 'react-chartjs-2';
// import useData from '../hooks/useData';

const LocationPage = () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log(window.navigator.geolocation.getCurrentPosition);
    window.navigator.geolocation.getCurrentPosition(
      (position) => setCoords(position.coords),
      (err) => setErrorMessage(err.message)
    );
  }, [setCoords]);

  return (
    <div>
      <div className="ui container">
        <h1>UK force data API</h1>

        <div className="ui segment">
          {coords && (
            <React.Fragment>
              <h2>
                Your current coordinates: {coords.latitude}, {coords.longitude}
              </h2>

              <MapContainer
                errorMessage={errorMessage}
                lat={coords.latitude}
                lng={coords.longitude}
              />

              <LocationSummary coords={coords} />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
