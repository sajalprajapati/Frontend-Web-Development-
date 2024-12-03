import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <p className="text-lg text-gray-700">Loading...</p>
    </div>
  );
};

export default Spinner;
