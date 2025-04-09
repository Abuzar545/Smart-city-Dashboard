
import React from 'react';
import { MdEvent } from 'react-icons/md'; 

const EventsCalendar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-3 mb-4">
        <MdEvent className="text-blue-500 text-3xl" />
        <h2 className="text-xl font-semibold">Local Events</h2>
      </div>
      <p className="text-gray-600">No upcoming events.</p>
    </div>
  );
};

export default EventsCalendar;
