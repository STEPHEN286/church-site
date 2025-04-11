import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src="https://cdn-icons-png.freepik.com/256/9931/9931669.png"
        alt="Church Logo"
        className="h-12 w-auto"
      />
      <span className="ml-3 text-xl font-semibold text-gray-900">Grace Community Church</span>
    </Link>
  );
};

export default Logo; 