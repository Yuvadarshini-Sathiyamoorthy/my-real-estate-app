import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ properties }) => {
  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {properties.map(property => (
        <Marker key={property.id} position={[property.latitude, property.longitude]}>
          <Popup>
            <strong>{property.address}</strong><br />
            Price: ${property.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
