import React from 'react';
import { WiSmoke } from 'react-icons/wi'; // ✅ valid icon for pollution


const PollutionInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-3 mb-4">
        <WiSmoke className="text-gray-500 text-3xl" />
        <h2 className="text-xl font-semibold">Pollution Levels</h2>
      </div>
      <p className="text-gray-600">Air quality index: 75 (Moderate)</p>
    </div>
  );
};

export default PollutionInfo;
