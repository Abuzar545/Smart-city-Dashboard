
import React from 'react';
import { WiDaySunny } from 'react-icons/wi';

const WeatherInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-3 mb-4">
        <WiDaySunny className="text-yellow-400 text-3xl" />
        <h2 className="text-xl font-semibold">Weather Info</h2>
      </div>
      <p className="text-gray-600">Current temperature: 25°C</p>
    </div>
  );
};

export default WeatherInfo;
