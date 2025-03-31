import React from 'react';

const MinistryIconCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-200 rounded-full p-6 mb-4">
        <div className="text-black">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MinistryIconCard;
