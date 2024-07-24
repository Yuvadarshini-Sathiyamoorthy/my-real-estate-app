import React, { useState } from 'react';

const PropertySearch = ({ properties, setFilteredProperties }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const filtered = properties.filter(property =>
      property.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PropertySearch;
