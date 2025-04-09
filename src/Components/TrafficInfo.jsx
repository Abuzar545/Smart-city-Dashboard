
import React from 'react';
import { FaTrafficLight } from 'react-icons/fa';

const TrafficInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-3 mb-4">
        <FaTrafficLight className="text-yellow-500 text-3xl" />
        <h2 className="text-xl font-semibold">Traffic Updates</h2>
      </div>
      <p className="text-gray-600">No current traffic information available.</p>
    </div>
  );
};

export default TrafficInfo;
