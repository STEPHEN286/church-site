import React from 'react';

const CardsWrapper = ({ children, title, bgColor = "bg-white", className }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
        )}
        <div className={`grid ${className}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CardsWrapper;
