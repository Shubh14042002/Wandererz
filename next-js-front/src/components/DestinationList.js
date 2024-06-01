'use client'
import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';

const DestinationList = () => {
    
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/destinations/')
      .then(response => setDestinations(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Destinations</h1>
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>{dest.name}: {dest.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;