
import React from 'react';

import TrafficInfo from '/Final Year Project/Smart-city-Dashboard/src/components/TrafficInfo';
import WeatherInfo from '/Final Year Project/Smart-city-Dashboard/src/components/WeatherInfo';
import PollutionInfo from '/Final Year Project/Smart-city-Dashboard/src/components/PollutionInfo';
import EventsCalendar from '/Final Year Project/Smart-city-Dashboard/src/components/EventsCalendar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <TrafficInfo />
        <WeatherInfo />
        <PollutionInfo />
        <EventsCalendar />
      </div>
    </div>
  );
};

export default Dashboard;
