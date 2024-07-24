import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map(property => (
        <div key={property.id} className="property">
          <h2>{property.address}</h2>
          <p>Price: ${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
