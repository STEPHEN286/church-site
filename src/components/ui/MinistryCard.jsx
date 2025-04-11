import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const MinistryCard = ({ title, description, schedule, image }) => {
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
          <p className="text-gray-600 text-sm font-medium">{schedule}</p>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>

        <button
          className="w-full flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MinistryCard; 