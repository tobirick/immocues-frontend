import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const Marker = () => <i className="fas fa-map-marker-alt map__marker" />;

const MapComponent = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 15;
  return (
    <div className="map" style={{ height: "175px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDn29s7xhE57few43QVFXC-LWjN-7IZjs0" }}
        center={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

MapComponent.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default MapComponent;
