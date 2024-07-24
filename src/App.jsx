import React, { useState } from 'react';
import PropertySearch from './components/PropertySearch';
import PropertyList from './components/PropertyList';
import Map from './components/Map';
import './App.css';

const propertiesData = [
  {
    id: 1,
    address: '123 Main St, Anytown, USA',
    price: 350000,
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 2,
    address: '456 Maple Ave, Anytown, USA',
    price: 450000,
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    id: 3,
    address: '789 Oak Dr, Anytown, USA',
    price: 500000,
    latitude: 40.7128,
    longitude: -74.0060,
  },
];

function App() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  return (
    <div className="App">
      <h1>Real Estate Listings</h1>
      <PropertySearch 
        properties={propertiesData} 
        setFilteredProperties={setFilteredProperties} 
      />
      <PropertyList properties={filteredProperties} />
      <Map properties={filteredProperties} />
    </div>
  );
}

export default App;
