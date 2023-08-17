
import React, { useEffect, useState } from 'react';
import { getTrains } from '../utils/api';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const trainsData = await getTrains();
        // Filter, sort, and process trainsData
        setTrains(trainsData);
      } catch (error) {
        // Handle error
      }
    };

    fetchTrains();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Trains Schedule</h1>
      {/* Render trains data here */}
    </div>
  );
};

export default AllTrainsPage;

