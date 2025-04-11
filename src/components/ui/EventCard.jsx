import React from 'react';
import { BellIcon } from '@heroicons/react/24/solid';

const EventCard = ({ image, title, date, time, description, location = "Church Hall" }) => {
  const parseEventTime = (dateStr, timeStr) => {
    const [startTime, endTime] = timeStr.split(' - ');
    const startDate = new Date(`${dateStr} ${startTime}`);
    const endDate = new Date(`${dateStr} ${endTime}`);
    return { startDate, endDate };
  };

  const handleAddToCalendar = () => {
    const { startDate, endDate } = parseEventTime(date, time);
    openGoogleCalendar(title, description, location, startDate, endDate);
  };

  const openGoogleCalendar = (title, description, location, startDate, endDate) => {
    const formatDate = date =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${formatDate(startDate)}/${formatDate(endDate)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{date}</p>
          <p className="text-gray-600 text-sm">{time}</p>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{location}</span>
        </div>

        <button
          onClick={handleAddToCalendar}
          className="w-full flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <BellIcon className="w-5 h-5" />
          <span>Remind Me</span>
        </button>
      </div>
    </div>
  );
};

export default EventCard; 