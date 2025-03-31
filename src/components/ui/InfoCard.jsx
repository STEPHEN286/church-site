import React from 'react';

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8  text-center ">
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard; 