import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Spinner from '../LoadingScreen';

const MapContainer = ({ errorMessage, lat, lng }) => {
  const mapStyles = { height: '400px', width: '100%' };

  const renderContent = () => {
    if (errorMessage && !lat && !lng) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat && lng) {
      return (
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={17}
            center={{ lat: lat, lng: lng }}
          />
        </LoadScript>
      );
    }

    return <Spinner message="Please accept location request" />;
  };

  return <div>{renderContent()}</div>;
};

export default MapContainer;
